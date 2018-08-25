import React from 'react';
import { KLayout } from "./k-layout";
import { Affix, Row, Col } from 'antd';

/**
 * Nav 导航栏组件
 */
export class Nav extends React.Component {

    constructor(props) {

        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {};

    }

    render() {

        return (
            <Affix offsetTop={0}>
                <KLayout>
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                </KLayout>
            </Affix>
        );

    }

}