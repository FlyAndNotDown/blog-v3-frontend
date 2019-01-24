/**
 * /page/user/login.js
 * @author John Kindem
 * @description source file for user login page
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input, Icon, Button, message, Spin, Upload, Avatar } from 'antd';
import axios from 'axios';
import requestConfig from '../../config/request';
import { Log } from '../../tool/log';
import { PasswordTool } from '../../tool/password';
import regexConfig from '../../config/regex';
import { LoadingLayout } from '../../component/gadget/loading-layout';

const { Item } = Form;
const userRegex = regexConfig.user;

export class UserLoginPage extends React.Component {

    // static text
    // place holder text
    static __LOGIN_FORM__USERNAME_INPUT__PLACEHOLDER = '用户名';
    static __LOGIN_FORM__PASSWORD_INPUT__PLACEHOLDER = '密码';
    static __REGISTER_FORM__USERNAME_INPUT__PLACEHOLDER = '用户名';
    static __REGISTER_FORM__NICKNAME_INPUT__PLACEHOLDER = '昵称';
    static __REGISTER_FORM__PASSWORD_INPUT__PLACEHOLDER = '密码';
    static __REGISTER_FORM__CONFIRM_PASSWORD_INPUT__PLACEHOLDER = '确认密码';
    // button text
    static __LOGIN_FORM__LOGIN_BUTTON__TEXT = '登录';
    static __LOGIN_FORM__JMPTO_REGISTER_BUTTON__TEXT = '转到注册';
    static __REGISTER_FORM__REGISTER_BUTTON_TEXT = '注册';
    static __REGISTER_FORM__JMPTO_LOGIN_BUTTON__TEXT = '转到登录';
    static __REGISTER_FORM__GET_RANDOM_AVATAR_BUTTON__TEXT = '随机头像';
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

            // register form - username input value
            registerUsername: '',
            // register form - nickname input value
            registerNickname: '',
            // register form - password input value
            registerPassword: '',
            // register form - confirm password input value
            registerConfirmPassword: '',

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
     * lock button
     */
    lockButton = () => {
        this.lockButton();
    };

    /**
     * unlock button
     */
    unlockButton = () => {
        this.unlockButton();
    };

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
     * a handle called when register's username value change
     * @param {Object} e react event object
     */
    onRegisterUsernameChange = (e) => {
        this.setState({ registerUsername: e.target.value });
    };

    /**
     * a handle called when register's nickname value change
     * @param {Object} e react event object
     */
    onRegisterNicknameChange = (e) => {
        this.setState({ registerNickname: e.target.value });
    };

    /**
     * a handle called when register's password value change
     * @param {Object} e react event object
     */
    onRegisterPasswordChange = (e) => {
        this.setState({ registerPassword: e.target.value });
    };

    /**
     * a handle called when register's confirm password value change
     * @param {Object} e react event object
     */
    onRegisterConfirmPasswordChange = (e) => {
        this.setState({ registerConfirmPassword: e.target.value });
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
    onRegisterButtonClick = async (e) => {
        this.lockButton();

        // check the input value
        if (!this.state.registerUsername.match(userRegex.username)) {
            this.unlockButton();
            return message.error('用户名不符合要求 (6-16位英文/数字组合)');
        }
        if (!this.state.registerNickname.match(userRegex.nickname)) {
            this.unlockButton();
            return message.error('昵称不符合要求 (4-20字符长度英文/汉字/数字组合)');
        }
        if (!this.state.registerPassword.match(userRegex.password)) {
            this.unlockButton();
            return message.error('密码不符合要求 (6-16位英文/数字/@#组合)');
        }

        // check the password input in second times as same
        if (this.state.registerPassword !== this.state.registerConfirmPassword) {
            this.unlockButton();
            return message.error('两次输入的密码不同，请重试');
        }

        // get a random salt string
        const salt = PasswordTool.getSalt();
        // encode the password to sha256 hash value
        const passwordHash = PasswordTool.encode(this.state.registerPassword, salt);

        // send request to register a new user
        let response, data;
        try {
            response = await axios.post(requestConfig.userLocal, {
                username: this.state.registerUsername,
                nickname: this.state.registerNickname,
                salt: salt,
                password: passwordHash
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.userLocal}`, e);
            return message.error('服务器错误，请稍后重试');
        }

        // if request success
        Log.dev(`get ${requestConfig.userLocal} OK`);
        response = response || {};
        data = response.data || {};

        // get register success status
        let success = !!data.success;

        // if not success
        if (!success) {
            this.unlockButton();
            return message.error(`注册失败${!!data.reason ? `，${data.reason}` : ''}`);
        }

        // if success
        this.unlockButton();
        message.success('注册成功，正在为您跳转');
        return this.props.history.push('/');
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

        // little loading span
        const littleLoadingSpan = (
            <Spin
                indicator={
                    <Icon type={'loading'} className={'font-size-xs'}/>
                }/>
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
                            littleLoadingSpan
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
                <Item className={'text-align-center'}>
                    <Avatar
                        size={128}
                        icon={'user'}/>
                </Item>
                <Item className={'text-align-center'}>
                    <Button>
                        {UserLoginPage.__REGISTER_FORM__GET_RANDOM_AVATAR_BUTTON__TEXT}
                    </Button>
                </Item>
                <Item>
                    <Input
                        placeholder={UserLoginPage.__REGISTER_FORM__USERNAME_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'user'}/>}
                        value={this.state.registerUsername}
                        onChange={this.onRegisterUsernameChange}
                        disabled={this.state.buttonLocked}/>
                </Item>
                <Item>
                    <Input
                        placeholder={UserLoginPage.__REGISTER_FORM__NICKNAME_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'smile'}/>}
                        value={this.state.registerNickname}
                        onChange={this.onRegisterNicknameChange}
                        disabled={this.state.buttonLocked}/>
                </Item>
                <Item>
                    <Input
                        type={'password'}
                        placeholder={UserLoginPage.__REGISTER_FORM__PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'key'}/>}
                        value={this.state.registerPassword}
                        onChange={this.onRegisterPasswordChange}
                        disabled={this.state.buttonLocked}/>
                </Item>
                <Item>
                    <Input
                        type={'password'}
                        placeholder={UserLoginPage.__REGISTER_FORM__CONFIRM_PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'key'}/>}
                        value={this.state.registerConfirmPassword}
                        onChange={this.onRegisterConfirmPasswordChange}
                        disabled={this.state.buttonLocked}/>
                </Item>
                <Item>
                    <Button
                        type={'primary'}
                        className={'float-left w-45'}
                        onClick={this.onRegisterButtonClick}
                        disabled={this.state.buttonLocked}>
                        {this.state.buttonLocked ? (
                            littleLoadingSpan
                        ) : (
                            UserLoginPage.__REGISTER_FORM__REGISTER_BUTTON_TEXT
                        )}
                    </Button>
                    <Button
                        className={'float-right w-45'}
                        onClick={this.onJmptoLoginButtonClick}
                        disabled={this.state.buttonLocked}>
                        {UserLoginPage.__REGISTER_FORM__JMPTO_LOGIN_BUTTON__TEXT}
                    </Button>
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
