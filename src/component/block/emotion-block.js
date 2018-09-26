/**
 * /component/block/emotion-block.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from "react-router-dom";

/**
 * 说说块
 * @property {string} context 说说内容
 * @property {string} date 说说日期
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
                    <div className={'text-align-center font-size-xs mt-sm'}>
                        {this.props.context}
                    </div>
                    <div className={'text-align-center mt-xs'}>
                        <span className={'font-size-xs mt-sm'}>
                            <Icon type={'clock-circle-o'}/>
                            <span className={'pl-xs pr-xs'}>
                                {this.props.date}
                            </span>
                        </span>
                        <span className={'font-size-xs mt-sm'}>
                            <Link to={'/emotions'} className={'color-text'}>#说说</Link>
                        </span>
                    </div>
                </Col>
            </Row>
        );
    }

}
