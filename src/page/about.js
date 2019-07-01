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
import { message, Affix, BackTop, Row, Col, Divider } from 'antd';
import { KLayout } from '../component/tool/k-layout';
import { NavBar } from '../component/nav-bar';
import { LoadingLayout } from '../component/gadget/loading-layout';
import { Footer } from '../component/footer';
import { BlankLink } from '../component/tool/blank-link';

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

        // about blog page
        const aboutBlogBlock = (
            <div>
                <div className={'font-size-lg'}>
                    <span role={'img'} aria-labelledby={'star'}>✨</span>
                    关于博客
                </div>
                <Divider/>
                <div className={'p-xl font-size-about color-grey'}>
                    <div>
                        始于 <code>2017</code>，近期抽空重制了一哈(没什么时间投入，感觉做的更垃圾了😅)，现有版本: <code>Version 3.0</code>
                    </div>
                    <br/>
                    <div>
                        博客内容:
                        <ul>
                            <li>日常扯淡</li>
                            <li>日常与bug斗智斗勇</li>
                            <li>坑人教程</li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        技术栈:
                        <ul>
                            <li>前端: <code>React + Ant.Design + Webpack + Axios ...</code></li>
                            <li>后端: <code>Koa.js + Sequelize</code></li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        垃圾存放处:
                        <ul>
                            <li>前端: <BlankLink to={'https://github.com/FlyAndNotDown/blog-v3-frontend'}>github-FlyAndNotDown--blog-v3-frontend</BlankLink></li>
                            <li>后端: <BlankLink to={'https://github.com/FlyAndNotDown/blog-v3-backend'}>github-FlyAndNotDown--blog-v3-backend</BlankLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );

        // about me block
        const aboutMeBlock = (
            <div>
                <div className={'font-size-lg'}>
                    <span role={'img'} aria-labelledby={'smile'}>😆</span>
                    关于我
                </div>
                <Divider/>
                <div className={'p-xl font-size-about color-grey'}>
                    <div>
                        目前大四，马上毕业，工作找好了，混日子中，暂时不想读研
                    </div>
                    <br/>
                    <div>
                        我是什么样子的:
                        <ul>
                            <li>前端嗜好者</li>
                            <li>啥都会做一点</li>
                            <li><code>Emoji</code>嗜好者</li>
                            <li>铁头娃</li>
                            <li>热爱乱七八糟的技术</li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        我喜欢什么:
                        <ul>
                            <li>前端</li>
                            <li><code>Game</code></li>
                            <li>挖坑(不填)</li>
                            <li>与bug斗智斗勇</li>
                            <li>厨房</li>
                        </ul>
                    </div>
                    <br/>
                    <div>
                        联系方式:
                        <ul>
                            <li>常年不在线的邮箱: <a href={'mailto:johnkindem@qq.com'}>johnkindem@qq.com</a></li>
                        </ul>
                    </div>
                </div>
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
                    {aboutBlogBlock}
                    {aboutMeBlock}
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