/**
 * /page/index.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { NavHeader } from "../component/nav-header";
import { BlockList } from "../component/block/block-list";
import { Footer } from "../component/footer";
import { Row, Col, message, Spin } from 'antd';
import axios from 'axios';
import requestConfig from '../config/request';
import { Log } from '../tool/log';
import navHeaderBgImg from '../img/header-bg.jpg';
import optionConfig from '../config/option';

/**
 * 首页组件
 * @constructor
 */
export class IndexPage extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {
            posts: [],

            totalPage: 0,
            currentPage: 1,

            loadDown: false
        };
    }

    /**
     * 组件加载生命周期函数
     */
    async componentDidMount() {
        // 发送请求获取文章
        let response;
        let data;

        try {
            response = await axios.get(requestConfig.post, {
                params: {
                    type: 'summary',
                    start: 0,
                    length: optionConfig.postPerPage
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.post}`, e);
            return message.error('尝试获取博客文章时出错，请刷新重试');
        }

        Log.dev(`get ${requestConfig.post} OK`);
        response = response || {};
        data = response.data || {};

        let posts = data.posts || [];

        // do a request to get the count of all page
        try {
            response = await axios.get(requestConfig.post, {
                params: {
                    type: 'count'
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig}`, e);
            return message.error('尝试获取文章总数时出错，请刷新重试');
        }

        Log.dev(`get ${requestConfig.post} OK`);
        response = response || {};
        data = response.data || {};

        let count = data.count || null;

        this.setState({
            posts: [posts],
            totalPage: Math.ceil(count / optionConfig.postPerPage),
            loadDown: true
        });
    }

    /**
     * callback when the index page change
     * @param {number} page the page callback given
     */
    onPageChange = async (page) => {
        // if need no update the data
        if (page <= this.state.posts.length) {
            return this.setState({
                currentPage: page
            });
        }
        let newPosts = [];
        for (let i = 0; i < this.state.posts.length; i++) {
            newPosts.push(this.state.posts[i]);
        }
        // if need update the data
        for (let i = newPosts.length; i < page; i++) {
            let postsInLastPage = newPosts[newPosts.length - 1];
            // do the request to get posts data
            let response;
            let data;
            try {
                response = await axios.get(requestConfig.post, {
                    params: {
                        type: 'summary',
                        start: postsInLastPage[postsInLastPage.length - 1].key,
                        length: optionConfig.postPerPage
                    }
                });
            } catch (e) {
                Log.log(`get ${requestConfig.post}`, e);
                return message.error('请求文章数据时遇到错误，请刷新重试');
            }

            response = response || {};
            data = response.data || {};

            newPosts.push(data.posts || []);
        }

        this.setState({
            posts: newPosts,
            currentPage: page
        });
    };

    /**
     * 渲染函数
     * @returns {*} 渲染函数
     */
    render() {
        // 加载中布局
        const loadingLayout = (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <div className={'h-40vh'}></div>
                <Spin/>
            </KLayout>
        );

        // 主布局
        const bodyLayout = (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}
                className={'z-index-1 p-xl'}>
                <Row>
                    <Col
                        xs={{ offset: 1, span: 22 }}
                        sm={{ offset: 1, span: 22 }}
                        md={{ offset: 2, span: 20 }}
                        lg={{ offset: 2, span: 20 }}
                        xl={{ offset: 3, span: 18 }}
                        xxl={{ offset: 5, span: 14 }}>
                        <BlockList
                            posts={this.state.posts[this.state.currentPage - 1]}
                            page={this.state.totalPage}
                            onPageChange={this.onPageChange}/>
                    </Col>
                </Row>
            </KLayout>
        );

        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                {this.state.loadDown && (<NavHeader bgImg={navHeaderBgImg}/>)}
                {this.state.loadDown ? (bodyLayout) : (loadingLayout)}
                {this.state.loadDown && (<Footer/>)}
            </KLayout>
        );
    }

}
