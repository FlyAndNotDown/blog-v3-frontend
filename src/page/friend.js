/**
 * /page/friend.js
 * @author John Kindem
 * @description source file for friend chain page component
 * @version v1.0
 */

import React from 'react';
import axios from 'axios';
import { KLayout } from '../component/tool/k-layout';
import { Affix, Divider } from 'antd';
import { NavBar } from '../component/nav-bar';
import { Footer } from '../component/footer';
import { LoadingLayout } from '../component/gadget/loading-layout';
import requestConfig from '../config/request';
import { Row, Col, message, BackTop } from 'antd';
import { Log } from '../tool/log';
import { BlankLink } from '../component/tool/blank-link';

/**
 * friend page component
 * @constructor
 */
export class FriendPage extends React.Component {

    // static text
    static __TITLE = '友情链接';
    static __SLOGAN = '🧐快到碗里来';

    /**
     * constructor of React component
     * @param {Object} props properties of React component 
     */
    constructor(props) {
        super(props);

        this.state = {
            loadDown: false,

            // user info
            userLogin: false,
            userInfo: {},

            // friend chains info
            friends: []
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
            Log.devError(`get ${requestConfig.userLogin}`, e);
            message.error('获取用户信息失败');
        }

        // if success
        Log.dev(`get ${requestConfig.userLogin} OK`);
        response = response || {};
        data = response.data || {};

        // save user info
        this.state.userLogin = !!data.login;
        this.state.userInfo = data.info || {};

        // get friens chain info
        response = null;
        data = null;
        try {
            response = await axios.get(requestConfig.friend);
        } catch (e) {
            Log.devError(`get ${requestConfig.friend}`, e);
            return message.error('获取友链信息失败');
        }

        // if success
        Log.dev(`get ${requestConfig.friend} OK`);
        response = response || {};
        data = response.data || {};

        // get info in data object
        let friends = data.friends || [];

        // set status
        this.setState({
            loadDown: true,
            friends: friends
        });
    }

    /**
     * friend chain block list render function
     * @param {Object} item friend chain object
     * @param {number} key object key in list
     * @returns {*} render result
     */
    friendBlockListRenderFunction = (item, key) => {
        // return render result
        return (
            <div className={'font-size-sm'}>
                <BlankLink to={item.to}>{item.name}</BlankLink>
            </div>
        );
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
                        user={this.state.userInfo}/>
                </Affix>
            </KLayout>
        );

        // title row
        const titleRow = (
            <div>
                <div className={'color-black font-size-lg'}>
                    {FriendPage.__TITLE}
                </div>
                <div className={'color-second font-size-md'}>
                    {FriendPage.__SLOGAN}
                </div>
                <Divider/>
            </div>
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
                    {titleRow}
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

};