import React from 'react';
import { Affix, Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";

export class NavHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}
                className={'pt-md'}>
                <Affix
                    offsetTop={0}
                    onChange={(affixed) => {
                        console.log(affixed);
                    }}>
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                </Affix>
            </KLayout>
        );
    }

}