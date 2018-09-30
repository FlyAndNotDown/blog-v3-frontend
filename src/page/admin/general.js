/**
 * /page/admin/general.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Divider, Icon } from 'antd';
import { Link } from 'react-router-dom';

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
                <Row>
                    <Col
                        className={'w-100 h-100vh'}
                        xs={{ offset: 0, span: 24 }}
                        sm={{ offset: 0, span: 24 }}
                        md={{ offset: 0, span: 24 }}
                        lg={{ offset: 0, span: 0 }}
                        xl={{ offset: 0, span: 0 }}
                        xxl={{ offset: 0, span: 0 }}>
                        <Row
                            className={'w-100 h-100'}
                            type={'flex'}
                            align={'middle'}
                            justify={'center'}>
                            <Col>
                                <div className={'text-align-center font-size-xxl'}>
                                    <Icon type={'chrome'} spin/>
                                </div>
                                <div className={'color-second font-size-md text-align-center'}>
                                    请在PC端登录
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        className={'mt-md'}
                        xs={{ offset: 0, span: 0 }}
                        sm={{ offset: 0, span: 0 }}
                        md={{ offset: 0, span: 0 }}
                        lg={{ offset: 4, span: 16 }}
                        xl={{ offset: 4, span: 16 }}
                        xxl={{ offset: 4, span: 16 }}>
                        <div className={'font-size-xxl'}>
                            <Link className={'color-black text-decoration-none'} to={'#'}>总览</Link>
                        </div>
                        <div className={'color-second font-size-sm'}>欢迎您 管理员</div>
                        <Divider/>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
