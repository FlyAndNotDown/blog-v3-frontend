/**
 * /page/post.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { NavBar } from '../component/nav-bar';
import { Footer } from '../component/footer';
import { Row, Col, Affix, Divider, Icon, Anchor } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';
import requestConfig from '../config/request';
import { Log } from '../tool/log';
import mainConfig from '../config/main';

/**
 * 文章页面 - /post/:postId
 */
export class PostPage extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            // TODO 利用这个 state
            anchorLinks: [],

            title: '',
            time: '',
            labels: [],
            body: ''
        };

        // url
        this.url = '';
    }

    /**
     * 组件加载生命周期
     */
    componentDidMount() {
        // 获取 url
        this.url = this.props.history.location;

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
    }

    /**
     * Markdown 标题渲染函数
     * @param {object} object 解析对象
     */
    markdownHeadingRender = (object) => {
        let level = object.level;
        let value = object.children[0];

        // 将多个空格全部变成一个空格
        value = value.replace(/[ ]+/, ' ');
        // 将空格转换成 -
        value = value.replace(' ', '-');
        // 全部转换成小写
        value = value.toLowerCase();

        let id = '';
        for (let i = 0; i < value.length; i++) {
            if (value[i].match(/[0-9a-zA-Z\-]/)) id += value[i];
        }

        // 返回渲染结果
        switch (level) {
            default:
            case 1:
                return (<h1 id={`h1-${id}`}>{object.children[0]}</h1>);
            case 2:
                return (<h2 id={`h2-${id}`}>{object.children[0]}</h2>);
            case 3:
                return (<h3 id={`h3-${id}`}>{object.children[0]}</h3>);
            case 4:
                return (<h4 id={`h4-${id}`}>{object.children[0]}</h4>);
            case 5:
                return (<h5 id={`h5-${id}`}>{object.children[0]}</h5>);
            case 6:
                return (<h6 id={`h6-${id}`}>{object.children[0]}</h6>);
        }
    };

    /**
     * Markdown 代码渲染函数
     * @param {object} object 解析对象
     */
    markdownCodeRender = (object) => {
        return (
            <SyntaxHighlighter
                language={object.language}>
                {object.value}
            </SyntaxHighlighter>
        );
    };

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
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
                                            code: this.markdownCodeRender
                                        }}/>
                                </Col>
                                <Col
                                    xs={{ offset: 0, span: 0 }}
                                    sm={{ offset: 0, span: 0 }}
                                    md={{ offset: 0, span: 0 }}
                                    lg={{ offset: 2, span: 4 }}>
                                    <Anchor offsetTop={61} className={'bg-color-main mt-lg'}>
                                        <Anchor.Link href={'/#/post/1#'} title="Basic demo"/>
                                    </Anchor>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </KLayout>
                    <Footer className={'mt-lg'}/>
            </KLayout>
        );
    }

}
