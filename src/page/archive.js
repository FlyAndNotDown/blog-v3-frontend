/**
 * /page/archive.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { NavHeader } from '../component/nav-header';
import navHeaderBgImg from '../img/header-bg-2.png';
import { Row, Col } from 'antd';

/**
 * 归档页面组件
 * @constructor
 */
export class ArchivePage extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * 渲染函数
     * @returns {*} 渲染结果
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
                        xl={{ offset: 3, span: 18 }}
                        xxl={{ offset: 5, span: 14 }}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

        // return the render result
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}>
                <NavHeader bgImg={navHeaderBgImg} content={navHeaderContent}/>
                {mainLayout}
            </KLayout>
        );
    }

}
