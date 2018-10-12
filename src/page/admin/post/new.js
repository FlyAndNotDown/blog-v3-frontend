/**
 * /page/admin/post/new.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../../component/tool/k-layout';
import { Row, Col, Divider, Button, Input, Drawer, Form, Select, message, Spin } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { DoItOnPC } from '../../../component/gadget/do-it-on-pc';
import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';
import requestConfig from '../../../config/request';
import regexConfig from '../../../config/regex';
import { Log } from "../../../tool/log";

const postRegex = regexConfig.post;

/**
 * 管理员新建文章界面
 * @constructor
 */
export class AdminNewPostPage extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        /**
         * @property {boolean} loaded 是否已经加载完成
         * @property {boolean} editorToggled 当前Markdown编辑器是否处于编辑器模式
         * @property {string} title 标题
         * @property {string} description 描述
         * @property {string} body 文章正文
         * @property {[]} labels 选中的标签id数组
         * @property {boolean} locked 网络请求用到的锁
         * @property {boolean} drawerVisible 抽屉是否被打开
         * @property {[{name: string, id: number}]} labelSelectOptions 标签备选项
         * @property {boolean} haveLabelOptionData 是否有标签备选项数据
         */
        this.state = {
            loaded: false,
            editorToggled: true,
            title: '',
            description: '',
            body: '',
            labels: [],
            locked: false,
            drawerVisible: false,
            labelSelectOptions: [],
            haveLabelOptionData: false
        };
    }

    /**
     * 设置加载已经完成
     */
    setLoadedTrue = () => {
        this.setState({ loaded: true });
    };

    /**
     * 组件加载生命周期函数
     */
    async componentDidMount() {
        let response;
        let data;

        // 发送请求进行进行管理员登录校验
        try {
            response = await axios.get(requestConfig.adminLogin, {
                params: {
                    type: 'info'
                }
            });
        } catch(e) {
            Log.devError(`get ${requestConfig.adminLogin}`, e);
            message.error('管理员未登录，请先登录');
            // 赶出去
            return this.props.history.push('/admin');
        }

        // 如果成功了
        Log.dev(`get ${requestConfig.adminLogin} OK`);
        response = response || {};
        data = response || {};

        let login = !!data.login;
        if (!login) {
            // 如果没有登录，赶出去
            message.error('管理员未登录，请先登录');
            return this.props.history.push('/admin');
        }

        // 如果用户已经登录，则设置加载已经完成
        this.setLoadedTrue();

        // TODO tab事件监听，todo 先写在这里
        // TODO 自动上传图片，todo 先写在这里
    }

    /**
     * Markdown编辑器按钮被点击的回调
     */
    onEditorButtonClick = () => {
        this.setState({
            editorToggled: true
        });
    };

    /**
     * 预览按钮被点击的回调
     */
    onPreviewButtonClick = (e) => {
        this.setState({
            editorToggled: false
        });
    };

    /**
     * body改变的回调
     * @param {Object} e 事件对象
     */
    onBodyChange = (e) => {
        this.setState({
            body: e.target.value
        });
    };

    /**
     * 打开抽屉
     */
    openDrawer = () => {
        this.setState({ drawerVisible: true });
    };

    /**
     * 关闭抽屉
     */
    closeDrawer = () => {
        this.setState({ drawerVisible: false });
    };

    /**
     * 发表文章按钮点击回调
     * @param {Object} e 事件对象
     */
    onPublishPostButtonClick = async (e) => {
        // 打开抽屉
        this.openDrawer();
        // 判断是否需要获取 labels 备选数据
        if (!this.state.haveLabelOptionData) {
            // 如果需要，则发送请求获取 labels 备选
            let response;
            let data;

            try {
                response = await axios.get(requestConfig.label, {
                    params: {
                        type: 'all'
                    }
                });
            } catch(e) {
                Log.devError(`get ${requestConfig.label}`, e);
                message.error('加载数据失败，请重试');
                return this.closeDrawer();
            }

            // 如果请求成功了
            Log.dev(`get ${requestConfig.label} OK`);
            response = response || {};
            data = response.data || {};

            let labels = data.labels || [];
            this.setState({
                haveLabelOptionData: true,
                labelSelectOptions: labels
            });
        }
    };

    /**
     * 发表文章抽屉关闭回调
     */
    onPublishPostDrawerClose = () => {
        this.setState({
            drawerVisible: false
        });
    };

    /**
     * 标签选择器变化回调
     * @param {Object} value 选择器的值
     */
    onLabelSelectChange = (value) => {
        this.setState({
            labels: value
        });
    };

    /**
     * 标题改变回调
     * @param {Object} e 事件对象
     */
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    /**
     * 加锁
     */
    lock = () => {
        this.setState({
            locked: true
        });
    };

    /**
     * 解锁
     */
    unLock = () => {
        this.setState({
            locked: false
        });
    };

    /**
     * 确认发表按钮点击的回调
     * @param {Object} e 事件对象
     */
    onConfirmPublishButtonClick = async (e) => {
        // 加锁
        this.lock();

        // 参数校验
        if (!this.state.title.match(postRegex.title)) {
            this.unLock();
            return message.error('标题不符合规范');
        }
        if (!this.state.description.match(postRegex.description)) {
            this.unLock();
            return message.error('描述不符合规范');
        }

        let response;
        let data;

        // 发送请求新建文章
        try {
            response = await axios.post(`${requestConfig.post}`, {
                title: this.state.title,
                body: this.state.body,
                description: this.state.description,
                labels: this.state.labels
            });
        } catch(e) {
            Log.devError(`post ${requestConfig.post}`, e);
            this.unLock();
            return message.error('文章未能发表成功，请重试');
        }

        // 如果请求成功了
        Log.dev(`post ${requestConfig.post} OK`);
        response = response || {};
        data = response.data || {};

        let success = !!data.success;
        if (!success) {
            return message.error('文章未能发表成功，请重试');
        }
        message.info('发表文章成功');
        return this.closeDrawer();
    };

    /**
     * 标签选择器候选项的映射函数
     * @param {{key: string, value: string}} option
     * @param {number} key 索引号
     * @returns {*} JSX
     */
    labelSelectOptionMapFunc = (option, key) => {
        return (
            <Select.Option value={option.id} key={key}>{option.name}</Select.Option>
        );
    };

    /**
     * 描述改变回调
     * @param {Object} e 事件对象
     */
    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 在电脑端登录提示挂件
        const doItOnPCGadget = (
            <Row
                className={'w-100 h-100'}
                type={'flex'}
                align={'middle'}
                justify={'center'}>
                <Col>
                    <DoItOnPC/>
                </Col>
            </Row>
        );

        // 欢迎行
        const welcomeRow = (
            <div>
                <div className={'font-size-xxl'}>
                    <Link className={'color-black text-decoration-none'} to={'#'}>写文章</Link>
                </div>
                <div className={'color-second font-size-sm'}>
                    <span role={'img'} aria-labelledby={'happy-face'}>😀</span>
                    写作的快乐
                </div>
                <Divider/>
            </div>
        );

        // 操作行
        const actionRow = (
            <div>
                <div>
                    <Button.Group className={'float-left'}>
                        <Button
                            type={'normal'}
                            onClick={this.onEditorButtonClick}>
                            Markdown编辑器
                        </Button>
                        <Button
                            type={'normal'}
                            onClick={this.onPreviewButtonClick}>
                            预览
                        </Button>
                    </Button.Group>
                    <Button
                        type={'primary'}
                        className={'float-right'}
                        onClick={this.onPublishPostButtonClick}>
                        发表文章
                    </Button>
                </div>
                <br/>
                <Divider/>
            </div>
        );

        // 编辑器行
        const editorRow = (
            <div>
                <Input.TextArea
                    autosize={{
                        minRows: 20,
                        maxRows: 20
                    }}
                    value={this.state.body}
                    onChange={this.onBodyChange}/>
            </div>
        );

        // 预览行
        const previewRow = (
            <div className={'markdown-preview'}>
                <ReactMarkdown
                    className={'markdown-body'}
                    source={this.state.body}
                    renderers={{
                        code: (object) => {
                            return (
                                <SyntaxHighlighter
                                    language={object.language}>
                                    {object.value}
                                </SyntaxHighlighter>
                            );
                        }
                    }}/>
            </div>
        );

        // 发表文章抽屉
        const publishPostDrawer = (
            <Drawer
                width={400}
                title={'发表文章'}
                placement={'right'}
                closable={false}
                onClose={this.onPublishPostDrawerClose}
                visible={this.state.drawerVisible}>
                {this.state.haveLabelOptionData ? (
                    <Form>
                        <Form.Item label={'标题'}>
                            <Input
                                placeholder={'取个什么名字好呢'}
                                onChange={this.onTitleChange}/>
                        </Form.Item>
                        <Form.Item label={'描述'}>
                            <Input.TextArea
                                autosize={{
                                    minRows: 10,
                                    maxRows: 10
                                }}
                                value={this.state.description}
                                placeholder={'文章描述 ( 真难编'}
                                onChange={this.onDescriptionChange}/>
                        </Form.Item>
                        <Form.Item label={'标签'}>
                            <Select
                                mode={'multiple'}
                                placeholder={'选择标签'}
                                onChange={this.onLabelSelectChange}>
                                {this.state.labelSelectOptions.map(this.labelSelectOptionMapFunc)}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type={'primary'}
                                onClick={this.onConfirmPublishButtonClick}
                                disabled={this.state.locked}>
                                确认发表
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <div className={'text-align-center'}>
                        <Spin className={'mt-lg'}/>
                    </div>
                )}
            </Drawer>
        );

        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}>
                <Row>
                    <Col
                        className={'w-100 h-100vh'}
                        xs={{ offset: 0, span: 24 }}
                        sm={{ offset: 0, span: 24 }}
                        md={{ offset: 0, span: 24 }}
                        lg={{ offset: 0, span: 0 }}
                        xl={{ offset: 0, span: 0 }}
                        xxl={{ offset: 0, span: 0 }}>
                        {doItOnPCGadget}
                    </Col>
                    <Col
                        className={'mt-md'}
                        xs={{ offset: 0, span: 0 }}
                        sm={{ offset: 0, span: 0 }}
                        md={{ offset: 0, span: 0 }}
                        lg={{ offset: 4, span: 16 }}
                        xl={{ offset: 5, span: 14 }}
                        xxl={{ offset: 6, span: 12 }}>
                        {welcomeRow}
                        {actionRow}
                        {this.state.editorToggled ? editorRow : previewRow}
                    </Col>
                </Row>
                {publishPostDrawer}
            </KLayout>
        );
    }

}
