import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Row, Col, Avatar } from 'antd';
import { IndexHeader } from "../component/nav/index-header";
import headerBg from '../img/header-bg.jpg';
import avatar from '../img/avatar.jpg';
import QueueAnimation from 'rc-queue-anim';

/**
 * 页面组件 - /
 */
export class IndexPage extends React.Component {

    /**
     * 构造函数
     */
    constructor(props) {

        super(props);

        this.state = {};

    }

    /**
     * 渲染
     * @returns {*}
     */
    render() {

        // 侧栏
        let side = (
            <Row
                className={'mt-20px ml-10px mr-10px'}>
                <Col>
                    <div className={'text-align-center'}>
                        <Avatar
                            src={avatar}
                            shape={'square'}
                            className={'w-70 h-auto shadow-little'}/>
                    </div>
                    <div className={'mt-10px color-second font-size-30px text-align-center font-weight-bold'}>
                        Kindem
                    </div>
                </Col>
            </Row>
        );
        // 主内容
        let main = (
            <Row>
                <Col>
                    <br/><br/><br/>
                </Col>
            </Row>
        );

        return (
            <BgColorNoneLayout>
                <QueueAnimation delay={300}>
                    <IndexHeader
                        key={'header'}
                        bg={headerBg}/>
                    <BgColorNoneLayout
                        key={'context'}>
                        <Row>
                            <Col
                                key={'col-1'}
                                xs={{
                                    span: 0,
                                    offset: 0
                                }}
                                sm={{
                                    span: 0,
                                    offset: 0
                                }}
                                md={{
                                    span: 0,
                                    offset: 0
                                }}
                                lg={{
                                    span: 8,
                                    offset: 0
                                }}>
                                <Row>
                                    <Col
                                        xs={{
                                            span: 0,
                                            offset: 0
                                        }}
                                        sm={{
                                            span: 0,
                                            offset: 0
                                        }}
                                        md={{
                                            span: 0,
                                            offset: 0
                                        }}
                                        lg={{
                                            span: 16,
                                            offset: 8
                                        }}>
                                        {side}
                                    </Col>
                                </Row>
                            </Col>
                            <Col
                                ley={'col-2'}
                                xs={{
                                    span: 24,
                                    offset: 0
                                }}
                                sm={{
                                    span: 24,
                                    offset: 0
                                }}
                                md={{
                                    span: 22,
                                    offset: 1
                                }}
                                lg={{
                                    span: 16,
                                    offset: 0
                                }}>
                                <Row>
                                    <Col
                                        xs={{
                                            span: 24,
                                            offset: 0
                                        }}
                                        sm={{
                                            span: 24,
                                            offset: 0
                                        }}
                                        md={{
                                            span: 24,
                                            offset: 0
                                        }}
                                        lg={{
                                            span: 20,
                                            offset: 0
                                        }}>
                                        {main}
                                    </Col>
                                </Row>
                            </Col>
                            <Col
                                ley={'col-3'}
                                xs={{
                                    span: 12,
                                    offset: 6
                                }}
                                sm={{
                                    span: 8,
                                    offset: 8
                                }}
                                md={{
                                    span: 6,
                                    offset: 9
                                }}
                                lg={{
                                    span: 0,
                                    offset: 0
                                }}>
                                {side}
                            </Col>
                        </Row>
                    </BgColorNoneLayout>
                </QueueAnimation>
            </BgColorNoneLayout>
        );

    }

}