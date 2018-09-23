import React from 'react';
import { Row, Col, Icon } from 'antd';

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
                    <div className={'font-size-lg'}>测试标题</div>
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
                    <div className={'font-size-xs mt-sm float-left'}>
                        <Icon type={'clock-circle-o'}/>
                        <span className={'pl-xs pr-xs'}>2018-9-21</span>
                    </div>
                    <div className={'font-size-xs mt-sm float-right'}>
                        #标签 #标签 #标签
                    </div>
                </Col>
            </Row>
        );
    }

}