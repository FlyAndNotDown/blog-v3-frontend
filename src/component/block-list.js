import React from 'react';
import { Row, Col, Divider, Pagination } from 'antd';
import { PostBlock } from "./block/post-block";
import { EmotionBlock } from "./block/emotion-block";

/**
 * BlockList 块列表
 */
export class BlockList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Row className={'w-block-list m-0-auto'}>
                <Col>
                    <PostBlock/>
                    <Divider/>
                    <EmotionBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>
                    <EmotionBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>

                    <div className={'text-align-center'}>
                        <Pagination size={'small'} total={'100'} onChange={() => {}}/>
                    </div>
                </Col>
            </Row>
        );
    }

}