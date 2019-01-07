/**
 * /page/admin/index.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input, Icon, Button, message } from 'antd';
import axios from 'axios';
import requestConfig from '../../config/request';
import { Log } from '../../tool/log';
import { PasswordTool } from '../../tool/password';
import regexConfig from '../../config/regex';

const adminRegex = regexConfig.admin;

/**
 * 管理员首页组件
 * @constructor
 */
export class AdminIndexPage extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',

            locked: false
        };
    }

    /**
     * 用户名变化回调
     * @param {Object} e 事件对象
     */
    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    /**
     * 密码变化回调
     * @param {Object} e 事件对象
     */
    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    /**
     * 上锁
     */
    lock = () => {
        this.setState({ locked: true });
    };

    /**
     * 解锁
     */
    unLock = () => {
        this.setState({ locked: false });
    };

    /**
     * 登录按钮点击回调
     */
    onLoginButtonClick = async () => {
        // 校验 username
        if (!this.state.username.match(adminRegex.username)) {
            return message.error('用户名不满足条件');
        }

        // 先把输入框和登录按钮锁定
        this.lock()

        let response;
        let data;

        // 发送请求获取盐
        try {
            response = await axios.get(requestConfig.adminLogin, {
                params: {
                    type: 'salt',
                    username: this.state.username
                }
            });
        } catch(error) {
            Log.devError(`get ${requestConfig.adminLogin}`, error);
            message.error('网络或服务器错误');
            return this.unLock();
        }

        // 如果请求成功
        Log.dev(`get ${requestConfig.adminLogin} OK`);
        response = response || {};
        data = response.data || {};

        let salt = data.salt || null;
        // 如果没有获取到盐
        if (!salt) {
            this.unLock();
            return message.error('管理员账户不存在');
        }

        // 校验密码
        if (!this.state.password.match(adminRegex.password)) {
            this.unLock();
            return message.error('密码不满足条件');
        }

        // 发送请求进行登录校验
        try {
            response = await axios.post(requestConfig.adminLogin, {
                username: this.state.username,
                password: PasswordTool.encode(this.state.password, salt)
            });
        } catch(error) {
            Log.devError(`get ${requestConfig.adminLogin}`, error);
            message.error('网络或服务器错误');
            return this.unLock();
        }

        // 如果请求成功
        Log.dev(`post ${requestConfig.adminLogin} OK`);
        response = response || {};
        data = response.data || {};

        let success = !!data.success;
        // 如果不成功
        if (!success) {
            this.unLock();
            return message.error('用户名或密码错误');
        }
        // 如果成功了
        message.success('登录成功，即将为你跳转');
        return setTimeout(() => {
            this.props.history.push('/admin/general');
        }, 1000);
    };

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 标题行
        const titleDiv = (
            <div className={'font-size-xl text-align-center'}>
                <span role={'img'} aria-labelledby={'cry-laugh'}>🤣</span>
                饶我一条狗命
            </div>
        );

        // 登录表单
        const loginForm = (
            <Form className={'mt-lg'}>
                <Form.Item>
                    <Input
                        placeholder={'管理员账户'}
                        prefix={<Icon type={'user'}/>}
                        value={this.state.username}
                        onChange={this.onUsernameChange}
                        disabled={this.state.lock}/>
                </Form.Item>
                <Form.Item>
                    <Input
                        type={'password'}
                        placeholder={'密码'}
                        prefix={<Icon type={'lock'}/>}
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        disabled={this.state.lock}/>
                </Form.Item>
                <Form.Item>
                    <Button
                        className={'float-left w-100'}
                        type={'primary'}
                        onClick={this.onLoginButtonClick}
                        disabled={this.state.lock}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );

        return (
            <KLayout
                className={'w-100 h-100vh'}
                colorMode={KLayout.COLOR_MODE_MAIN}>
                <Row
                    className={'w-100 h-100'}
                    type={'flex'}
                    align={'middle'}
                    justify={'center'}>
                    <Col
                        xs={20} sm={18} md={8}
                        lg={6} xl={6} xxl={4}>
                        {titleDiv}
                        {loginForm}
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
