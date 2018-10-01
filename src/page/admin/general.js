/**
 * /page/admin/general.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Divider, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AdminIconGadget } from '../../component/gadget/admin-icon-gadget';

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
     * 组件加载生命周期函数
     */
    componentDidMount() {
        // TODO 校验管理员登录情况
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
                                    <AdminIconGadget
                                        iconType={'line-chart'}
                                        title={'今日点击量'}
                                        content={1000}/>
                                </Col>
                                <Col span={8}>
                                    <AdminIconGadget
                                        iconType={'dot-chart'}
                                        title={'今日访问量'}
                                        content={1000}/>
                                </Col>
                                <Col span={8}>
                                    <AdminIconGadget
                                        iconType={'message'}
                                        title={'今日评论'}
                                        content={1000}/>
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
                                    <AdminIconGadget
                                        iconType={'file-done'}
                                        title={'本月博文数'}
                                        content={5}/>
                                </Col>
                                <Col span={8}>
                                    <AdminIconGadget
                                        iconType={'smile'}
                                        title={'本月说说数'}
                                        content={5}/>
                                </Col>
                                <Col span={8}>
                                    <AdminIconGadget
                                        iconType={'star'}
                                        title={'今年作品数'}
                                        content={5}/>
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
                                    <AdminIconGadget
                                        iconType={'login'}
                                        title={'管理员账户数量'}
                                        content={5}/>
                                </Col>
                                <Col span={8}>
                                    <AdminIconGadget
                                        iconType={'clock-circle-o'}
                                        title={'上次登录'}
                                        content={'2018-9-30'}/>
                                </Col>
                                <Col span={8}>
                                    <AdminIconGadget
                                        iconType={'warning'}
                                        title={'异地登录'}
                                        content={'无'}/>
                                </Col>
                            </Row>
                            <Divider/>
                        </div>

                        <div>
                            <div className={'font-size-sm'}>
                                <Link className={'color-black text-decoration-none'} to={'#'}>文章管理</Link>
                            </div>
                            <Row className={'mt-lg'}>
                                <Col span={8}>
                                    <AdminIconGadget
                                        iconType={'file-text'}
                                        title={'文章总数'}
                                        content={<Button type={'primary'}>管理文章</Button>}/>
                                </Col>
                            </Row>
                            <Divider/>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
