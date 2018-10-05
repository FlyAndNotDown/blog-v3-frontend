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

/**
 * 管理员新建文章界面
 */
export class AdminNewPostPage extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            editorToggled: true,
            markdown: '',
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
     * @param  {object} e 事件
     */
    onEditorButtonClick = (e) => {
        this.setState({
            editorToggled: true
        });
    };

    /**
     * 预览按钮被点击的回调
     * @param  {[type]} e 事件
     */
    onPreviewButtonClick = (e) => {
        this.setState({
            editorToggled: false
        });
    };

    /**
     * Markdown改变的回调
     * @param  {object} e 事件
     */
    onMarkdownChange = (e) => {
        this.setState({
            markdown: e.target.value
        });
    };

    /**
     * 发表文章按钮点击回调
     * @param  {object} e 事件
     */
    onPublishPostButtonClick = (e) => {
        this.setState({
            drawerVisible: true
        });
    };

    /**
     * 发表文章抽屉关闭回调
     * @param  {object} e 事件
     */
    onPublishPostDrawerClose = (e) => {
        this.setState({
            drawerVisible: false
        });
    };

    /**
     * 标签选择器变化回调
     * @param  {object} e 属性
     */
    onLabelSelectChange = (e) => {
        // TODO
    };

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return (
            <KLayout>
                <Row>
                    <Col
                        className={'w-100 h-100vh'}
                        xs={{ offset: 0, span: 24 }}
                        sm={{ offset: 0, span: 24 }}
                        md={{ offset: 0, span: 24 }}
                        lg={{ offset: 0, span: 0 }}
                        xl={{ offset: 0, span: 0 }}
                        xxl={{ offset: 0, span: 0 }}>
                        <Row
                            className={'w-100 h-100'}
                            type={'flex'}
                            align={'middle'}
                            justify={'center'}>
                            <Col>
                                <DoItOnPC/>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        className={'mt-md'}
                        xs={{ offset: 0, span: 0 }}
                        sm={{ offset: 0, span: 0 }}
                        md={{ offset: 0, span: 0 }}
                        lg={{ offset: 4, span: 16 }}
                        xl={{ offset: 5, span: 14 }}
                        xxl={{ offset: 6, span: 12 }}>
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

                        {this.state.editorToggled ? (
                            <div>
                                <Input.TextArea
                                    autosize={{
                                        minRows: 20,
                                        maxRows: 20
                                    }}
                                    value={this.state.markdown}
                                    onChange={this.onMarkdownChange}/>
                            </div>
                        ) : (
                            <div className={'markdown-preview'}>
                                <ReactMarkdown
                                    className={'markdown-body'}
                                    source={this.state.markdown}
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
                        )}
                    </Col>
                </Row>
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
                        <Form.Item label={'标签'}>
                            <Select
                                mode={'multiple'}
                                placeholder={'选择标签'}
                                onChange={this.onLabelSelectChange}>
                                {this.state.labelSelectOptions.map((option, key) => {
                                    // TODO
                                    return null;
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type={'primary'}>确认发表</Button>
                        </Form.Item>
                    </Form>
                </Drawer>
            </KLayout>
        );
    }

}
