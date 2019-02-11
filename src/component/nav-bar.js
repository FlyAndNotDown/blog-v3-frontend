/**
 * /component/nav-bar.js
 * @author John Kindem
 * @description source file for NavBar object
 * @version v1.0
 */

import React from 'react';
import { Row, Col, Dropdown, Menu, Icon, Avatar, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { Log } from '../tool/log';
import requestConfig from '../config/request';
import axios from 'axios';

/**
 * 导航栏组件
 * @constructor
 * @param {boolean} active 是否激活
 * @param {boolean} login if user login
 * @param {Object} user user info object
 * @param {Object} history react history object
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
     * a life function of React component
     */
    componentDidMount() {
        // TODO
    }

    /**
     * handle when login button click
     */
    onLoginButtonClick = () => {
        this.props.history.push('/user/login');
    };

    /**
     * handle when logout button clicked
     */
    onLogoutButtonClick = async () => {
        // send a request to logout
        let response, data;
        try {
            response = await axios.delete(requestConfig.userLogin);
        } catch (e) {
            Log.devError(`delete ${requestConfig.userLogin}`, e);
            return message.error('注销失败');
        }

        // if success
        Log.dev(`delete ${requestConfig.userLogin} OK`);
        response = response || {};
        data = response.data || {};

        // get info in data object
        let success = !!data.success;

        if (success) {
            return window.location.reload();
        } else {
            return message.error('注销失败');
        }
    };

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // overlay when device tpye is phone or tablet
        const overlay = (
            <Menu>
                {this.props.login && (
                    <Menu.Item disabled>
                        欢迎您 {this.props.user.nickname}
                    </Menu.Item>
                )}
                {this.props.login && (
                    <Menu.Item>
                        <Link to={'#'} className={'font-size-xs'}>注销</Link>
                    </Menu.Item>
                )}
                {!this.props.login && (
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

        // links div
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
                <Menu.Item key={'welcome'} disabled={true}>欢迎您 {this.props.user.nickname}</Menu.Item>
                <Menu.Item
                    key={'logout'}
                    onClick={this.onLogoutButtonClick}>
                    注销
                </Menu.Item>
            </Menu>
        );
        const userStatus = (
            <Dropdown
                placement={'bottomCenter'}
                overlay={userStatusMenu}>
                {this.props.user.type === 'local' ? (
                    <Avatar>{this.props.user.nickname[0]}</Avatar>
                ) : (
                    <Avatar src={this.props.user.avatar}/>
                )}
            </Dropdown>
        );

        // login button
        const loginButton = (
            <Button type={'primary'} onClick={this.onLoginButtonClick}>加入</Button>
        );

        // nav div
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
                {this.props.login ?
                    (userStatus) : (loginButton)
                }
            </div>
        );

        // mobile device nav div
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

        // render
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
