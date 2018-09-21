import React from 'react';
import { Row, Col } from 'antd';
import { PostBlock } from "./block/post-block";

export class BlockList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col>
                    <PostBlock/>
                </Col>
            </Row>
        );
    }

}