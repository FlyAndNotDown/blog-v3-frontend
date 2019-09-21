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
import ReactMarkdown from 'react-markdown/with-html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import aboutMarkdownSourceFile from '../resources/about.md';

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
            userInfo: {},

            // body
            body: ''
        };
    }

    /**
     * life function when component did mount
     */
    async componentDidMount() {
        // fetch markdown source content
        let response, data;
        try {
            response = await fetch(aboutMarkdownSourceFile);
            data = await response.text();
        } catch (e) {
            Log.devError('fail to get about markdown source');
            return message.error('获取页面数据失败');
        }
        this.setState({ body: data });

        // do the request to get user info
        response = null;
        data = null;
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
     * Markdown 代码渲染函数
     * @param {Object} object 解析对象
     * @returns {*} 渲染结果
     */
    markdownCodeRender = object => {
        return (
            <div className={'highlight'}>
                <SyntaxHighlighter
                    customStyle={{ padding: '20px' }}
                    language={object.language}>
                    {object.value}
                </SyntaxHighlighter>
            </div>
        );
    };

    /**
     * Markdown 链接渲染
     * @param {Object} object 渲染节点对象
     * @returns {*} 渲染结果
     */
    markdownLinkRender = object => {
        return (
            <a href={object.href} target={'__blank'}>{object.children[0]}</a>
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

        // main context row
        const mainContextRow = (
            <Row>
                <Col
                    xs={{ offset: 0, span: 24 }}
                    sm={{ offset: 0, span: 24 }}
                    md={{ offset: 0, span: 24 }}
                    lg={{ offset: 2, span: 14 }}>
                    <br/>
                    <ReactMarkdown
                        escapeHtml={false}
                        className={'markdown-body mt-lg'}
                        source={this.state.body}
                        renderers={{
                            code: this.markdownCodeRender,
                            link: this.markdownLinkRender,
                            linkReference: this.markdownLinkRender
                        }}/>
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