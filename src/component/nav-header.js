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
 * @constructor
 * @property {string} bgImg background image's source in nav header
 * @property {*} content the content of nav header
 */
export class NavHeader extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            navBarToggled: false
        };
    }

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 图片 div
        const imgDiv = (
            <div className={'mb-md'}>
                <img
                    src={this.props.bgImg}
                    className={'position-fixed left-0 w-100 h-100 object-fit-cover'}
                    alt={'nav-header-background'}/>
            </div>
        );

        // 导航栏
        const navBarAffix = (
            <Affix
                offsetTop={0}
                onChange={(affixed) => {
                    this.setState({
                        navBarToggled: affixed
                    });
                }}>
                <NavBar active={this.state.navBarToggled}/>
            </Affix>
        );

        // 标语行
        let sloganRow = (
            <Row className={'mt-slogan mb-slogan'}>
                <Col className={'text-align-center'}>
                    {this.props.content}
                </Col>
            </Row>
        );

        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                {imgDiv}
                {navBarAffix}
                {sloganRow}
            </KLayout>
        );
    }

}
