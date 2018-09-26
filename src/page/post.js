/**
 * /page/post.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { NavBar } from '../component/nav-bar';
import { Footer } from '../component/footer';
import { Row, Col } from 'antd';

/**
 * 文章页面 - /post/:postId
 */
export class PostPage extends React.Component {

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
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <KLayout colorMode={KLayout.COLOR_MODE_NONE}>
                    <NavBar active={true}/>
                </KLayout>
                <KLayout>
                    <Row>
                        <Col
                            xs={{ offset: 1, span: 22 }}
                            sm={{ offset: 1, span: 22 }}
                            md={{ offset: 2, span: 20 }}
                            lg={{ offset: 2, span: 20 }}
                            xl={{ offset: 3, span: 18 }}
                            xxl={{ offset: 4, span: 16 }}>
                            <Row>
                                <Col
                                    xs={{ offset: 0, span: 24 }}
                                    sm={{ offset: 0, span: 24 }}
                                    md={{ offset: 0, span: 24 }}
                                    lg={{ offset: 0, span: 16 }}>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                </Col>
                                <Col
                                    xs={{ offset: 0, span: 0 }}
                                    sm={{ offset: 0, span: 0 }}
                                    md={{ offset: 0, span: 0 }}
                                    lg={{ offset: 0, span: 8 }}>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </KLayout>
                <Footer/>
            </KLayout>
        );
    }

}
