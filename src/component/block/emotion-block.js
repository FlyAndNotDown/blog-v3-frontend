/**
 * /component/block/emotion-block.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from "react-router-dom";

/**
 * 说说块组件
 * @constructor
 * @property {string} context 说说内容
 * @property {string} date 说说日期
 */
export class EmotionBlock extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 图标 div
        const iconDiv = (
            <div className={'text-align-center font-size-lg color-black'}>
                <Icon type={'message'}/>
            </div>
        );

        // 说说内容 div
        let contextDiv = (
            <div className={'text-align-center font-size-xs mt-sm'}>
                {this.props.context}
            </div>
        );

        // 日期 span
        let dateSpan = (
            <span className={'font-size-xs mt-sm'}>
                <Icon type={'clock-circle-o'}/>
                <span className={'pl-xs pr-xs'}>{this.props.date}</span>
            </span>
        );

        // 标签 span
        let labelSpan = (
            <span className={'font-size-xs mt-sm'}>
                <Link to={'/emotions'} className={'color-text'}>#说说</Link>
            </span>
        );

        // 附加栏 div
        let additionalDiv = (
            <div className={'text-align-center mt-xs'}>
                {dateSpan}
                {labelSpan}
            </div>
        );

        return (
            <Row className={'mt-md'}>
                <Col>
                    {iconDiv}
                    {contextDiv}
                    {additionalDiv}
                </Col>
            </Row>
        );
    }

}
