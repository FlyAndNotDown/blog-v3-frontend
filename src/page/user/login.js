/**
 * /page/user/login.js
 * @author John Kindem
 * @description source file for user login page
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input, Icon, Button, message, Spin, Checkbox } from 'antd';
import axios from 'axios';
import requestConfig from '../../config/request';
import { Log } from '../../tool/log';
import { PasswordTool } from '../../tool/password';
import regexConfig from '../../config/regex';
import { LoadingLayout } from '../../component/gadget/loading-layout';
import { Link } from 'react-router-dom';

const { Item } = Form;
const userRegex = regexConfig.user;

/**
 * page component - /user/login
 */
export class UserLoginPage extends React.Component {

    // static text
    // input component place holder text
    static __FORM__EMAIL_INPUT__PLACEHOLDER = '邮箱';
    static __FORM__PASSWORD_INPUT__PLACEHOLDER = '密码';
    // button text
    static __FORM__LOGIN_BUTTON__TEXT = '登录';
    // title text
    static __TITLE__TEXT = '登录';
    static __TITLE__EMOJI = '🍉';
    static __TITLE__EMOJI__LABEL = 'watermelon';
    // other text
    static __REMEMBER_ME_CHECKBOX__TEXT = '记住我30天';
    static __REGISTER_LINK__TEXT = '注册';
    static __FORGET_PASSWORD_LINK__TEXT = '忘记密码';
    // validator help
    static __VALIDATOR_HELP__EMAIL = '邮箱格式不正确';
    // validator help
    static __VALIDATOR_HELP__PASSWORD = '密码必须为6-16字符内英文、数字、@#的组合';

    /**
     * constructor of react component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {
            // form values
            email: '',
            password: '',

            // form locked
            locked: false,

            // loading status
            loading: true,

            // validated
            emailValidated: true,
            passwordValidated: true
        };
    }

    /**
     * life function of react which called when component did mount
     */
    componentDidMount() {
        // set loading status false
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
     * handle called when form's value 'password' change
     * @param {Object} e react event object
     */
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    /**
     * validate all form values and return result
     * @returns {boolean} validate success status
     */
    formValidate = () => {
        // init states
        let success = true;
        this.setState({
            emailValidated: true,
            passwordValidated: true
        });

        // check email input value
        if (!this.state.email.match(userRegex.email)) {
            this.setState({ emailValidated: false });
            success = false;
        }

        // check password input value
        if (!this.state.password.match(userRegex.password)) {
            this.setState({ passwordValidated: false });
            success = false;
        }

        // return result
        return success;
    };

    /**
     * handle called when login button clicked
     */
    onLoginButtonClick = async () => {
        
        // lock form
        this.lock();
        
        // validate form values
        if (!this.formValidate()) {
            return this.unlock();
        }

        // get values from state object
        let { email, password } = this.state;

        // send a request to get salt of user
        let response, data;
        try {
            response = await axios.get(requestConfig.userLogin, {
                params: {
                    type: 'salt',
                    email: email
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.userLogin}`, e);
            this.unlock();
            return message.error('服务器错误');
        }

        // if success, log it
        Log.dev(`get ${requestConfig.userLogin} OK`);

        // unpack response object
        response = response || {};
        data = response.data || {};

        // get info in data object
        let salt = data.salt || null;

        // if got nothing
        if (!salt) {
            this.unlock();
            return message.error('用户不存在');
        }

        // encode password
        let passwordHash = PasswordTool.encode(password, salt);
        
        // send a request to do login check
        response = null;
        data = null;
        try {
            response = await axios.post(requestConfig.userLogin, {
                type: 'local',
                email: email,
                password: passwordHash
            });
        } catch (e) {
            Log.devError(`post ${requestConfig.userLogin}`, e);
            this.unlock();
            return message.error('服务器错误');
        }

        // if success, log it
        Log.dev(`post ${requestConfig.userLogin} OK`);

        // unpack response object
        response = response || {};
        data = response.data || {};

        // get infos in data object
        let success = !!data.success;

        // if login failed
        if (!success) {
            this.unlock();
            return message.error('用户名或密码错误');
        }

        // if login success, jump to index page
        message.info('登录成功，正在为您跳转');
        setTimeout(() => { this.props.history.push('/'); }, 1000);
        
    };

    /**
     * render function of react component
     * @return {*} result of render
     */
    render() {
        // title row
        const titleDiv = (
            <div className={'font-size-xl text-align-center'}>
                <span
                    role={'img'}
                    aria-labelledby={UserLoginPage.__TITLE__EMOJI__LABEL}>
                    {UserLoginPage.__TITLE__EMOJI}
                </span>
                <span>
                    {UserLoginPage.__TITLE__TEXT}
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
                    help={this.state.emailValidated ? '' : UserLoginPage.__VALIDATOR_HELP__EMAIL}>
                    <Input
                        placeholder={UserLoginPage.__FORM__EMAIL_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'user'}/>}
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item
                    hasFeedback
                    validateStatus={this.state.passwordValidated ? null : 'error'}
                    help={this.state.passwordValidated ? '' : UserLoginPage.__VALIDATOR_HELP__PASSWORD}>
                    <Input
                        type={'password'}
                        placeholder={UserLoginPage.__FORM__PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'lock'}/>}
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item>
                    <span className={'float-left'}>
                        <Checkbox>{UserLoginPage.__REMEMBER_ME_CHECKBOX__TEXT}</Checkbox>
                    </span>
                    <span className={'float-right'}>
                        <Link to={'/user/register'}>{UserLoginPage.__REGISTER_LINK__TEXT}</Link>&nbsp;
                        <Link to={'#'}>{UserLoginPage.__FORGET_PASSWORD_LINK__TEXT}</Link>
                    </span>
                    <Button
                        type={'primary'}
                        className={'w-100'}
                        onClick={this.onLoginButtonClick}
                        disabled={this.state.locked}>
                        {this.state.buttonLocked ? (
                            littleLoadingSpan
                        ) : (
                            UserLoginPage.__FORM__LOGIN_BUTTON__TEXT
                        )}
                    </Button>
                    <span>
                        或使用&nbsp;
                        <Link to={'#'}>GitHub</Link>&nbsp;
                        登录
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
    }

};
