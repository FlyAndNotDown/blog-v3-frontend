/**
 * /page/admin/post/new.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../../component/tool/k-layout';
import { Row, Col, Icon, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';

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
            editorToggled: true
        };
    }

    /**
     * 组件加载生命周期函数
     */
    componentDidMount() {
        // TODO 校验管理员登录情况
    }

    /**
     * Markdown编辑器按钮被点击的回调
     * @param  {object} e 事件
     */
    onEditorButtonClick = (e) => {
        this.setState({
            editorToggled: true
        });
    }

    /**
     * 预览按钮被点击的回调
     * @param  {[type]} e 事件
     */
    onPreviewButtonClick = (e) => {
        this.setState({
            editorToggled: false
        });
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return (
            <KLayout>
                <Row>
                    <Col
                        className={'w-100 h100-vh'}
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
                                <div className={'text-align-center font-size-xxl'}>
                                    <Icon type={'chrome'} spin/>
                                </div>
                                <div className={'color-second font-size-md text-align-center'}>
                                    请在PC端登录
                                </div>
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
                                <Button.Group>
                                    <Button
                                        type={this.state.editorToggled ? 'primary' : 'normal'}
                                        onClick={this.onEditorButtonClick}>
                                        Markdown编辑器
                                    </Button>
                                    <Button
                                        type={this.state.editorToggled ? 'normal' : 'primary'}
                                        onClick={this.onPreviewButtonClick}>
                                        预览
                                    </Button>
                                </Button.Group>
                            </div>
                            <Divider/>
                        </div>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
