import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

/**
 * PostBlock 文章块
 */
export class PostBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Row className={'mt-md'}>
                <Col>
                    <Link className={'font-size-lg color-black'} to={'#'}>测试标题</Link>
                    <div className={'font-size-xs'}>
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                        测试概述测试概述测试概述测试概述测试概述
                    </div>
                    <div>
                        <span className={'font-size-xs mt-sm float-left'}>
                            <Icon type={'clock-circle-o'}/>
                            <span className={'pl-xs pr-xs'}>2018-9-21</span>
                        </span>
                            <span className={'font-size-xs mt-sm float-right'}>
                            <Link to={'#'} className={'color-text'}>#标签</Link>&nbsp;
                                <Link to={'#'} className={'color-text'}>#标签</Link>&nbsp;
                        </span>
                    </div>
                </Col>
            </Row>
        );
    }

}