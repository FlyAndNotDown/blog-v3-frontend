import React from 'react';
import { BgColorNoneLayout } from "../layout/bg-color-none-layout";
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';

/**
 * Footer - 页脚组件
 */
export class Footer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (
            <BgColorNoneLayout>
                <Row>
                    <Col>
                        <Divider/>
                        <div className={'text-align-center color-grey font-size-15px'}>
                            Theme&nbsp;by&nbsp;
                            <Link to={'#'} className={'color-grey text-decoration-none'}>
                                John Kindem
                            </Link>
                            .&nbsp;Star&nbsp;it&nbsp;on&nbsp;
                            <Link to={'#'} className={'color-grey text-decoration-none'}>
                                GitHub
                            </Link>
                        </div>
                        <div className={'text-align-center color-grey font-size-15px'}>
                            <Link to={'#'} className={'color-grey text-decoration-none'}>
                                Ant-Design
                            </Link>&nbsp;强力驱动
                        </div>
                        <div className={'text-align-center color-grey font-size-15px'}>
                            ©&nbsp;2018&nbsp;kindemh.cn
                        </div>
                        <br/>
                    </Col>
                </Row>
            </BgColorNoneLayout>
        );

    }

}