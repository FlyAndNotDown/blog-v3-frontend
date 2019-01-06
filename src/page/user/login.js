/**
 * /page/user/login.js
 * @author John Kindem
 * @description source file for user login page
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input, Icon, Button, message } from 'antd';
import axios from 'axios';
import requestConfig from '../../config/request';
import { Log } from '../../tool/log';
import { PasswordTool } from '../../tool/password';
import regexConfig from '../../config/regex';

export class UserLoginPage extends React.Component {

    /**
     * constructor of react component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * render function of react component
     * @return {*} result of render
     */
    render() {
        // TODO
        return (
            <div>
            </div>
        );
    }

}
