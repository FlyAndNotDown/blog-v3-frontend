/**
 * /page/error-404.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 404页面组件
 * @constructor
 */
export class Error404Page extends React.Component {

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
        // 图标行
        const iconDiv = (
            <div className={'text-align-center color-second font-size-xxl'}>
                <Icon type={'frown'}/>
            </div>
        );

        // 提示行
        const tipDiv = (
            <div className={'text-align-center color-black font-size-md'}>
                哎呀 页面消失了
            </div>
        );

        // 次要话语行
        const secondWordDiv = (
            <div className={'text-align-center font-size-sm'}>
                <Link to={'/'}>跟我一起回主站吧</Link>
            </div>
        );

        return (
            <KLayout
                className={'w-100 h-100vh'}
                colorMode={KLayout.COLOR_MODE_MAIN}>
                <Row
                    className={'w-100 h-100'}
                    type={'flex'}
                    align={'middle'}
                    justify={'center'}>
                    <Col>
                        {iconDiv}
                        {tipDiv}
                        {secondWordDiv}
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
