/**
 * /page/user/register.js
 * @author John Kindem
 * @description source file for user register page
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input, Icon, Button, message, Spin, Modal } from 'antd';
import axios from 'axios';
import requestConfig, { commonUrlPrefix } from '../../config/request';
import { Log } from '../../tool/log';
import { PasswordTool } from '../../tool/password';
import regexConfig from '../../config/regex';
import { LoadingLayout } from '../../component/gadget/loading-layout';
import { KIcon } from '../../component/tool/k-icon';
import { Link } from 'react-router-dom';

const { Item } = Form;
const userRegex = regexConfig.user;

/**
 * page component - /user/register
 */
export class UserRegisterPage extends React.Component {

    // static text
    // input component place holder texts
    static __FORM__EMAIL_INPUT__PLACEHOLDER = '邮箱';
    static __FORM__NICKNAME_INPUT__PLACEHOLDER = '昵称';
    static __FORM__PASSWORD_INPUT__PLACEHOLDER = '密码';
    static __FORM__CONFIRM_PASSWORD_INPUT__PLACEHOLDER = '确认密码';
    static __FORM__CAPTCHA_INPUT__PLACEHOLDER = '邮箱验证码';
    // button text
    static __FORM__REGISTER_BUTTON__TEXT = '注册';
    static __FORM__GET_CAPTCHA_BUTTON__TEXT = '获取';
    // title text
    static __TITLE__TEXT = '注册';
    static __TITLE__EMOJI = '🎉';
    static __TITLE__EMOJI__LABEL = 'welcome';
    // other text
    static __HAVE_ACCOUNT_HINT__TEXT = '已有账号?直接';
    static __LOGIN_LINK__TEXT = '登录';
    // validator help text
    static __VALIDATE_HELP__EMAIL_ADDRESS_INCORRECT__TEXT = '不正确的邮箱地址';
    static __VALIDATE_HELP__EMAIL_HAVE_BEEN_USED__TEXT = '邮箱地址已经被使用';
    static __VALIDATE_HELP__NICKNAME__TEXT = '昵称必须是4-20字符内中英文、数字的组合';
    static __VALIDATE_HELP__PASSWORD__TEXT = '密码必须为6-16字符内英文、数字、@#的组合';
    static __VALIDATE_HELP__CONFIRM_PASSWORD__TEXT = '两次输入的密码不同';
    static __VALIDATE_HELP__CAPTCHA__TEXT = '验证码错误';

    /**
     * constructor of react component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {
            // form values
            email: '',
            nickname: '',
            password: '',
            confirmPassword: '',
            captcha: '',

            // form locked
            locked: false,

            // loading status
            loading: true,

            // validate status
            emailValidated: true,
            emailHelpTypeIsAddressIncorrect: true,
            nicknameValidated: true,
            passwordValidated: true,
            confirmPasswordValidated: true,
            captchaValidated: true,

            // captcha
            captchaGetReady: true,
            captchaTimeToReady: 119
        };
    }

    /**
     * life cuntion of react which called when component did mount
     */
    componentDidMount() {
        setTimeout(() => { this.setState({ loading: false }); }, 1000);
    }

    /**
     * tool function for lock form
     */
    lock() {
        this.setState({ locked: true });
    }

    /**
     * tool function for unlock form
     */
    unlock() {
        this.setState({ locked: false });
    }

    /**
     * handle called when form's value 'email' change
     * @param {Object} e react event object
     */
    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    /**
     * handle called when form's value 'nickname' change
     * @param {Object} e react event object
     */
    onNicknameChange = (e) => {
        this.setState({ nickname: e.target.value });
    };

    /**
     * handle called when form's value 'password' change
     * @param {Object} e react event object
     */
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    /**
     * handle called when form's value 'confirm password' change
     * @param {Object} e react event object
     */
    onConfirmPasswordChange = (e) => {
        this.setState({ confirmPassword: e.target.value });
    };

    /**
     * handle called when form's value 'captcha' change
     * @param {Object} e react event object
     */
    onCaptchaChange = (e) => {
        this.setState({ captcha: e.target.value });
    };

