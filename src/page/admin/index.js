/**
 * /page/admin/index.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input } from 'antd';

/**
 * 管理员首页 - /admin
 */
export class AdminIndexPage extends React.Component {

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
            <KLayout
                className={'w-100 h-100vh'}
                colorMode={KLayout.COLOR_MODE_MAIN}>
                <Row
                    className={'w-100 h-100'}
                    type={'flex'}
                    align={'middle'}
                    justify={'center'}>
                    <Col
                        xs={20} sm={20} md={6}
                        lg={4} xl={4} xxl={4}>
                        <div className={'font-size-xl text-align-center'}>
                            <span role={'img'} aria-labelledby={'red-heart'}>💎</span>
                            管理员登录
                            <span role={'img'} aria-labelledby={'red-heart'}>💎</span>
                        </div>
                        <Form>
                            <Form.Item>
                                <Input/>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
