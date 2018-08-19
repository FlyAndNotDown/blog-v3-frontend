import React from 'react';
import { KLayout } from "./k-layout";
import { Row, Col } from 'antd';

/**
 * Header 页头组件
 * @param {string} bgImg 背景图地址
 * @param {string} className css类
 * @param {string} contextMarginTop 内容距离上边距
 * @param {string} contextMarginBottom 内容距离下边距
 */
export class Header extends React.Component {

    // 默认 css 类
    static __DEFAULT_CLASS_NAME = 'w-100';
    // 默认内容上边距
    static __DEFAULT_CONTEXT_MARGIN_TOP = '100px';
    // 默认内容下边距
    static __DEFAULT_CONTEXT_MARGIN_BOTTOM = '100px';

    /**
     * 构造
     * @param props 组件属性
     */
    constructor(props) {

        // 调用父类构造函数
        super(props);

        // 设置组件初始状态
        this.state = {};

    }

    /**
     * 渲染函数
     * @returns {*} jsx
     */
    render() {

        // 返回渲染结果
        return (
            <KLayout>
                <div>
                    <img
                        src={this.props.bgImg}
                        className={'position-fixed left-0 w-100 h-100 object-fit-cover'}
                        alt={'header-bg-img'}/>
                </div>
                <Row style={{
                    marginTop: this.props.contextMarginTop || Header.__DEFAULT_CONTEXT_MARGIN_TOP,
                    marginBottom: this.props.contextMarginBottom || Header.__DEFAULT_CONTEXT_MARGIN_BOTTOM
                }}>
                    <Col>
                        <div className={'text-align-center'}>
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </KLayout>
        );

    }

}