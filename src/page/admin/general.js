/**
 * /page/admin/general.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../../component/tool/k-layout';
import { Row, Col, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AdminIconGadget } from '../../component/gadget/admin-icon-gadget';
import { DoItOnPC } from '../../component/gadget/do-it-on-pc';
import axios from 'axios';
import requestConfig from '../../config/request';
import { Log } from '../../tool/log';

/**
 * 管理员概览页面组件
 * @constructor
 */
export class AdminGeneralPage extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    /**
     * 组件加载生命周期函数
     */
    componentDidMount() {
        axios
            .get(requestConfig.adminLogin, {
                params: {
                    type: 'info'
                }
            })
            .then((response) => {
                Log.dev(`get ${requestConfig.adminLogin} OK`);
                // 如果用户没有登录
                if (!response.data.status) {
                    // 引导用户进行登录
                    return this.props.history.push('/admin');
                }
                // 如果用户已经登录，设置载入状态为已完成
                this.setState({
                    loaded: true
                });
            })
            .catch((error) => {
                Log.devError(`get ${requestConfig.adminLogin}`, error);
                // 如果发生错误了，赶出去
                this.props.history.push('/admin');
            });
        // TODO 获取管理员主页信息
    }

    /**
     * 新建文章按钮点击回调
     */
    onWritePostButtonClick = () => {
        this.props.history.push('/admin/post/new');
    };

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 在PC端登录提示块
        const doItOnPCBlock = (
            <Row
                className={'w-100 h-100'}
                type={'flex'}
                align={'middle'}
                justify={'center'}>
                <Col>
                    <DoItOnPC/>
                </Col>
            </Row>
        );

        // 欢迎块
        const welcomeBlock = (
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
        );

        // 今日概况块
        const todaySummaryBlock = (
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
        );

        // 勤奋指数块
        const hardWorkValueBlock = (
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
        );

        // 安全指数块
        const securityValueBlock = (
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
        );

        // 文章管理块
        const postManageBlock = (
            <div>
                <div className={'font-size-sm'}>
                    <Link className={'color-black text-decoration-none'} to={'#'}>文章管理</Link>
                </div>
                <Row className={'mt-lg'}>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'plus-circle'}
                            iconColor={'#52c41a'}
                            title={'写文章'}
                            content={
                                <Button
                                    type={'primary'}
                                    onClick={this.onWritePostButtonClick}>
                                    启动
                                </Button>
                            }/>
                    </Col>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'file-text'}
                            title={'管理文章'}
                            content={<Button>启动</Button>}/>
                    </Col>
                </Row>
                <Divider/>
            </div>
        );

        // 评论管理块
        const commentManageBlock = (
            <div>
                <div className={'font-size-sm'}>
                    <Link className={'color-black text-decoration-none'} to={'#'}>评论管理</Link>
                </div>
                <Row className={'mt-lg'}>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'eye'}
                            iconColor={'#1890ff'}
                            title={'审核评论'}
                            content={<Button type={'primary'}>启动</Button>}/>
                    </Col>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'search'}
                            title={'未审核评论'}
                            content={12}/>
                    </Col>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'message'}
                            title={'管理评论'}
                            content={<Button>启动</Button>}/>
                    </Col>
                </Row>
                <Divider/>
            </div>
        );

        // 留言管理块
        const messageManageBlock = (
            <div>
                <div className={'font-size-sm'}>
                    <Link className={'color-black text-decoration-none'} to={'#'}>留言管理</Link>
                </div>
                <Row className={'mt-lg'}>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'eye'}
                            iconColor={'#1890ff'}
                            title={'审核留言'}
                            content={<Button type={'primary'}>启动</Button>}/>
                    </Col>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'search'}
                            title={'未审核留言'}
                            content={12}/>
                    </Col>
                    <Col span={8}>
                        <AdminIconGadget
                            iconType={'message'}
                            title={'管理留言'}
                            content={<Button>启动</Button>}/>
                    </Col>
                </Row>
                <Divider/>
            </div>
        );

        // TODO 标签管理
        // TODO 文件管理

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
                        {doItOnPCBlock}
                    </Col>
                    <Col
                        className={'mt-md'}
                        xs={{ offset: 0, span: 0 }}
                        sm={{ offset: 0, span: 0 }}
                        md={{ offset: 0, span: 0 }}
                        lg={{ offset: 4, span: 16 }}
                        xl={{ offset: 5, span: 14 }}
                        xxl={{ offset: 6, span: 12 }}>
                        {welcomeBlock}
                        {todaySummaryBlock}
                        {hardWorkValueBlock}
                        {securityValueBlock}
                        {postManageBlock}
                        {commentManageBlock}
                        {messageManageBlock}
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
