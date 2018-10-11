/**
 * /page/admin/post/new.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../../component/tool/k-layout';
import { Row, Col, Divider, Button, Input, Drawer, Form, Select } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { DoItOnPC } from '../../../component/gadget/do-it-on-pc';
import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';
import requestConfig from '../../../config/request';

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

        this.state = {
            editorToggled: true,

            title: '',
            description: '',
            body: '',
            labels: '',

            drawerVisible: false,

            labelSelectOptions: []
        };
    }

    /**
     * 组件加载生命周期函数
     */
    componentDidMount() {
        // TODO 校验管理员登录情况
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
     * 发表文章按钮点击回调
     * @param {Object} e 事件对象
     */
    onPublishPostButtonClick = (e) => {
        this.setState({
            drawerVisible: true
        });
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
     * 确认发表按钮点击的回调
     * @param {Object} e 事件对象
     */
    onConfirmPublishButtonClick = (e) => {
        // 参数校验
        // TODO
        // 处理 labels 为数组
        let labels = [];
        this.state.labels.split(',').forEach(label => labels.push(label));
        // 发送请求新建文章
        axios
            .post(`${requestConfig.post}`, {
                title: this.state.title,
                body: this.state.body,
                description: this.state.description,
                labels: labels
            })
            .then(response => {
                // TODO
            })
            .catch(error => {
                // TODO
            });
    };

    /**
     * 标签选择器候选项的映射函数
     * @param {{key: string, value: string}} option
     * @param {number} key 索引号
     * @returns {*} JSX
     */
    labelSelectOptionMapFunc = (option, key) => {
        return (
            <Select.Option value={option.value} key={key}>{option.key}</Select.Option>
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
                <Form>
                    <Form.Item label={'标题'}>
                        <Input placeholder={'取个什么名字好呢'}/>
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
                        <Button type={'primary'} onClick={this.onConfirmPublishButtonClick}>确认发表</Button>
                    </Form.Item>
                </Form>
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
