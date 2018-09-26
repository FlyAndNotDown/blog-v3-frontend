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
                        <Col>
                            
                        </Col>
                    </Row>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/>
                </KLayout>
                <Footer/>
            </KLayout>
        );
    }

}
