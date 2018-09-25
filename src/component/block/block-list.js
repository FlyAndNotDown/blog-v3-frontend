/**
 * /component/block/block-list.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Divider, Pagination } from 'antd';
import { PostBlock } from "./post-block";
import { EmotionBlock } from "./emotion-block";

/**
 * 块列表
 * @props {array} blocks 块数组
 *  @member {object} postBlock 文章块对象
 *      @member {string} type 块对象类型
 *      @member {string} title 标题
 *      @member {string} description 描述
 *      @member {number} key 文章键
 *      @member {string} date 日期
 *      @member {array} labels 标签
 *  @member {object} emotionBlock 说说块对象
 *      @member {string} type 块对象类型
 *      @member {string} context 说说内容
 *      @member {string} date 日期
 * @props {function} onPageChange 当分页改变的回调
 */
export class BlockList extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return (
            <Row className={'w-block-list m-0-auto'}>
                <Col>
                    {this.props.blocks.map((block, key) => {
                        switch (block.type) {
                            case 'post':
                                return (
                                    <div>
                                        <PostBlock
                                            key={block.key}
                                            title={block.title}
                                            description={block.description}
                                            date={block.date}
                                            labels={block.labels}/>
                                        <Divider/>
                                    </div>
                                );
                            case 'emotion':
                                return (
                                    <div>
                                        <EmotionBlock
                                            context={block.context}
                                            date={block.date}/>
                                        <Divider/>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}

                    <div className={'text-align-center mt-lg'}>
                        <Pagination size={'small'} total={100} onChange={(page) => {
                            this.props.onPageChange(page);
                        }}/>
                    </div>
                </Col>
            </Row>
        );
    }

}
