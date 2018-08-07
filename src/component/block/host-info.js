import React from 'react';
import { Row, Col, Avatar, Divider, Icon } from 'antd';
import { CssTool } from "../../tool/css";
import avatar from '../../img/avatar.jpg';
import { Link } from 'react-router-dom';

/**
 * HostInfo - 主人信息块
 * @props hostName: 主人名字
 * @props description: 描述
 */
export class HostInfo extends React.Component {

    static defaultClassName = 'w-200px';

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <Row
                className={CssTool.combClassName(HostInfo.defaultClassName, this.props.className)}>
                <Col>
                    <div className={'text-align-center'}>
                        <Avatar
                            src={avatar}
                            shape={'square'}
                            className={'w-100 h-auto'}/>
                    </div>
                    <div className={'color-primary text-align-center font-size-30px mt-10px font-weight-bold'}>
                        {this.props.hostName}
                    </div>
                    <div className={'text-align-center font-size-20px pt-0 color-grey font-weight-bold'}>
                        {this.props.description}
                    </div>
                    <Divider/>
                    <div className={'text-align-center font-size-20px'}>
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            作品
                        </Link>
                        &nbsp;|&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            计划
                        </Link>
                        &nbsp;|&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            关于我
                        </Link>
                    </div>
                    <Divider/>
                    <div className={'text-align-center font-size-20px'}>
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            归档
                        </Link>
                        &nbsp;|&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            标签
                        </Link>
                        &nbsp;|&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            时间轴
                        </Link>
                    </div>
                    <Divider/>
                    <div className={'text-align-center font-size-20px'}>
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            留言
                        </Link>
                        &nbsp;|&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            朋友
                        </Link>
                    </div>
                    <Divider/>
                    <div className={'text-align-center font-size-30px'}>
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            <Icon type={'github'}/>
                        </Link>
                        &nbsp;&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            <Icon type={'mail'}/>
                        </Link>
                        &nbsp;&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            <Icon type={'zhihu'}/>
                        </Link>
                        &nbsp;&nbsp;
                        <Link to={'#'} className={'color-grey text-decoration-none'}>
                            <Icon type={'alipay-circle'}/>
                        </Link>
                    </div>
                </Col>
            </Row>
        );

    }

}