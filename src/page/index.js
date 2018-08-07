import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Row, Col, Divider, Spin } from 'antd';
import { Header } from "../component/block/header";
import headerBg from '../img/header-bg-1.jpeg';
import QueueAnimation from 'rc-queue-anim';
import { HostInfo } from "../component/block/host-info";
import { ItemList } from "../component/block/item-list";
import { Footer } from "../component/block/footer";
import axios from 'axios';

/**
 * 页面组件 - /
 */
export class IndexPage extends React.Component {

    /**
     * 构造函数
     */
    constructor(props) {

        super(props);

        this.state = {
            loadDown: false,
            data: {}
        };

    }

    componentDidMount() {

        axios
            .get('/service/page/index/init')
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        loadDown: true,
                        data: response.data.data
                    });
                    console.log(this.state);
                }
            });

    }

    /**
     * 渲染
     * @returns {*}
     */
    render() {

        if (this.state.loadDown) {
            return (
                <BgColorNoneLayout>
                    <QueueAnimation delay={500}>
                        <Header
                            key={'header'}
                            bg={headerBg}
                            leftLink={{
                                to: '#',
                                name: this.state.data.header.siteName
                            }}
                            main={{
                                mt: '80px',
                                lines: [(
                                    <div className={'text-align-center color-white font-size-50px font-weight-bold'}>
                                        {this.state.data.header.sloganMain}
                                    </div>
                                ), (
                                    <div className={'text-align-center color-white font-size-35px'}>
                                        {this.state.data.header.sloganSecond}
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
                                    <HostInfo
                                        className={'float-right mr-20px'}
                                        hostName={this.state.data.hostInfo.hostName}
                                        description={this.state.data.hostInfo.description}/>
                                </Col>
                                <Col
                                    xs={{ span: 24, offset: 0 }}
                                    sm={{ span: 24, offset: 0 }}
                                    md={{ span: 24, offset: 0 }}
                                    lg={{ span: 13, offset: 0 }}
                                    xl={{ span: 13, offset: 0 }}>
                                    <ItemList
                                        className={'ml-20px mr-20px'}
                                        items={this.state.data.itemList}/>
                                </Col>
                                <Col
                                    xs={{ span: 24, offset: 0 }}
                                    sm={{ span: 24, offset: 0 }}
                                    md={{ span: 24, offset: 0 }}
                                    lg={{ span: 0, offset: 0 }}
                                    xl={{ span: 0, offset: 0 }}>
                                    <Divider/>
                                    <HostInfo
                                        className={'m-0-auto mt-20px'}
                                        hostName={this.state.data.hostInfo.hostName}
                                        description={this.state.data.hostInfo.description}/>
                                </Col>
                            </Row>
                        </BgColorNoneLayout>
                        <Footer key={'footer'}/>
                    </QueueAnimation>
                </BgColorNoneLayout>
            );
        } else {
            return (
                <BgColorNoneLayout>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Spin/>
                </BgColorNoneLayout>
            );
        }

    }

}