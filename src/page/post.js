/**
 * /page/post.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { NavBar } from '../component/nav-bar';
import { Footer } from '../component/footer';
import { Row, Col, Affix, Divider, Icon, Anchor, BackTop, message } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';
import requestConfig from '../config/request';
import { Log } from '../tool/log';
import { LoadingLayout } from '../component/gadget/loading-layout';
import chinese2pinyin from 'chinese2pinyin';
import { CommentBlockList } from '../component/block/comment-block-list';

/**
 * 文章页面
 * @constructor
 */
export class PostPage extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            anchors: [],
            anchorsLock: false,

            title: '',
            date: '',
            labels: [],
            body: '',

            loadDown: false,

            // user info
            userLogin: false,
            userInfo: {}
        };

        // url
        this.url = `${this.props.history.location.pathname}`;

        // 锚点
        this.anchors = [];

        // postId
        this.postId = parseInt(this.props.match.params.postId, 10);
    }

    /**
     * a life function of React, do something after DOM render done
     */
    async componentDidMount() {
        let response;
        let data;

        // get user info
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

        this.state.userLogin = !!data.login;
        this.state.userInfo = data.info || {};

        // get post detail
        response = null;
        data = null;
        try {
            response = await axios.get(requestConfig.post, {
                params: {
                    type: 'detail',
                    id: this.postId
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.post}`, e);
            return this.props.history.push('/err/404');
        }

        // 如果请求成功
        Log.dev(`get ${requestConfig.post} OK`);
        response = response || {};
        data = response.data || {};

        let post = data.post || null;

        // 如果没有查到文章内容， 404
        if (!post) {
            return this.props.history.push('/err/404');
        }

        this.setState({
            title: post.title,
            date: post.date,
            labels: post.labels,
            body: post.body,
            loadDown: true
        });

        // 延迟加载锚点，防止超出 state 更新最大深度
        this.setState({
            anchors: this.anchors,
            anchorsLock: true
        });
    }

    /**
     * componentWillReceiveProps
     * @description a life function, to do something before get new props
     * @param {Object} nextProps new props
     */
    async componentWillReceiveProps(nextProps) {
        // get postId
        let postId = parseInt(nextProps.match.params.postId, 10);

        if (postId !== this.postId) {
            let response;
            let data;

            // get user info
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
                message.error('获取用户信息失败');
            }

            // if success
            Log.dev(`get ${requestConfig.userLogin} OK`);
            response = response || {};
            data = response.data || {};

            this.state.userLogin = !!data.login;
            this.state.userInfo = data.info || {};

            // get post detail
            try {
                response = await axios.get(requestConfig.post, {
                    params: {
                        type: 'detail',
                        id: this.postId
                    }
                });
            } catch (e) {
                Log.devError(`get ${requestConfig.post}`, e);
                return this.props.history.push('/err/404');
            }

            // 如果请求成功
            Log.dev(`get ${requestConfig.post} OK`);
            response = response || {};
            data = response.data || {};

            let post = data.post || null;

            // 如果没有查到文章内容， 404
            if (!post) {
                return this.props.history.push('/err/404');
            }

            this.setState({
                title: post.title,
                date: post.date,
                labels: post.labels,
                body: post.body,
                loadDown: true
            });

            // 延迟加载锚点，防止超出 state 更新最大深度
            this.setState({
                anchors: this.anchors,
                anchorsLock: true
            });
        }
    }

    /**
     * Markdown 标题渲染函数
     * @param {Object} object 解析对象
     * @returns {*} 渲染结果
     */
    markdownHeadingRender = object => {
        let level = object.level;
        let children = [];

        // unpack object's children
        for (let i = 0; i < object.children.length; i++) {
            if (typeof object.children[i] === 'string') {
                children.push({
                    value: object.children[i],
                    render: (<span key={i}>{object.children[i]}</span>)
                });
            } else if (object.children[i].$$typeof.toString() === 'Symbol(react.element)') {
                children.push({
                    value: object.children[i].props.children,
                    render: (<code key={i}>{object.children[i].props.children}</code>)
                });
            }
        }

        // calculate value
        let originValue = '';
        for (let i = 0; i < children.length; i++) {
            originValue += children[i].value;
        }
        let value = originValue;
        // change '.' to '-'
        value = value.replace('.', '-');
        // remove spaces whick are too more
        value = value.replace(/[ ]+/, ' ');
        // replace space with '-'
        value = value.replace(' ', '-');
        // change chinese to pin yin
        value = chinese2pinyin({ cn: value, result: 'F', remainSpecial: true });
        // change all the characters to lower case
        value = value.toLowerCase();

        // calculate id
        let id = `h${level}-`;
        for (let i = 0; i < value.length; i++) {
            if (value[i].match(/[0-9a-zA-Z-]/)) id += value[i];
        }

        // set anchors
        if (!this.state.anchorsLock) this.anchors.push({
            value: originValue,
            to: id,
            level: level
        });

        // return render result
        switch (level) {
            default:
            case 1:
                return (<h1 id={id}>{children.map(child => child.render)}</h1>);
            case 2:
                return (<h2 id={id}>{children.map(child => child.render)}</h2>);
            case 3:
                return (<h3 id={id}>{children.map(child => child.render)}</h3>);
            case 4:
                return (<h4 id={id}>{children.map(child => child.render)}</h4>);
            case 5:
                return (<h5 id={id}>{children.map(child => child.render)}</h5>);
            case 6:
                return (<h6 id={id}>{children.map(child => child.render)}</h6>);
        }
    };

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
     * 空格迭代映射行数
     * @param {number} temp
     * @param {number} key
     * @returns {*} 渲染结果
     */
    spacesIterationMapFunc = (temp, key) => {
        return (<span key={key}>&nbsp;&nbsp;</span>);
    };

    /**
     * map function for render labels in description block
     * @param {{key: number, name: string}} label label object in every map time
     * @param {number} key key auto added in map function
     */
    descriptionLabelsMapFunc = (label, key) => {
        if (key === this.state.labels.length - 1) {
            return (
                <span key={key}>
                    <Link
                        to={`/label/${label.key}`}
                        className={'color-grey text-decoration-none'}>
                        #{label.name}
                    </Link>
                </span>
            );
        }
        return (
            <span key={key}>
                <Link
                    to={`/label/${label.key}`}
                    className={'color-grey text-decoration-none'}>
                    #{label.name}
                </Link>
                &nbsp;
                </span>
        );
    };

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 页头布局
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

        // 文章描述行
        const postDescriptionRow = (
            <Row className={'bg-color-main mt-md'}>
                <Col
                    xs={{ offset: 0, span: 0 }}
                    sm={{ offset: 0, span: 0 }}
                    md={{ offset: 0, span: 0 }}
                    lg={{ offset: 0, span: 24 }}>
                    <div className={'font-size-xl mt-md'}>{this.state.title}</div>
                    <div className={'font-size-xs mt-sm color-grey'}>
                        <span><Icon type={'clock-circle-o'}/>&nbsp;{this.state.date}</span>
                        <span className={'ml-md'}>
                            {this.state.labels.map(this.descriptionLabelsMapFunc)}
                        </span>
                    </div>
                    <Divider/>
                </Col>
                <Col
                    xs={{ offset: 0, span: 24 }}
                    sm={{ offset: 0, span: 24 }}
                    md={{ offset: 0, span: 24 }}
                    lg={{ offset: 0, span: 0 }}>
                    <div className={'font-size-xl mt-md text-align-center'}>let和const</div>
                    <div className={'font-size-xs mt-sm color-grey text-align-center'}>
                        <span><Icon type={'clock-circle-o'}/>&nbsp;2018-10-2</span>
                    </div>
                    <Divider/>
                </Col>
            </Row>
        );

        // 文章内容
        const postBody = (
            <div>
                <ReactMarkdown
                    className={'markdown-body mt-lg'}
                    source={this.state.body}
                    renderers={{
                        heading: this.markdownHeadingRender,
                        code: this.markdownCodeRender,
                        link: this.markdownLinkRender,
                        linkReference: this.markdownLinkRender
                    }}/>
                <Divider/>
            </div>
        );

        // 锚点块
        const anchorBlock = (
            <Anchor offsetTop={61} className={'bg-color-main mt-lg'}>
                {this.state.anchors.map((anchor, key) => {
                    let spacesIteration = [];
                    for (let i = 0; i < anchor.level - 1; i++) {
                        spacesIteration.push(i);
                    }
                    return (
                        <Anchor.Link
                            key={key}
                            href={`${this.url}#${anchor.to}`}
                            title={
                                <span>
                                    {spacesIteration.map(this.spacesIterationMapFunc)}
                                    {anchor.value}
                                </span>
                            }/>
                    );
                })}
            </Anchor>
        );

        // 主内容行
        const mainContextRow = (
            <Row>
                <Col
                    xs={{ offset: 0, span: 24 }}
                    sm={{ offset: 0, span: 24 }}
                    md={{ offset: 0, span: 24 }}
                    lg={{ offset: 2, span: 14 }}>
                    {postDescriptionRow}
                    {postBody}
                    <CommentBlockList
                        login={this.state.userLogin}
                        user={this.state.userInfo}
                        comments={[{
                            user: {
                                type: 'local',
                                nickname: 'Kindem'
                            },
                            body: '测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论'
                        }, {
                            user: {
                                type: 'local',
                                nickname: 'Kindem'
                            },
                            body: '测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论'
                        }, {
                            user: {
                                type: 'local',
                                nickname: 'Kindem'
                            },
                            body: '测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论'
                        }, {
                            user: {
                                type: 'local',
                                nickname: 'Kindem'
                            },
                            body: '测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论测试评论'
                        }]}/>
                </Col>
                <Col
                    xs={{ offset: 0, span: 0 }}
                    sm={{ offset: 0, span: 0 }}
                    md={{ offset: 0, span: 0 }}
                    lg={{ offset: 2, span: 4 }}>
                    {anchorBlock}
                </Col>
            </Row>
        );

        // 页面内容布局
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

        // 页脚布局
        const footerLayout = (
            <Footer className={'mt-lg'}/>
        );

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
