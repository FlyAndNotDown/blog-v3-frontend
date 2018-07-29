import React from 'react';
import { BgColorNoneLayout } from "../layout/bg-color-none-layout";
import { Row, Col, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import avatarImg from '../../img/avatar.jpg';
import QueueAnimation from 'rc-queue-anim';

/**
 * 页头组件
 * @props bg - 背景图
 */
export class Header extends React.Component {

    static defaultProps = {
        height: '350px'
    };

    /**
     * 属性
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {};

    }

    /**
     * 渲染
     * @returns {null}
     */
    render() {

        return (
            <BgColorNoneLayout
                style={{
                    backgroundImage: `url(${this.props.bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: this.props.height
                }}
                className={'shadow-little'}>
                <Row className={'mt-20px'}>
                    <QueueAnimation delay={300}>
                        <span
                            key={'nav-l'}
                            className={'float-left'}>
                            <Link
                                to={'#'}
                                className={'ml-20px color-white font-weight-bold font-size-15px'}>
                                Kindem's Blog
                            </Link>
                        </span>
                        <span
                            key={'nav-r'}
                            className={'float-right'}>
                            <Link
                                to={'#'}
                                className={'mr-20px color-white font-weight-bold font-size-15px'}>
                                关于
                            </Link>
                        </span>
                    </QueueAnimation>
                </Row>
                <Row className={'mt-50px'}>
                    <Col>
                        <QueueAnimation delay={500}>
                            <div
                                key={'line2'}
                                className={'text-align-center color-white font-size-45px mb-0'}>
                                離開世界前，壹切都是過程
                            </div>
                            <div
                                key={'line3'}
                                className={'text-align-center color-f6 font-size-25px'}>
                                壹只奮鬥中的前端狗
                            </div>
                        </QueueAnimation>
                    </Col>
                </Row>
            </BgColorNoneLayout>
        );

    }

}