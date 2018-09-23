import React from 'react';
import { Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";
import { Link } from 'react-router-dom';
import { KIcon } from "./tool/k-icon";

/**
 * Footer 页脚组件
 */
export class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}
                className={'z-index-1'}>
                <Row className={'m-xl p-xl'}>
                    <Col className={'text-align-center'}>
                        <div className={'font-size-xl mb-md'}>
                            <Link to={'#'}>
                                <KIcon type={'k-github'}/>
                            </Link>
                            &nbsp;
                            <Link to={'#'}>
                                <KIcon type={'k-zhihu'}/>
                            </Link>
                            &nbsp;
                            <Link to={'#'}>
                                <KIcon type={'k-jianshu'}/>
                            </Link>
                            &nbsp;
                            <Link to={'#'}>
                                <KIcon type={'k-juejin'}/>
                            </Link>
                            &nbsp;
                            <Link to={'#'}>
                                <KIcon type={'k-sf'}/>
                            </Link>
                            &nbsp;
                            <Link to={'#'}>
                                <KIcon type={'k-email'}/>
                            </Link>
                            &nbsp;
                            <Link to={'#'}>
                                <KIcon type={'k-money'}/>
                            </Link>
                        </div>
                        <div className={'font-size-xs'}>
                            Theme By
                            <Link to={'#'} className={'color-text'} id={'emoji-red-heart'}>
                                <span role={'img'} aria-labelledby={'red-heart'}>❤️</span>
                                Blog-V3-Frontend
                            </Link>
                        </div>
                        <div className={'font-size-xs'}>
                            Framework By
                            <Link to={'#'} className={'color-text'} id={'emoji-ant'}>
                                <span role={'img'} aria-labelledby={'ant'}>🐜</span>
                                Ant-Design
                            </Link>
                        </div>
                        <div>@2017 Copyright kindemh.cn</div>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}