/**
 * /component/nav-header.js
 * @author John Kindem
 */

import React from 'react';
import { Affix, Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";
import { NavBar } from './nav-bar';

/**
 * 导航页头
 * @property {string} bgImg 背景图片
 */
export class NavHeader extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            navBarToggled: false
        };
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                <div className={'mb-md'}>
                    <img
                        src={this.props.bgImg}
                        className={'position-fixed left-0 w-100 h-100 object-fit-cover'}
                        alt={'nav-header-background'}/>
                </div>
                <Affix
                    offsetTop={0}
                    onChange={(affixed) => {
                        this.setState({
                            navBarToggled: affixed
                        });
                    }}>
                    <NavBar active={this.state.navBarToggled}/>
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
