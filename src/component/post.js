/**
 * /component/post.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Spin } from 'antd';
import axios from 'axios';
import { commonUrlPrefix } from '../config/request';
import requestConfig from '../config/request';
import mainConfig from '../config/main';

/**
 * 文章组件
 * @property {number} key 文章的键
 */
export class Post extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            title: null,

            loaded: false
        };
    }

    /**
     * componentDidMount 生命周期函数
     */
    componentDidMount() {
        // 发送请求获取数据
        axios
            .get(requestConfig.post)
            .then((response) => {
                if (mainConfig.devMode)
                    Log.dev(`get ${commonUrlPrefix}/post OK`);
                this.setState({
                    response.data
                });
            })
            .catch((err) => {
                if (mainConfig.devMode)
                    Log.devError(`get ${commonUrlPrefix}/post`, err);
            });
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return this.state.loaded ? (
            <Row>
                <Col>

                </Col>
            </Row>
        ) : null;
    }

}
