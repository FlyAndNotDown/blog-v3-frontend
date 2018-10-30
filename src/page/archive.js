/**
 * /page/archive.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { Footer } from '../component/footer';
import { NavHeader } from '../component/nav-header';
import navHeaderBgImg from '../img/header-bg-2.png';
import { Row, Col, Spin, message } from 'antd';
import { ArchiveBlockList } from '../component/block/archive-block-list';
import axios from 'axios';
import { Log } from '../tool/log';
import requestConfig from '../config/request';
import mainConfig from '../config/main';

/**
 * ArchivePage
 * @constructor
 * @description the component of archive page
 */
export class ArchivePage extends React.Component {

    /**
     * constructor of component
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loadDown: false
        };
    }

    /**
     * a life function of React
     */
    async componentDidMount() {
        // do the request to get posts archive info
        let response;
        let data;

        // try to do the request
        try {
            response = await axios.get(requestConfig.post, {
                params: {
                    type: 'archive'
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.post}`, e);
            return message.error('获取归档数据失败，请刷新重试');
        }

        // log
        Log.dev(`get ${requestConfig.post} OK`);

        // deal the data
        response = response || {};
        data = response.data || {};

        // get the posts data
        let posts = data.posts || [];

        // if (mainConfig.devMode) { debugger; }

        // set it to state
        this.setState({
            posts: posts,
            loadDown: true
        });
    }

    /**
     * render function
     * @returns {*} result of render
     */
    render() {
        // main layout to show archive info
        const mainLayout = (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}
                className={'z-index-1 p-xl'}>
                <Row>
                    <Col
                        xs={{ offset: 1, span: 22 }}
                        sm={{ offset: 1, span: 22 }}
                        md={{ offset: 2, span: 20 }}
                        lg={{ offset: 2, span: 20 }}
                        xl={{ offset: 5, span: 14 }}
                        xxl={{ offset: 5, span: 14 }}>
                        <ArchiveBlockList
                            posts={this.state.posts}/>
                    </Col>
                </Row>
            </KLayout>
        );

        // nav header content
        const navHeaderContent = (
            <div>
                <div className={'font-size-xl color-white'}>历史是彷徨者的向导</div>
                <div className={'font-size-md color-white'}>History is the guide of a wandering man</div>
            </div>
        );

        // loading layout
        const loadingLayout = (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <div className={'h-40vh'}></div>
                <Spin/>
            </KLayout>
        );

        // return the render result
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}>
                {this.state.loadDown && (<NavHeader bgImg={navHeaderBgImg} content={navHeaderContent}/>)}
                {this.state.loadDown ? mainLayout : loadingLayout}
                {this.state.loadDown && (<Footer/>)}
            </KLayout>
        );
    }

}
