/**
 * /component/nav-bar.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Dropdown, Menu, Icon, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 导航栏组件
 * @constructor
 * @property {boolean} active 是否激活
 * @property {{ login: boolean }} user user info
 * @property {Object} history react history object
 */
export class NavBar extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        // 是否登录
        this.state = {
            user: {
                login: false
            }
        };
    }

    /**
     * a life function of React component
     */
    componentDidMount() {
        // TODO login status
        // TODO if get a user props, don't get user info by itself, if not, get user info by itself
    }

    /**
     * handle when login button click
     */
    onLoginButtonClick = () => {
        this.props.history.push('/user/login');
    };

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 响应式下拉框
        const overlay = (
            <Menu>
                {this.state.user.login && (
                    <Menu.Item disabled>
                        欢迎，xxxx
                    </Menu.Item>
                )}
                {this.state.user.login && (
                    <Menu.Item>
                        <Link to={'#'} className={'font-size-xs'}>注销</Link>
                    </Menu.Item>
                )}
                {!this.state.user.login && (
                    <Menu.Item>
                        <Link to={'#'} className={'font-size-xs'}>登录</Link>
                    </Menu.Item>
                )}
                <Menu.Item>
                    <Link to={'/archive'} className={'font-size-xs'}>归档</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/label/all'} className={'font-size-xs'}>标签</Link>
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

        // user status dropdown
        const userStatusMenu = (
            <Menu className={'mt-md'}>
                <Menu.Item key={'logout'} disabled={true}>欢迎您，xxx</Menu.Item>
                <Menu.Item key={'logout'}>注销</Menu.Item>
            </Menu>
        );
        const userStatus = (
            <Dropdown
                placement={'bottomCenter'}
                overlay={userStatusMenu}>
                <Avatar icon={'user'}/>
            </Dropdown>
        );

        // login button
        const loginButton = (
            <Button type={'primary'} onClick={this.onLoginButtonClick}>登录</Button>
        );

        // 导航 div
        const navDiv = (
            <div className={'lh-nav-bar float-right'}>
                <Link className={'color-white-a font-size-xs'} to={'/archive'}>归档</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/label/all'}>标签</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/message'}>留言</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/friend'}>友链</Link>
                &nbsp;&nbsp;
                <Link className={'color-white-a font-size-xs'} to={'/about'}>关于</Link>
                &nbsp;&nbsp;
                {this.state.user.login ?
                    (userStatus) : (loginButton)
                }
            </div>
        );

        // 移动端导航 div
        const mobileNavDiv = (
            <div className={'lh-nav-bar float-right'}>
                <Dropdown
                    overlay={overlay}>
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
                    md={{ offset: 1, span: 5 }}
                    lg={{ offset: 1, span: 5 }}>
                    {siteLinkDiv}
                </Col>
                <Col
                    xs={{ offset: 0, span: 0 }}
                    sm={{ offset: 0, span: 0 }}
                    md={{ offset: 7, span: 10 }}
                    lg={{ offset: 9, span: 8 }}>
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
