import React from 'react';
import { Layout } from 'antd';
import { CssTool } from "../../tool/css";

/**
 * 带有主体背景颜色的 Layout
 * @props className - css类名
 */
export class BgColorNoneLayout extends React.Component {

    // 默认类名
    static __defaultClassName = 'bg-color-main w-100';

    /**
     * 构造
     * @param props - 属性
     */
    constructor(props) {

        super(props);

        this.state = {};

    }

    /**
     * 渲染
     * @returns {*}
     */
    render() {

        return (
            <Layout
                className={CssTool.combClassName(
                    BgColorNoneLayout.__defaultClassName,
                    this.props.className
                )}
                style={this.props.style}>
                {this.props.children}
            </Layout>
        );

    }

}
