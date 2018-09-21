import React from 'react';
import { Affix, Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";
import navHeaderBgImg from '../img/header-bg-2.png';

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
                            xs={{ offset: 0, span: 0 }}
                            sm={{ offset: 0, span: 0 }}
                            md={{ offset: 0, span: 0 }}
                            lg={{ offset: 4, span: 4 }}>
                            <span className={'lh-nav-bar font-size-lg color-white'}>Kindem</span>
                        </Col>
                    </Row>
                </Affix>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </KLayout>
        );
    }

}