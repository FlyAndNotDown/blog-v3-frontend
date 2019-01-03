/**
 * /component/nav-bar.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Dropdown, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 导航栏组件
 * @constructor
 * @property {boolean} active 是否激活
 */
export class NavBar extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 响应式下拉框
        const overlay = (
            <Menu>
                <Menu.Item>
                    <Link to={'/archive'} className={'font-size-xs'}>归档</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/label/all'} className={'font-size-xs'}>标签</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/work'} className={'font-size-xs'}>作品</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/message'} className={'font-size-xs'}>留言</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/friend'} className={'font-size-xs'}>友链</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/about'} className={'font-size-xs'}>关于</Link>
                </Menu.Item>
            </Menu>
        );

        // 主站链接 div
        const siteLinkDiv = (
            <div>
                <Link className={'font-size-md color-white float-left color-white-a'} to={'/'}>
                    Kindem
                </Link>
            </div>
        );

        // 导航 div
        const navDiv = (
            <div className={'lh-nav-bar float-right'}>
                <Link className={'color-white-a font-size-xs'} to={'/archive'}>归档</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/label/all'}>标签</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/work'}>作品</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/message'}>留言</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/friend'}>友链</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/about'}>关于</Link>
                &nbsp;&nbsp;
            </div>
        );

        // 移动端导航 div
        const mobileNavDiv = (
            <div className={'lh-nav-bar float-right'}>
                <Dropdown overlay={overlay}>
                    <Link to={'#'} className={'color-white-a font-size-xs'}>
                        Menu&nbsp;&nbsp;
                        <Icon type={'down'}/>
                    </Link>
                </Dropdown>
            </div>
        );

        return (
            <Row className={`h-nav-bar ${this.props.active ? 'bg-color-nav-bar' : 'bg-color-none'}`}>
                <Col
                    className={'lh-nav-bar'}
                    xs={{ offset: 1, span: 3 }}
                    sm={{ offset: 1, span: 3 }}
                    md={{ offset: 3, span: 3 }}
                    lg={{ offset: 3, span: 3 }}>
                    {siteLinkDiv}
                </Col>
                <Col
                    xs={{ offset: 0, span: 0 }}
                    sm={{ offset: 0, span: 0 }}
                    md={{ offset: 6, span: 9 }}
                    lg={{ offset: 10, span: 7 }}>
                    {navDiv}
                </Col>
                <Col
                    xs={{ offset: 6, span: 13 }}
                    sm={{ offset: 6, span: 13 }}
                    md={{ offset: 0, span: 0 }}
                    lg={{ offset: 0, span: 0 }}>
                    {mobileNavDiv}
                </Col>
            </Row>
        );
    }

}
