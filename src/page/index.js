import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { NavHeader } from "../component/nav-header";
import { BlockList } from "../component/block-list";
import { Row, Col } from "antd";

/**
 * IndexPage 页面组件 - /
 */
export class IndexPage extends React.Component {

    constructor(props) {

        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {};

    }

    render() {
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                <NavHeader/>
                <KLayout
                    colorMode={KLayout.COLOR_MODE_MAIN}
                    className={'z-index-1 p-xl'} style={{ height: '1000px' }}>
                    <Row className={'display-flex'}>
                        <Col
                            className={'m-0-auto'}
                            xs={{ span: 0 }}
                            sm={{ span: 0 }}
                            md={{ span: 0 }}
                            lg={{ span: 14 }}>
                            <BlockList/>
                        </Col>
                    </Row>
                </KLayout>
            </KLayout>
        );
    }

}