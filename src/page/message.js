/**
 * /page/post.js
 * @author John Kindem
 * @description source file for leave message page component
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { Affix, Row, Col, BackTop, message } from 'antd';
import { NavBar } from '../component/nav-bar';
import { Footer } from '../component/footer';
import { LoadingLayout } from '../component/gadget/loading-layout';
import { MessageBlockList } from '../component/block/message-block-list';
import axios from 'axios';
import requestConfig from '../config/request';
import { Log } from '../tool/log';

/**
 * message page component
 * @constructor
 */
export class MessagePage extends React.Component {

    /**
     * constructor of React component
     * @param {Object} props properties of React component
     */
    constructor(props) {
        super(props);

        this.state = {
            loadDown: false,

            // message value list
            messages: [],

            // message block locked
            messageBlockLocked: false,

            // user info
            userLogin: false,
            userInfo: {}
        };
    }

    /**
     * component did mount
     */
    async componentDidMount() {
        // get user info
        let response, data;
        try {
            response = await axios.get(requestConfig.userLogin, {
                params: {
                    type: 'info'
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.userLogin}`);
            message.error('获取用户信息失败');
        }

        // if success
        Log.dev(`get ${requestConfig.userLogin} OK`);
        response = response || {};
        data = response.data || {};

        // save user info
        this.state.userLogin = !!data.login;
        this.state.userInfo = data.info || {};

        // TODO

        // set load down status
        this.setState({ loadDown: true });        
    }

    /**
     * handle called when a new message publish
     * @param {string} value new message value
     * @returns {boolean} success or failed status
     */
    onNewMessage = (value) => {
        // TODO
    };

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // header layout
        const headerLayout = (
            <KLayout colorMode={KLayout.COLOR_MODE_NONE}>
                <Affix offsetTop={0}>
                    <NavBar
                        active={true}
                        history={this.props.history}
                        login={this.state.userLogin}
                        user={this.state.userInfo}
                        onNewMessage={this.onNewMessage}/>
                </Affix>
            </KLayout>
        );

        // main context row
        const mainContextRow = (
            <Row>
                <Col
                    xs={{ offset: 0, span: 24 }}
                    sm={{ offset: 0, span: 24 }}
                    md={{ offset: 0, span: 24 }}
                    lg={{ offset: 2, span: 14 }}>
                    <br/>
                    <MessageBlockList
                        login={this.state.userLogin}
                        user={this.state.userInfo}
                        message={this.state.messages}
                        locked={this.state.messageBlockLocked}/>
                </Col>
            </Row>
        );

        // body layout
        const bodyLayout = (
            <KLayout>
                <Row>
                    <Col
                        xs={{ offset: 1, span: 22 }}
                        sm={{ offset: 1, span: 22 }}
                        md={{ offset: 2, span: 20 }}
                        lg={{ offset: 2, span: 20 }}
                        xl={{ offset: 3, span: 18 }}
                        xxl={{ offset: 4, span: 16 }}>
                        {mainContextRow}
                    </Col>
                </Row>
                <div>
                    <BackTop/>
                </div>
            </KLayout>
        );

        // footer layout
        const footerLayout = (
            <Footer className={'mt-lg'}/>
        );

        // return render result
        return (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                {this.state.loadDown && headerLayout}
                {!this.state.loadDown && (<LoadingLayout/>)}
                {this.state.loadDown && bodyLayout}
                {this.state.loadDown && footerLayout}
            </KLayout>
        );
    }

}