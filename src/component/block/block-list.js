/**
 * /component/block/block-list.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Divider, Pagination } from 'antd';
import { PostBlock } from "./post-block";
import { EmotionBlock } from "./emotion-block";

/**
 * 块列表组件
 * @constructor
 * @property {Array} blocks 块数组
 * * @member {Object} postBlock 文章块对象
 * * * @member {string} type 块对象类型
 * * * @member {string} title 标题
 * * * @member {string} description 描述
 * * * @member {number} key 文章键
 * * * @member {string} date 日期
 * * * @member {Array} labels 标签
 * * @member {Object} emotionBlock 说说块对象
 * * * @member {string} type 块对象类型
 * * * @member {string} context 说说内容
 * * * @member {string} date 日期
 * @property {function} onPageChange 当分页改变的回调
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
    blocksMapFunc = (block, key) => {
        switch (block.type) {
            case 'post':
                return (
                    <div key={key}>
                        <PostBlock
                            postKey={block.postKey}
                            title={block.title}
                            description={block.description}
                            date={block.date}
                            labels={block.labels}/>
                        <Divider/>
                    </div>
                );
            case 'emotion':
                return (
                    <div key={key}>
                        <EmotionBlock
                            context={block.context}
                            date={block.date}/>
                        <Divider/>
                    </div>
                );
            default:
                return null;
        }
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
        let paginationDiv = (
            <div className={'text-align-center mt-lg'}>
                <Pagination size={'small'} total={100} onChange={this.onPageChange}/>
            </div>
        );

        return (
            <Row className={'w-block-list m-0-auto'}>
                <Col>
                    {this.props.blocks.map(this.blocksMapFunc)}
                    {paginationDiv}
                </Col>
            </Row>
        );
    }

}
