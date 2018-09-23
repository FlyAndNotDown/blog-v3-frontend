import React from 'react';
import { Row, Col, Divider } from 'antd';
import { PostBlock } from "./block/post-block";

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
                    <PostBlock/>
                    <Divider/>
                    <PostBlock/>
                    <Divider/>
                </Col>
            </Row>
        );
    }

}