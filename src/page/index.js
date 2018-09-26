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
import requestConfig from '../config/request';
import mainConfig from '../config/main';
import { Log } from '../tool/log';
import navHeaderBgImg from '../img/header-bg.jpg';

/**
 * 首页组件 - /
 */
export class IndexPage extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
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
                if (mainConfig.devMode) Log.dev('get /index');
                this.setState({
                    blocks: response.data
                });
            })
            .catch((err) => {
                if (mainConfig.devMode) Log.devError('get /index', err);
            });
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染函数
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
