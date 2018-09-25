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
                    <PostBlock
                        title={'测试标题'}
                        description={'测试描述'}
                        date={'2018-9-26'}
                        labels={[{
                            name: 'label',
                            key: '1'
                        }]}/>
                    <Divider/>
                    <EmotionBlock/>
                    <Divider/>

                    <div className={'text-align-center'}>
                        <Pagination size={'small'} total={100} onChange={() => {}}/>
                    </div>
                </Col>
            </Row>
        );
    }

}
