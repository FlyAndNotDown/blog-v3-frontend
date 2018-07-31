import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Row, Col, Avatar } from 'antd';
import { Header } from "../component/block/header";
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
                        rightLink={{
                            to: '#',
                            name: '关于'
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
                            <Col>
                            </Col>
                        </Row>
                    </BgColorNoneLayout>
                </QueueAnimation>
            </BgColorNoneLayout>
        );

    }

}