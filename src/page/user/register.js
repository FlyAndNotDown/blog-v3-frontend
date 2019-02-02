/**
 * /page/user/register.js
 * @author John Kindem
 * @description source file for user register page
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
    // button text
    static __FORM__REGISTER_BUTTON__TEXT = '注册';
    // title text
    static __TITLE__TEXT = '注册';
    static __TITLE__EMOJI = '🎉';
    static __TITLE__EMOJI__LABEL = 'welcome';
    // other text
    static __HAVE_ACCOUNT_HINT__TEXT = '已有账号?直接';
    static __LOGIN_LINK__TEXT = '登录';
    // validator help text
    static __VALIDATE_HELP__EMAIL__TEXT = '不正确的邮箱地址';
    static __VALIDATE_HELP__NICKNAME__TEXT = '昵称必须是4-20字符内中英文、数字的组合';
    static __VALIDATE_HELP__PASSWORD__TEXT = '密码必须为6-16字符内英文、数字、@#的组合';
    static __VALIDATE_HELP__CONFIRM_PASSWORD__TEXT = '两次输入的密码不同';

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

            // form locked
            locked: false,

            // loading status
            loading: true,

            // validate status
            emailValidated: true,
            nicknameValidated: true,
            passwordValidated: true,
            confirmPasswordValidated: true
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
     * validate form values
     * @returns {boolean} validate success
     */
    validateFormValues = () => {
        let success = true;

        // check email input value
        if (this.state.email.match(userRegex.email)) {
            this.setState({ emailValidated: true });
            success = true;
        } else {
            this.setState({ emailValidated: false });
            success = false;
        }

        // check username input value
        if (this.state.nickname.match(userRegex.nickname)) {
            this.setState({ nicknameValidated: true });
            success = true;
        } else {
            this.setState({ nicknameValidated: false });
            success = false;
        }

        // password
        if (this.state.password.match(userRegex.password)) {
            this.setState({ passwordValidated: true });
            success = true;
        } else {
            this.setState({ passwordValidated: false });
            success = false;
        }

        // confirm password
        if (this.state.confirmPassword === this.state.password) {
            this.setState({ confirmPasswordValidated: true });
            success = true;
        } else {
            this.setState({ confirmPasswordValidated: false });
            success = false;
        }

        return success;
    };

    /**
     * handle called when register button clicked
     */
    onRegisterButtonClick = () => {
        // lock
        this.lock();

        // form validate
        if (!this.validateFormValues()) {
            this.unlock();
        }
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
                    help={this.state.emailValidated ? '' : UserRegisterPage.__VALIDATE_HELP__EMAIL__TEXT}>
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
