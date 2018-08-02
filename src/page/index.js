import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Row, Col, Divider } from 'antd';
import { Header } from "../component/block/header";
import headerBg from '../img/header-bg-1.jpeg';
import QueueAnimation from 'rc-queue-anim';
import { HostInfo } from "../component/block/host-info";
import {ItemList} from "../component/block/item-list";
import {Footer} from "../component/block/footer";

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
                <QueueAnimation delay={500}>
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
                        <Row className={'mt-40px'}>
                            <Col
                                xs={{ span: 0, offset: 0 }}
                                sm={{ span: 0, offset: 0 }}
                                md={{ span: 0, offset: 0 }}
                                lg={{ span: 7, offset: 0 }}
                                xl={{ span: 7, offset: 0 }}>
                                <HostInfo className={'float-right mr-20px'}/>
                            </Col>
                            <Col
                                xs={{ span: 24, offset: 0 }}
                                sm={{ span: 24, offset: 0 }}
                                md={{ span: 24, offset: 0 }}
                                lg={{ span: 13, offset: 0 }}
                                xl={{ span: 13, offset: 0 }}>
                                <ItemList className={'ml-20px mr-20px'}/>
                            </Col>
                            <Col
                                xs={{ span: 24, offset: 0 }}
                                sm={{ span: 24, offset: 0 }}
                                md={{ span: 24, offset: 0 }}
                                lg={{ span: 0, offset: 0 }}
                                xl={{ span: 0, offset: 0 }}>
                                <Divider/>
                                <HostInfo className={'m-0-auto mt-20px'}/>
                            </Col>
                        </Row>
                    </BgColorNoneLayout>
                    <Footer key={'footer'}/>
                </QueueAnimation>
            </BgColorNoneLayout>
        );

    }

}