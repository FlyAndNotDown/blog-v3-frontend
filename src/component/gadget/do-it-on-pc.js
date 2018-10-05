/**
 * /component/gadget/do-it-on-pc.js
 * @author John Kindem
 */

import React from 'react';
import { Icon, Row, Col } from 'antd';

/**
 * 请在PC端登录小挂件
 * @constructor
 */
export class DoItOnPC extends React.Component {

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
            <div className={'text-align-center font-size-xxl'}>
                <Icon type={'chrome'} spin/>
            </div>
        );

        // 提示 div
        let tipDiv = (
            <div className={'color-second font-size-md text-align-center'}>
                请在PC端登录
            </div>
        );

        return (
            <Row>
                <Col>
                    {iconDiv}
                    {tipDiv}
                </Col>
            </Row>
        );
    }

}
