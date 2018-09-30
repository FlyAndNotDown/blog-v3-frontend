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
                        xl={{ offset: 5, span: 14 }}
                        xxl={{ offset: 6, span: 12 }}>
                        <div>
                            <div className={'font-size-xxl'}>
                                <Link className={'color-black text-decoration-none'} to={'#'}>总览</Link>
                            </div>
                            <div className={'color-second font-size-sm'}>
                                <span role={'img'} aria-labelledby={'happy-face'}>😀</span>
                                欢迎您 管理员
                            </div>
                            <Divider/>
                        </div>

                        <div>
                            <div className={'font-size-sm'}>
                                <Link className={'color-black text-decoration-none'} to={'#'}>今日概况</Link>
                            </div>
                            <Row className={'mt-lg'}>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'line-chart'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            今日点击量
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            1000
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'dot-chart'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            今日访问量
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            1000
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'message'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            今日评论
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            1000
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Divider/>
                        </div>

                        <div>
                            <div className={'font-size-sm'}>
                                <Link className={'color-black text-decoration-none'} to={'#'}>勤奋指数</Link>
                            </div>
                            <Row className={'mt-lg'}>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'file-done'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            本月博文数
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            5
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'smile'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            本月说说数
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            5
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'star'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            今年作品数
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            5
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Divider/>
                        </div>

                        <div>
                            <div className={'font-size-sm'}>
                                <Link className={'color-black text-decoration-none'} to={'#'}>安全指数</Link>
                            </div>
                            <Row className={'mt-lg'}>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'login'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            管理员账户数量
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            5
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'clock-circle-o'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            上次登录
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            2018-9-30
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div>
                                        <div className={'text-align-center font-size-xxl color-second'}>
                                            <Icon type={'warning'}/>
                                        </div>
                                        <div className={'text-align-center font-size-sm color-second'}>
                                            异地登录
                                        </div>
                                        <div className={'text-align-center font-size-xs color-second'}>
                                            无
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Divider/>
                        </div>

                        <div>
                            <div className={'font-size-sm'}>
                                <Link className={'color-black text-decoration-none'} to={'#'}>数据库管理</Link>
                            </div>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
