/**
 * /page/post.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { NavBar } from '../component/nav-bar';
import { Footer } from '../component/footer';
import { Row, Col, Affix, Divider, Icon, Anchor, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';
import requestConfig from '../config/request';
import { Log } from '../tool/log';
import mainConfig from '../config/main';

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
            time: '',
            labels: [],
            body: ''
        };

        // url
        this.url = `/#${this.props.history.location.pathname}`;

        // 锚点
        this.anchors = [];
    }

    /**
     * 组件加载生命周期
     */
    componentDidMount() {
        // TODO 发送请求获取文章
        axios
            .get(requestConfig.post, {
                params: {
                    id: this.props.match.params.postId
                }
            })
            .then(response => {
                // 日志
                if (mainConfig.devMode) Log.dev(`get ${requestConfig.post} OK`);
                // 获取数据
                let data = response.data || {};
                this.setState({
                    title: data.title || '',
                    time: data.time || '',
                    labels: data.labels || [],
                    body: data.body || ''
                });
            })
            .catch(error => {
                if (mainConfig.devMode) Log.dev(`get ${requestConfig.post}`, error);
            });

        // 延迟加载锚点，防止超出 state 更新最大深度
        setTimeout(() => {
            this.setState({
                anchors: this.anchors,
                anchorsLock: true
            });
        }, 100);
    }

    /**
     * Markdown 标题渲染函数
     * @param {Object} object 解析对象
     * @returns {*} 渲染结果
     */
    markdownHeadingRender = object => {
        let level = object.level;
        let value = object.children[0];

        // 将多个空格全部变成一个空格
        value = value.replace(/[ ]+/, ' ');
        // 将空格转换成 -
        value = value.replace(' ', '-');
        // 全部转换成小写
        value = value.toLowerCase();

        let id = `h${level}-`;
        for (let i = 0; i < value.length; i++) {
            if (value[i].match(/[0-9a-zA-Z-]/)) id += value[i];
        }

        // 设置锚点
        if (!this.state.anchorsLock) this.anchors.push({
            value: object.children[0],
            to: id,
            level: level
        });

        // 返回渲染结果
        switch (level) {
            default:
            case 1:
                return (<h1 id={id}>{object.children[0]}</h1>);
            case 2:
                return (<h2 id={id}>{object.children[0]}</h2>);
            case 3:
                return (<h3 id={id}>{object.children[0]}</h3>);
            case 4:
                return (<h4 id={id}>{object.children[0]}</h4>);
            case 5:
                return (<h5 id={id}>{object.children[0]}</h5>);
            case 6:
                return (<h6 id={id}>{object.children[0]}</h6>);
        }
    };

    /**
     * Markdown 代码渲染函数
     * @param {Object} object 解析对象
     * @returns {*} 渲染结果
     */
    markdownCodeRender = object => {
        return (
            <SyntaxHighlighter
                language={object.language}>
                {object.value}
            </SyntaxHighlighter>
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
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        return (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <KLayout colorMode={KLayout.COLOR_MODE_NONE}>
                    <Affix offsetTop={0}>
                        <NavBar active={true}/>
                    </Affix>
                </KLayout>
                <KLayout>
                    <Row>
                        <Col
                            xs={{ offset: 1, span: 22 }}
                            sm={{ offset: 1, span: 22 }}
                            md={{ offset: 2, span: 20 }}
                            lg={{ offset: 2, span: 20 }}
                            xl={{ offset: 3, span: 18 }}
                            xxl={{ offset: 4, span: 16 }}>
                            <Row>
                                <Col
                                    xs={{ offset: 0, span: 24 }}
                                    sm={{ offset: 0, span: 24 }}
                                    md={{ offset: 0, span: 24 }}
                                    lg={{ offset: 2, span: 14 }}>
                                    <Row className={'bg-color-main mt-md'}>
                                        <Col
                                            xs={{ offset: 0, span: 0 }}
                                            sm={{ offset: 0, span: 0 }}
                                            md={{ offset: 0, span: 0 }}
                                            lg={{ offset: 0, span: 24 }}>
                                            <div className={'font-size-lg mt-md'}>{this.state.title}</div>
                                            <div className={'font-size-xs mt-sm color-grey'}>
                                                <span><Icon type={'clock-circle-o'}/>&nbsp;{this.state.time}</span>
                                                <span className={'ml-md'}>
                                                    {this.state.labels.map((label, key) => {
                                                        if (key === this.state.labels.length - 1) {
                                                            return (
                                                                <span key={key}>
                                                                    <Link
                                                                        to={`/label/${label.key}`}
                                                                        className={'color-grey text-decoration-none'}>
                                                                        {label.name}
                                                                    </Link>
                                                                </span>
                                                            );
                                                        }
                                                        return (
                                                            <span key={key}>
                                                                <Link
                                                                    to={`/label/${label.key}`}
                                                                    className={'color-grey text-decoration-none'}>
                                                                    {label.name}
                                                                </Link>
                                                                &nbsp;
                                                            </span>
                                                        );
                                                    })}
                                                </span>
                                            </div>
                                            <Divider/>
                                        </Col>
                                        <Col
                                            xs={{ offset: 0, span: 24 }}
                                            sm={{ offset: 0, span: 24 }}
                                            md={{ offset: 0, span: 24 }}
                                            lg={{ offset: 0, span: 0 }}>
                                            <div className={'font-size-lg mt-md text-align-center'}>let和const</div>
                                            <div className={'font-size-xs mt-sm color-grey text-align-center'}>
                                                <span><Icon type={'clock-circle-o'}/>&nbsp;2018-10-2</span>
                                            </div>
                                            <Divider/>
                                        </Col>
                                    </Row>
                                    <ReactMarkdown
                                        className={'markdown-body mt-lg'}
                                        source={this.state.body}
                                        renderers={{
                                            heading: this.markdownHeadingRender,
                                            code: this.markdownCodeRender,
                                            link: this.markdownLinkRender,
                                            linkReference: this.markdownLinkRender
                                        }}/>
                                </Col>
                                <Col
                                    xs={{ offset: 0, span: 0 }}
                                    sm={{ offset: 0, span: 0 }}
                                    md={{ offset: 0, span: 0 }}
                                    lg={{ offset: 2, span: 4 }}>
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
                                                            {spacesIteration.map((temp, key) => {
                                                                return (<span key={key}>&nbsp;&nbsp;</span>);
                                                            })}
                                                            {anchor.value}
                                                        </span>
                                                    }/>
                                            );
                                        })}
                                    </Anchor>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div>
                        <BackTop/>
                    </div>
                </KLayout>
                <Footer className={'mt-lg'}/>
            </KLayout>
        );
    }

}
