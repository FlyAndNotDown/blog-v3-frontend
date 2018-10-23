/**
 * /component/block/block-list.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Divider, Pagination } from 'antd';
import { PostBlock } from "./post-block";

/**
 * 块列表组件
 * @constructor
 * @property {Array} posts 文章数组
 * * @member {Object} post 文章块对象
 * * * @member {string} type 块对象类型
 * * * @member {string} title 标题
 * * * @member {string} description 描述
 * * * @member {number} key 文章键
 * * * @member {string} date 日期
 * * * @member {Array} labels 标签
 */
export class BlockList extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * blocks 迭代映射函数
     * @param {Object} block 块对象
     * @param {number} key 迭代标识
     * @returns {*} 渲染结果
     */
    postsMapFunc = (post, key) => {
        return (
            <div key={key}>
                <PostBlock
                    postKey={post.key}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    labels={post.labels}/>
                <Divider/>
            </div>
        );
    };

    /**
     * 分页状态改变回调
     * @param {number} page 页数
     */
    onPageChange = (page) => {
        this.props.onPageChange(page);
    };

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 分页div
        const paginationDiv = (
            <div className={'text-align-center mt-lg'}>
                <Pagination size={'small'} total={100} onChange={this.onPageChange}/>
            </div>
        );

        return (
            <Row className={'w-block-list m-0-auto'}>
                <Col>
                    {this.props.posts.map(this.postsMapFunc)}
                    {paginationDiv}
                </Col>
            </Row>
        );
    }

}
