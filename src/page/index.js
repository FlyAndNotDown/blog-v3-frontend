import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Row, Col } from 'antd';
import { Header } from "../component/nav/header";
import headerBg from '../img/header-bg.jpg';
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
            <Row>
                <Col>
                    <br/><br/><br/>
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
                    <Header
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
                                        }}
                                        className={'bg-color-yellow'}>
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
                                        }}
                                        className={'bg-color-red'}>
                                        {main}
                                    </Col>
                                </Row>
                            </Col>
                            <Col
                                ley={'col-3'}
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
                                    span: 0,
                                    offset: 0
                                }}
                                className={'bg-color-yellow'}>
                                {side}
                            </Col>
                        </Row>
                    </BgColorNoneLayout>
                </QueueAnimation>
            </BgColorNoneLayout>
        );

    }

}