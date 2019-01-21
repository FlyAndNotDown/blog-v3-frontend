/**
 * /page/user/login.js
 * @author John Kindem
 * @description source file for user login page
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input, Icon, Button, message, Spin, Upload } from 'antd';
import axios from 'axios';
import requestConfig from '../../config/request';
import { Log } from '../../tool/log';
import { PasswordTool } from '../../tool/password';
import regexConfig from '../../config/regex';
import { LoadingLayout } from '../../component/gadget/loading-layout';

const { Item } = Form;

export class UserLoginPage extends React.Component {

    // static text
    // login form text
    static __LOGIN_FORM__USERNAME_INPUT__PLACEHOLDER = '用户名';
    static __LOGIN_FORM__PASSWORD_INPUT__PLACEHOLDER = '密码';
    // button text
    static __LOGIN_FORM__LOGIN_BUTTON__TEXT = '登录';
    static __LOGIN_FORM__JMPTO_REGISTER_BUTTON__TEXT = '转到注册';
    static __LOGIN_FORM__REGISTER_BUTTON_TEXT = '注册';
    static __LOGIN_FORM__JMPTO_LOGIN_BUTTON__TEXT = '转到登录';
    // title text
    static __TITLE_LOGIN__TEXT = '欢迎 我的朋友 ';
    // emoji
    static __EMOJI_LOGIN = '🍉';

    /**
     * constructor of react component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {
            // block status - 'login' or 'register'
            blockIsLogin: true,

            // login form - username input value
            loginUsername: '',
            // login form - password input value
            loginPassword: '',

            // file list
            fileList: [],
            // preview image
            preivewImage: '',
            // preview image visible
            previewVisible: false,

            // button locked
            buttonLocked: false,

            // loading
            loading: true
        };
    }

    /**
     * a life function of react
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000);
    }

    /**
     * handle when login form's username value change
     * @param {Object} e react event object
     */
    onLoginUsernameChange = (e) => {
        this.setState({ loginUsername: e.target.value });
    };

    /**
     * handle when login form's password value change
     * @param {Object} e react event object
     */
    onLoginPasswordChange = (e) => {
        this.setState({ loginPassword: e.target.value });
    };

    /**
     * a handle called when login button clicked
     * @param {Object} e react event object
     */
    onLoginButtonClick = (e) => {
        this.setState({ buttonLocked: true });
        // TODO
    };

    /**
     * a handle called when register button clicked
     * @param {Object} e react event object
     */
    onRegisterButtonClick = (e) => {
        // TODO
    };

    /**
     * a handle called when jmp to login button clicked
     * @param {Object} e react event object
     */
    onJmptoLoginButtonClick = (e) => {
        this.setState({ blockIsLogin: true });
    };

    /**
     * a handle called when jmp to register button clicked
     * @param {Object} e react event object
     */
    onJmptoRegisterButtonClick = (e) => {
        this.setState({ blockIsLogin: false });
    };

    /**
     * render function of react component
     * @return {*} result of render
     */
    render() {
        // title row
        const titleDiv = (
            <div className={'font-size-xl text-align-center'}>
                <span role={'img'} aria-labelledby={'watermelon'}>
                    {UserLoginPage.__EMOJI_LOGIN}
                </span>
                <span>{UserLoginPage.__TITLE_LOGIN__TEXT}</span>
            </div>
        );

        // login form
        const loginForm = (
            <Form className={'mt-lg'}>
                <Item>
                    <Input
                        placeholder={UserLoginPage.__LOGIN_FORM__USERNAME_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'user'}/>}
                        value={this.state.loginUsername}
                        onChange={this.onLoginUsernameChange}
                        disabled={this.state.buttonLocked}/>
                </Item>
                <Item>
                    <Input
                        type={'password'}
                        placeholder={UserLoginPage.__LOGIN_FORM__PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'lock'}/>}
                        value={this.state.loginPassword}
                        onChange={this.onLoginPasswordChange}
                        disabled={this.state.buttonLocked}/>
                </Item>
                <Item>
                    <Button
                        type={'primary'}
                        className={'float-left w-45'}
                        onClick={this.onLoginButtonClick}
                        disabled={this.state.buttonLocked}>
                        {this.state.buttonLocked ? (
                            <Spin
                                indicator={
                                    <Icon type={'loading'} className={'font-size-xs'}/>
                                }/>
                        ) : (
                            UserLoginPage.__LOGIN_FORM__LOGIN_BUTTON__TEXT
                        )}
                    </Button>
                    <Button
                        className={'float-right w-45'}
                        onClick={this.onJmptoRegisterButtonClick}
                        disabled={this.state.buttonLocked}>
                        {UserLoginPage.__LOGIN_FORM__JMPTO_REGISTER_BUTTON__TEXT}
                    </Button>
                </Item>
            </Form>
        );

        // register form
        const registerForm = (
            <Form className={'mt-lg'}>
                <Item>
                </Item>
            </Form>
        );

        // return the render result
        return (
            <KLayout
                className={'w-100 h-100vh'}
                colorMode={KLayout.COLOR_MODE_MAIN}>
                {this.state.loading ? (
                    <LoadingLayout/>
                ) : (
                    <Row
                        className={'w-100 h-100'}
                        type={'flex'}
                        align={'middle'}
                        justify={'center'}>
                        <Col
                            xs={20} sm={18} md={8}
                            lg={6} xl={6} xxl={4}>
                            {this.state.blockIsLogin && (titleDiv)}
                            {this.state.blockIsLogin ? (loginForm) : (registerForm)}
                        </Col>
                    </Row>
                )}
            </KLayout>
        );
    }

}
