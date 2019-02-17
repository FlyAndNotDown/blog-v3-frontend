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
import { message, Affix, BackTop, Row, Col } from 'antd';
import { KLayout } from '../component/tool/k-layout';
import { NavBar } from '../component/nav-bar';
import { LoadingLayout } from '../component/gadget/loading-layout';
import { Footer } from '../component/footer';

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
        
    }

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // render result
        return (
            <div></div>
        );
    }

};