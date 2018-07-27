import React from 'react';
import { Row, Col } from 'antd';
import { Header } from "../component/nav/header";
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Nav } from "../component/nav/nav";

/**
 * 页面组件 - /
 */
export class IndexPage extends React.Component {

    render() {

        return (
            <BgColorNoneLayout>
                <Row>
                    <Col
                        xs={{
                            span: 0,
                            offset: 0
                        }}
                        sm={{
                            span: 0,
                            offset: 0
                        }}
                        md={{
                            span: 0,
                            offset: 0
                        }}
                        lg={{
                            span: 16,
                            offset: 4
                        }}
                        xl={{
                            span: 12,
                            offset: 6
                        }}>
                        <Header/>
                    </Col>
                </Row>
            </BgColorNoneLayout>
        );

    }

}