import React from 'react';
import { Post } from "./post";
import { Row, Col } from 'antd';
import { CssTool } from "../../tool/css";

export class PostList extends React.Component {

    static defaultClassName = '';

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <Row className={CssTool.combClassName(PostList.defaultClassName, this.props.className)}>
                <Col>
                    <Post
                        title={'你好世界'}/>
                </Col>
            </Row>
        );

    }

}