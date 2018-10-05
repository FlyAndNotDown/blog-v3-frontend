/**
 * /component/gadget/admin-icon-gadget.js
 * @author John Kindem
 */

import React from 'react';
import { Icon, Row, Col } from 'antd';

/**
 * 管理员小图标挂件
 * @constructor
 * @property {string} iconType 图标类型
 * @property {string} iconColor 图标颜色
 * @property {string} title 标题
 * @property {string} content 内容
 */
export class AdminIconGadget extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
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
        let iconDiv = (
            <div className={'text-align-center font-size-xxl color-second'}>
                {this.props.iconColor ? (
                    <Icon type={this.props.iconType} theme={'twoTone'} twoToneColor={this.props.iconColor}/>
                ) : (
                    <Icon type={this.props.iconType}/>
                )}
            </div>
        );

        // 标题 div
        let titleDiv = (
            <div className={'text-align-center font-size-sm color-second'}>
                {this.props.title}
            </div>
        );

        // 内容 div
        let contentDiv = (
            <div className={'text-align-center font-size-xs color-second'}>
                {this.props.content}
            </div>
        );

        return (
            <Row>
                <Col>
                    {iconDiv}
                    {titleDiv}
                    {contentDiv}
                </Col>
            </Row>
        );
    }

}