    /**
     * handle called when get captcha button clicked
     */
    onGetCaptchaButtonClick = async () => {
        // send request to get captcha
        let response, data;
        try {
            response = await axios.get(requestConfig.userLocal, {
                params: {
                    type: 'captcha',
                    email: this.state.email
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.userLocal}`, e);
            return message.error('服务器错误');
        }

        // if request success
        Log.dev(`get ${requestConfig.userLocal} OK`);
        response = response || {};
        data = response.data || {};

        // get info in data object
        let success = !!data.success;

        // if failed
        if (!success) {
            return message.error('获取验证码失败');
        }

        // if success
        this.setState({
            captchaGetReady: false,
            captchaTimeToReady: 119
        });
        let interval = setInterval(() => {
            this.setState(prevState => ({ captchaTimeToReady: prevState.captchaTimeToReady - 1 }));
        }, 1000);
        setTimeout(() => {
            this.setState({ captchaGetReady: true });
            clearInterval(interval);
        }, 119 * 1000);
    };

    /**
     * validate form values
     * @returns {boolean} validate success
     */
    basicValidateFormValues = () => {
        // init states
        let success = true;
        this.setState({
            emailValidated: true,
            emailHelpTypeIsAddressIncorrect: true,
            nicknameValidated: true,
            passwordValidated: true,
            confirmPasswordValidated: true,
            captchaValidated: true
        });

        // check email input value
        if (!this.state.email.match(userRegex.email)) {
            this.setState({
                emailValidated: false,
                emailHelpTypeIsAddressIncorrect: true
            });
            success = false;
        }

        // check username input value
        if (!this.state.nickname.match(userRegex.nickname)) {
            this.setState({ nicknameValidated: false });
            success = false;
        }

        // password
        if (!this.state.password.match(userRegex.password)) {
            this.setState({ passwordValidated: false });
            success = false;
        }

        // confirm password
        if (this.state.confirmPassword !== this.state.password) {
            this.setState({ confirmPasswordValidated: false });
            success = false;
        }

        return success;
    };

    /**
     * handle called when register button clicked
     */
    onRegisterButtonClick = async () => {
        // lock
        this.lock();

        // form validate
        if (!this.basicValidateFormValues()) {
            return this.unlock();
        }

        // send a request to get email usage status
        let response, data;
        try {
            response = await axios.get(requestConfig.userLocal, {
                params: {
                    type: 'emailUsage',
                    email: this.state.email
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.userLocal}`, e);
            this.unlock();
            return message.error('服务器错误');
        }

        // if success
        Log.dev(`get ${requestConfig.userLocal} OK`);
        response = response || {};
        data = response.data || {};

        // get info from data object
        let exist = !!data.exist;

        // if the email has exist
        if (exist) {
            this.setState({
                emailValidated: false,
                emailHelpTypeIsAddressIncorrect: false
            });
            return this.unlock();
        }

        // if the email is not exist in database
        // get a random code
        let salt = PasswordTool.getSalt();
        // encode the password
        let passwordHash = PasswordTool.encode(this.state.password, salt);

        // send a request to register a local user account
        response = null;
        data = null;
        try {
            response = await axios.post(requestConfig.userLocal, {
                email: this.state.email,
                captcha: this.state.captcha.toUpperCase(),
                nickname: this.state.nickname,
                salt: salt,
                password: passwordHash
            });
        } catch (e) {
            Log.devError(`post ${requestConfig.userLocal}`, e);
            this.unlock();
            return message.error('服务器错误');
        }

        // if request success
        Log.dev(`post ${requestConfig.userLocal} OK`);
        response = response || {};
        data = response.data || {};

        // get info from data object
        let success = !!data.success;
        let reason = data.reason || '';

        // if register failed
        if (!success) {
            this.unlock();
            return message.error(`注册失败，${reason}`);
        }

        // if register success
        // jump to index page
        this.props.history.push('/');
    };

    /**
     * render function of react component
     * @return {*} result of render
     */
    render() {
        // title div
        const titleDiv = (
            <div className={'font-size-xl text-align-center'}>
                <span
                    role={'img'}
                    aria-labelledby={UserRegisterPage.__TITLE__EMOJI__LABEL}>
                    {UserRegisterPage.__TITLE__EMOJI}
                </span>
                <span>
                    {UserRegisterPage.__TITLE__TEXT}
                </span>
            </div>
        );

        // little loading span
        const littleLoadingSpan = (
            <Spin
                indicator={
                    <Icon type={'loading'} className={'font-size-xs'}/>
                }/>
        );

        // form
        const form = (
            <Form className={'mt-lg'}>
                <Item
                    hasFeedback
                    validateStatus={this.state.emailValidated ? null : 'error'}
                    help={
                        this.state.emailValidated ?
                            '' : (
                                this.state.emailHelpTypeIsAddressIncorrect ?
                                    UserRegisterPage.__VALIDATE_HELP__EMAIL_ADDRESS_INCORRECT__TEXT :
                                    UserRegisterPage.__VALIDATE_HELP__EMAIL_HAVE_BEEN_USED__TEXT
                            )
                    }>
                    <Input
                        placeholder={UserRegisterPage.__FORM__EMAIL_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'user'}/>}
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item
                    hasFeedback
                    validateStatus={this.state.nicknameValidated ? null : 'error'}
                    help={this.state.nicknameValidated ? '' : UserRegisterPage.__VALIDATE_HELP__NICKNAME__TEXT}>
                    <Input
                        placeholder={UserRegisterPage.__FORM__NICKNAME_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'smile'}/>}
                        value={this.state.nickname}
                        onChange={this.onNicknameChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item
                    hasFeedback
                    validateStatus={this.state.passwordValidated ? null : 'error'}
                    help={this.state.passwordValidated ? '' : UserRegisterPage.__VALIDATE_HELP__PASSWORD__TEXT}>
                    <Input
                        type={'password'}
                        placeholder={UserRegisterPage.__FORM__PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'lock'}/>}
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item
                    hasFeedback
                    validateStatus={this.state.confirmPasswordValidated ? null : 'error'}
                    help={this.state.confirmPasswordValidated ? '' : UserRegisterPage.__VALIDATE_HELP__CONFIRM_PASSWORD__TEXT}>
                    <Input
                        type={'password'}
                        placeholder={UserRegisterPage.__FORM__CONFIRM_PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'lock'}/>}
                        value={this.state.confirmPassword}
                        onChange={this.onConfirmPasswordChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item
                    hasFeedback
                    validateStatus={this.state.captchaValidated ? null : 'error'}
                    help={this.state.captchaValidated ? '' : UserRegisterPage.__VALIDATE_HELP__CAPTCHA__TEXT}>
                    <Input
                        placeholder={UserRegisterPage.__FORM__CAPTCHA_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'key'}/>}
                        addonAfter={
                            this.state.captchaGetReady ? (
                                <a onClick={this.onGetCaptchaButtonClick}>
                                    {UserRegisterPage.__FORM__GET_CAPTCHA_BUTTON__TEXT}
                                </a>
                            ) : (
                                <span>
                                    {this.state.captchaTimeToReady}
                                </span>
                            )
                        }
                        disabled={this.state.locked}/>
                </Item>
                <Item>
                    <Button
                        type={'primary'}
                        className={'w-100'}
                        onClick={this.onRegisterButtonClick}
                        disabled={this.state.locked}>
                        {this.state.locked ? (
                            littleLoadingSpan
                        ) : (
                            UserRegisterPage.__FORM__REGISTER_BUTTON__TEXT
                        )}
                    </Button>
                    <span>
                        {UserRegisterPage.__HAVE_ACCOUNT_HINT__TEXT}&nbsp;
                        <Link to={'/user/login'}>{UserRegisterPage.__LOGIN_LINK__TEXT}</Link>
                    </span>
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
                            {titleDiv}
                            <br/><br/>
                            {form}
                        </Col>
                    </Row>
                )}
            </KLayout>
        );
    };

};
