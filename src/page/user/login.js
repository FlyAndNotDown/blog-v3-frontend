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
    static __FORM_EMAIL_INPUT__PLACEHOLDER = '邮箱';
    static __FORM_PASSWORD_INPUT__PLACEHOLDER = '密码';
    // button text
    static __FORM__LOGIN_BUTTON_TEXT = '登录';
    // title text
    static __TITLE_TEXT = '登录';
    static __TITLE_EMOJI = '🍉';
    static __TITLE_EMOJI_LABEL = 'watermelon';

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

            // button locked
            locked: false,

            // loading status
            loading: true
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
     * tool function for lock button
     */
    lockButton() {
        this.setState({ locked: true });
    }

    /**
     * tool function for unlock button
     */
    unlockButton() {
        this.setState({ locked: false });
    }

    /**
     * handle when form's value 'email' change
     * @param {Object} e react event object
     */
    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    /**
     * handle when form's value 'password' change
     * @param {Object} e react event object
     */
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    /**
     * handle called when login button click
     */
    onLoginButtonClick = () => {
        // TODO
    };

    /**
     * render function of react
     * @return {* result of render
     */
    render() {
        // title row
        const titleDiv = (
            <div className={'font-size-xl text-align-center'}>
                <span
                    role={'img'}
                    aria-labelledby={UserLoginPage.__TITLE_EMOJI_LABEL}>
                    {UserLoginPage.__TITLE_EMOJI}
                </span>
                <span>
                    {UserLoginPage.__TITLE_TEXT}
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
                <Item>
                    <Input
                        placeholder={UserLoginPage.__FORM_EMAIL_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'user'}/>}
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item>
                    <Input
                        type={'password'}
                        placeholder={UserLoginPage.__FORM_PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'lock'}/>}
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item>
                    <span className={'float-left'}>
                        <Checkbox>记住我30天</Checkbox>
                    </span>
                    <span className={'float-right'}>
                        <Link to={'/user/register'}>注册</Link>&nbsp;
                        <Link to={'#'}>忘记密码</Link>
                    </span>
                    <Button
                        type={'primary'}
                        className={'w-100'}
                        onClick={this.onLoginButtonClick}
                        disabled={this.state.locked}>
                        {this.state.buttonLocked ? (
                            littleLoadingSpan
                        ) : (
                            UserLoginPage.__FORM__LOGIN_BUTTON_TEXT
                        )}
                    </Button>
                    <span>
                        或使用&nbsp;
                        <Link to={'#'}>GitHub</Link>&nbsp;
                        <Link to={'#'}>QQ</Link>&nbsp;
                        <Link to={'#'}>微博</Link>&nbsp;
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
