import React from 'react';
import { Affix, Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";

export class NavHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KLayout>
                <Affix offsetTop={1}>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Affix>
            </KLayout>
        );
    }

}