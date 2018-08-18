import React from 'react';
import { Layout } from 'antd';
import { CssTool } from "../tool/css";

/**
 * BgColorNoneLayout 没有背景颜色的 Layout
 */
export class BgColorNoneLayout extends React.Component {

    static __defaultClassName = 'bg-color-none';

    /**
     * 构造
     * @param props 属性
     */
    constructor(props) {

        // 调用父类构造函数
        super(props);

        // 设置初始状态
        this.state = {};

    }

    /**
     * 渲染函数
     * @returns {*} jsx
     */
    render() {
        return (
            <Layout className={CssTool.combClassName(
                BgColorNoneLayout.__defaultClassName,
                this.props.className
            )}>
                {this.props.children}
            </Layout>
        );
    }

}

