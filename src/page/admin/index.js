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
import mainConfig from '../../config/main';
import { PasswordTool } from '../../tool/password';

/**
 * 管理员首页 - /admin
 */
export class AdminIndexPage extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    /**
     * 用户名变化回调
     * @param  {object} e 事件
     */
    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    /**
     * 密码变化回调
     * @param  {object} e 事件
     */
    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    /**
     * 登录按钮点击回调
     * @param  {object} e 事件
     */
    onLoginButtonClick = (e) => {
        // 发起请求获取盐
        axios
            .get(requestConfig.admin, {
                params: {
                    username: this.state.username
                }
            })
            .then((response) => {
                if (mainConfig.devMode) Log.log(`get ${requestConfig.admin} OK`);
                if (response.data) {
                    if (!(response.date.success || null)) {
                        // 如果获取盐失败了
                        message.error(response.date.reason);
                    }
                    let salt = response.date.salt || '';
                    // 如果获取盐成功了，发送请求进行登录验证
                    axios
                        .post(requestConfig.admin, {
                            username: this.state.username,
                            password: PasswordTool.encode(this.state.password, salt)
                        })
                        .then((response) => {
                            if (mainConfig.devMode) Log.log(`post ${requestConfig.admin} OK`);
                            if (response.date) {
                                if (response.date.success) {
                                    // 如果登录验证成功
                                    message.success('登录成功，即将为您跳转');
                                    // TODO 跳转
                                }
                            }
                        })
                        .catch((error) => {
                            if (error) {
                                if (mainConfig.devMode)
                                    Log.error(`post ${requestConfig.admin}`, error);
                            }
                        });
                }
            })
            .catch((error) => {
                if (error) {
                    if (mainConfig.devMode)
                        Log.error(`get ${requestConfig.admin}`, error);
                    message.error('服务器错误');
                }
            });
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
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
                        <div className={'font-size-xl text-align-center'}>
                            <span role={'img'} aria-labelledby={'red-heart'}>🤣</span>
                            别攻击我
                        </div>
                        <Form className={'mt-lg'}>
                            <Form.Item>
                                <Input
                                    placeholder={'管理员账户'}
                                    prefix={<Icon type={'user'}/>}
                                    value={this.state.username}
                                    onChange={this.onUsernameChange}/>
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    type={'password'}
                                    placeholder={'密码'}
                                    prefix={<Icon type={'user'}/>}
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}/>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    className={'float-left w-100'}
                                    type={'primary'}
                                    onClick={this.onLoginButtonClick}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
