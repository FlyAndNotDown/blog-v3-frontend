/**
 * /page/user/github.js
 * @author John Kindem
 * @description source file for user github login
 * @version
 */

import React from 'react';
import queryString from 'query-string';
import Axios from 'axios';
import requestConfig from '../../config/request';
import { Log } from '../../tool/log';

export class UserGithubPage extends React.Component {

    /**
     * constructor of react component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * login function
     * @param {string} code code from github
     */
    async login(code) {
        let response, data;
        try {
            response = await Axios.post(requestConfig.userGithub, {
                code: code
            });
        } catch (e) {
            Log.devError(`post ${requestConfig.userGithub}`, e);
            return this.props.history.push('/');
        }

        // if success, log it
        Log.dev(`post ${requestConfig.userGithub} OK`);

        // get info in data
        response = response || {};
        data = response.data || {};
        let success = !!data.success;

        // if failed
        if (!success) {
            this.props.history.push('/');
        }

        // if success
        this.props.history.push('/');
    }

    /**
     * life function of react which called when component did mount
     */
    async componentDidMount() {
        // get search info and parse it to query object
        const search = this.props.location.search;
        const query = queryString.parse(search);

        // login
        if (query.code) {
            await this.login(query.code);
        }
    }

    /**
     * render function of react component
     * @return {*} result of render
     */
    render() {
        // return render result
        return (
            <div className={'p-lg'}>logining ...... please wait a few seconds ......</div>
        );
    }

};
