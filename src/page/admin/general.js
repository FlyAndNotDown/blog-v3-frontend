/**
 * /page/admin/general.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Divider } from 'antd';

export class AdminGeneralPage extends React.Component {

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
            <KLayout>
                <Row className={'mt-md'}>
                    <Col
                        xs={{ offset: 1, span: 22 }}
                        sm={{ offset: 1, span: 22 }}
                        md={{ offset: 2, span: 20 }}
                        lg={{ offset: 4, span: 16 }}
                        xl={{ offset: 4, span: 16 }}
                        xxl={{ offset: 4, span: 16 }}>
                        <div className={'color-black font-size-lg'}>总览</div>
                        <div className={'color-second font-size-sm'}>欢迎您 Kindem</div>
                        <Divider/>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
