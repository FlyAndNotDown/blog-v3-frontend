/**
 * /page/admin/index.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Form, Input, Icon, Button } from 'antd';

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

        this.state = {
            username: '',
            password: ''
        };
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
                        xs={20} sm={18} md={8}
                        lg={6} xl={6} xxl={4}>
                        <div className={'font-size-xl text-align-center'}>
                            <span role={'img'} aria-labelledby={'red-heart'}>🤣</span>
                            别攻击我
                        </div>
                        <Form className={'mt-lg'}>
                            <Form.Item>
                                <Input
                                    placeholder={'管理员账户'}
                                    prefix={<Icon type={'user'}/>}
                                    value={this.state.username}
                                    onChange={(e) => {
                                        this.setState({
                                            username: e.target.value
                                        });
                                    }}/>
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    type={'password'}
                                    placeholder={'密码'}
                                    prefix={<Icon type={'user'}/>}
                                    value={this.state.password}
                                    onChange={(e) => {
                                        this.setState({
                                            password: e.target.value
                                        });
                                    }}/>
                            </Form.Item>
                            <Form.Item>
                                <Button className={'float-left w-100'} type={'primary'}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
