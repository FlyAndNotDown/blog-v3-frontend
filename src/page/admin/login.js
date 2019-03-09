/**
 * /page/admin/login.js
 * @author John Kindem
 * @description source file for admin login page
 * @version v1.0
 */

import React from 'react';
import { Icon, Form, Button, Input, Row, Col } from 'antd';
import { KLayout } from '../../component/tool/k-layout';
import { LoadingLayout } from '../../component/gadget/loading-layout';

const { Item } = Form;

/**
 * page component /user/login
 * @constructor
 */
export class AdminLoginPage extends React.Component {

    // static text
    // place holder
    static __FORM__USERNAME_INPUT__PLACEHOLDER = '用户名';
    static __FORM__PASSWORD_INPUT__PLACEHOLDER = '密码';
    // button text
    static __FORM__LOGIN_BUTTON__TEXT = '登录';
    // title text
    static __TITLE__TEXT = '饶我一命';
    static __TITLE__EMOJI = '🤧';
    static __TITLE__EMOJI__LABEL = 'week';

    /**
     * constructor of react component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {
            // loading status
            loading: true,

            // form locked status
            locked: false,

            // username
            username: '',
            // password,
            password: ''
        };
    }

    /**
     * a life function of react
     */
    componentDidMount() {
        setTimeout(() => { this.setState({ loading: false }) }, 1000);
    }

    /**
     * lock the form
     */
    lock() {
        this.setState({ locked: true });
    }

    /**
     * unlock the form
     */
    unlock() {
        this.setState({ locked: false });
    }

    /**
     * handle called when username changed
     * @param {Object} e react event object
     */
    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    /**
     * handle called when password changed
     * @param {Object} e react event object
     */
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    /**
     * handle called when login button clicked
     */
    onLoginButtonClick = () => {
        // TODO
    };

    /**
     * render function of react component
     * @returns {*} render result
     */
    render() {
        // title row
        const titleDiv = (
            <div className={'font-size-xl text-align-center'}>
                <span
                    role={'img'}
                    aria-labelledby={AdminLoginPage.__TITLE__EMOJI__LABEL}>
                    {AdminLoginPage.__TITLE__EMOJI}
                </span>
                &nbsp;
                <span>
                    {AdminLoginPage.__TITLE__TEXT}
                </span>
            </div>
        );

        // form
        const form = (
            <Form className={'mt-lg'}>
                <Item>
                    <Input
                        placeholder={AdminLoginPage.__FORM__USERNAME_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'user'}/>}
                        value={this.state.username}
                        onChange={this.onUsernameChange}
                        disabled={this.state.locked}/>
                </Item>
                <Item>
                    <Input
                        placeholder={AdminLoginPage.__FORM__PASSWORD_INPUT__PLACEHOLDER}
                        prefix={<Icon type={'lock'}/>}
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        disabled={this.state.disabled}/>
                </Item>
                <Item>
                    <Button
                        type={'primary'}
                        className={'w-100'}
                        disabled={this.state.locked}>
                        {AdminLoginPage.__FORM__LOGIN_BUTTON__TEXT}
                    </Button>
                </Item>
            </Form>
        );

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