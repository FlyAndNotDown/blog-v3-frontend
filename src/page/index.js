import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Row, Col } from 'antd';
import { Header } from "../component/block/header";
import headerBg from '../img/header-bg.jpg';
import QueueAnimation from 'rc-queue-anim';
import { HostInfo } from "../component/block/host-info";

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

        return (
            <BgColorNoneLayout>
                <QueueAnimation delay={300}>
                    <Header
                        key={'header'}
                        bg={headerBg}
                        leftLink={{
                            to: '#',
                            name: 'Kindem的博客'
                        }}
                        main={{
                            mt: '80px',
                            lines: [(
                                <div className={'text-align-center color-white font-size-50px font-weight-bold'}>
                                    离开世界前，一切都是过程
                                </div>
                            ), (
                                <div className={'text-align-center color-white font-size-35px'}>
                                    岁月寻常，负码前端行
                                </div>
                            )]
                        }}/>
                    <BgColorNoneLayout
                        key={'context'}>
                        <Row>
                            <Col
                                xs={{ span: 0, offset: 0 }}
                                sm={{ span: 0, offset: 0 }}
                                md={{ span: 0, offset: 0 }}
                                lg={{ span: 0, offset: 0 }}
                                xl={{ span: 6, offset: 0 }}>
                                <HostInfo className={'float-right mr-20px'}/>
                            </Col>
                            <Col
                                xs={{ span: 0, offset: 0 }}
                                sm={{ span: 0, offset: 0 }}
                                md={{ span: 0, offset: 0 }}
                                lg={{ span: 0, offset: 0 }}
                                xl={{ span: 16, offset: 0 }}
                                className={'bg-color-red'}>

                            </Col>
                        </Row>
                    </BgColorNoneLayout>
                </QueueAnimation>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </BgColorNoneLayout>
        );

    }

}