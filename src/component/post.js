/**
 * /component/post.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col } from 'antd';

/**
 * 文章组件
 */
export class Post extends React.Component {

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
            <Row>
                <Col>

                </Col>
            </Row>
        );
    }

}
