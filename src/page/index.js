/**
 * /page/index.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { NavHeader } from "../component/nav-header";
import { BlockList } from "../component/block/block-list";
import { Footer } from "../component/footer";
import { Row, Col } from 'antd';
import axios from 'axios';
import { commonUrlPrefix } from '../config/request';
import requestConfig from '../config/request';
import { Log } from '../tool/log';
import navHeaderBgImg from '../img/header-bg.jpg';

/**
 * 首页组件
 * @constructor
 */
export class IndexPage extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {
            blocks: []
        };
    }

    /**
     * 组件加载生命周期函数
     */
    componentDidMount() {
        axios
            .get(requestConfig.home)
            .then((response) => {
                // if (mainConfig.devMode) debugger;
                Log.dev(`get ${commonUrlPrefix}/home OK`);
                this.setState({
                    blocks: response.data.blocks || []
                });
            })
            .catch((err) => {
                Log.devError(`get ${commonUrlPrefix}/home`, err);
            });
        // TODO 发送请求验证分页参数是否正确，如果不正确跳转到 /error/404
    }

    /**
     * 渲染函数
     * @returns {*} 渲染函数
     */
    render() {
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                <NavHeader bgImg={navHeaderBgImg}/>
                <KLayout
                    colorMode={KLayout.COLOR_MODE_MAIN}
                    className={'z-index-1 p-xl'}>
                    <Row>
                        <Col
                            xs={{ offset: 1, span: 22 }}
                            sm={{ offset: 1, span: 22 }}
                            md={{ offset: 2, span: 20 }}
                            lg={{ offset: 2, span: 20 }}
                            xl={{ offset: 3, span: 18 }}
                            xxl={{ offset: 5, span: 14 }}>
                            <BlockList
                                blocks={this.state.blocks}
                                onPageChange={(page) => {
                                    // TODO
                                    console.log('page changed:', page);
                                }}/>
                        </Col>
                    </Row>
                </KLayout>
                <Footer/>
            </KLayout>
        );
    }

}
