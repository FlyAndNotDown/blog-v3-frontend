/**
 * /component/block/emotion-block.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from "react-router-dom";

/**
 * 说说块
 */
export class EmotionBlock extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Row className={'mt-md'}>
                <Col>
                    <div className={'text-align-center font-size-lg color-black'}>
                        <Icon type={'message'}/>
                    </div>
                    <div className={'text-align-center font-size-xs'}>
                        失落到不行的一天，今天非常难受
                    </div>
                    <div className={'text-align-center'}>
                        <span className={'font-size-xs mt-sm'}>
                            <Icon type={'clock-circle-o'}/>
                            <span className={'pl-xs pr-xs'}>2018-9-21</span>
                        </span>
                        <span className={'font-size-xs mt-sm'}>
                            <Link to={'#'} className={'color-text'}>#说说</Link>
                        </span>
                    </div>
                </Col>
            </Row>
        );
    }

}
