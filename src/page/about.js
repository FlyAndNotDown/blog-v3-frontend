/**
 * /page/about.js
 * @author John Kindem
 * @description source file for about page
 * @version v1.0
 */

import React from 'react';
import axios from 'axios';
import requestConfig from '../config/request';
import { Log } from '../tool/log';
import { message } from 'antd';

/**
 * AboutPage
 * @constructor
 * @description about page component
 */
export class AboutPage extends React.Component {

    /**
     * constructor of component
     * @param {Object} props properties of react component
     */
    constructor(props) {
        super(props);

        this.state = {
            // loadDown
            loadDown: false,

            // user info
            userLogin: false,
            userInfo: {}
        };
    }

    /**
     * life function when component did mount
     */
    async componentDidMount() {
        // do the request to get user info
        let response, data;
        try {
            response = await axios.get(requestConfig.userLogin, {
                params: {
                    type: 'info'
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.userLogin}`, e);
            this.setState({ loadDown: true });
            return message.error('获取用户信息失败');
        }

        // if success
        Log.dev(`get ${requestConfig.userLogin} OK`);
        response = response || {};
        data = response.data || {};

        // save info to state
        this.setState({
            loadDown: true,
            userLogin: !!data.login,
            userInfo: data.info || {}
        });
    }

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // return render result
        return (
            <div></div>
        );
    }

};