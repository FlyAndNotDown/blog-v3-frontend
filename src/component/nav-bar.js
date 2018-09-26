/**
 * /component/nav-bar.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Dropdown, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 导航栏组件
 * @props {bool} active 是否激活
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
     * @return {JSX} 渲染结果
     */
    render() {
        const overlay = (
            <Menu>
                <Menu.Item>
                    <Link to={'#'} className={'font-size-xs'}>归档</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'#'} className={'font-size-xs'}>说说</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'#'} className={'font-size-xs'}>计划</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'#'} className={'font-size-xs'}>作品</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'#'} className={'font-size-xs'}>留言</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'#'} className={'font-size-xs'}>友链</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'#'} className={'font-size-xs'}>关于</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <Row className={`h-nav-bar ${this.props.active ? 'bg-color-nav-bar' : 'bg-color-none'}`}>
                <Col
                    className={'lh-nav-bar'}
                    xs={{ offset: 1, span: 3 }}
                    sm={{ offset: 1, span: 3 }}
                    md={{ offset: 3, span: 3 }}
                    lg={{ offset: 3, span: 3 }}>
                    <Link className={'font-size-md color-white float-left color-white-a'} to={'#'}>
                        Kindem
                    </Link>
                </Col>
                <Col
                    xs={{ offset: 0, span: 0 }}
                    sm={{ offset: 0, span: 0 }}
                    md={{ offset: 6, span: 9 }}
                    lg={{ offset: 9, span: 6 }}>
                    <div className={'lh-nav-bar float-right'}>
                        <Link className={'color-white-a font-size-xs'} to={'#'}>归档</Link>
                        &nbsp;&nbsp;
                        <Link className={'color-white-a font-size-xs'} to={'#'}>说说</Link>
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
                <Col
                    xs={{ offset: 6, span: 13 }}
                    sm={{ offset: 6, span: 13 }}
                    md={{ offset: 0, span: 0 }}
                    lg={{ offset: 0, span: 0 }}>
                    <div className={'lh-nav-bar float-right'}>
                        <Dropdown overlay={overlay}>
                            <Link to={'#'} className={'color-white-a font-size-xs'}>
                                Menu&nbsp;&nbsp;
                                <Icon type={'down'}/>
                            </Link>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        );
    }

}
