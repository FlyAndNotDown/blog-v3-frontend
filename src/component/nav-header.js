import React from 'react';
import { Affix, Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";
import navHeaderBgImg from '../img/header-bg-2.png';
import { Link } from 'react-router-dom';

export class NavHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navBarToggled: false
        };
    }

    render() {
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                <div className={'mb-md'}>
                    <img
                        src={navHeaderBgImg}
                        className={'position-fixed left-0 w-100 h-100 object-fit-cover'}
                        alt={'nav-header-background-image'}/>
                </div>
                <Affix
                    offsetTop={0}
                    onChange={(affixed) => {
                        this.setState({
                            navBarToggled: affixed
                        });
                    }}>
                    <Row className={`h-nav-bar ${this.state.navBarToggled ? 'bg-color-nav-bar' : 'bg-color-none'}`}>
                        <Col
                            className={'lh-nav-bar'}
                            xs={{ offset: 0, span: 0 }}
                            sm={{ offset: 0, span: 0 }}
                            md={{ offset: 0, span: 0 }}
                            lg={{ offset: 3, span: 3 }}>
                            <div className={'font-size-md color-white float-left'}>
                                Kindem
                            </div>
                        </Col>
                        <Col
                            xs={{ offset: 0, span: 0 }}
                            sm={{ offset: 0, span: 0 }}
                            md={{ offset: 0, span: 0 }}
                            lg={{ offset: 11, span: 4 }}>
                            <div className={'lh-nav-bar float-right'}>
                                <Link className={'color-white-a font-size-xs'} to={'#'}>归档</Link>
                                &nbsp;&nbsp;
                                <Link className={'color-white-a font-size-xs'} to={'#'}>计划</Link>
                                &nbsp;&nbsp;
                                <Link className={'color-white-a font-size-xs'} to={'#'}>作品</Link>
                                &nbsp;&nbsp;
                                <Link className={'color-white-a font-size-xs'} to={'#'}>留言</Link>
                                &nbsp;&nbsp;
                                <Link className={'color-white-a font-size-xs'} to={'#'}>友链</Link>
                                &nbsp;&nbsp;
                                <Link className={'color-white-a font-size-xs'} to={'#'}>关于</Link>
                                &nbsp;&nbsp;
                            </div>
                        </Col>
                    </Row>
                </Affix>
                <Row className={'mt-slogan mb-slogan'}>
                    <Col className={'text-align-center'}>
                        <div className={'font-size-xl color-white'}>离开世界前，一切都是过程</div>
                        <div className={'font-size-md color-white'}>Before your death, everything in process</div>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}