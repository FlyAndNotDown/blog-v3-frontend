import React from 'react';
import { KLayout } from "./k-layout";
import { Affix, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import QueueAnimation from 'rc-queue-anim';

/**
 * Nav 导航栏组件
 */
export class Nav extends React.Component {

    constructor(props) {

        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {
            show: false
        };

    }

    render() {

        return (
            <Affix
                offsetTop={0}
                onChange={(affixed) => {
                    this.setState({
                        show: affixed
                    });
                }}>
                <KLayout>
                    <Row className={'h-64px lh-64px'}>
                        <Col>
                            {this.state.show ? (
                                <QueueAnimation>
                                    <div key={1} className={'text-align-center bg-color-white box-shadow-little'}>
                                        <Link to={'#'} className={'color-grey font-size-sm'}>首页</Link>
                                        <Link to={'#'} className={'color-grey font-size-sm ml-xl mr-xl'}>归档</Link>
                                        <Link to={'#'} className={'color-grey font-size-sm'}>关于</Link>
                                    </div>
                                </QueueAnimation>
                            ) : null}
                        </Col>
                    </Row>
                </KLayout>
            </Affix>
        );

    }

}