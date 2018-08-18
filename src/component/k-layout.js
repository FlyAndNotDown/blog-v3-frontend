import React from 'react';
import { Layout } from 'antd';
import { CssTool } from "../tool/css";

/**
 * KLayout 自定义 KLayout
 * @param {number} colorMode 颜色
 * @param {number} widthMode 长度
 * @param {number} fixedWidth
 */
export class KLayout extends React.Component {

    // 默认属性
    static defaultProps = {
        colorMode: 0,
        widthMode: 0,
        fixedWidth: '1440px'
    };

    // 提供的选项
    // 颜色
    static COLOR_MODE_NONE = 0;
    static COLOR_MODE_NORMAL = 1;
    // 宽度
    static WIDTH_MODE_NORMAL = 0;
    static WIDTH_MODE_FULL = 1;
    static WIDTH_MODE_FIXED = 2;

    /**
     * 构造
     * @param props 属性
     */
    constructor(props) {

        // 调用父类构造函数
        super(props);

        // 设置初始状态
        this.state = {};

        // 构造初始 className 和 style
        this.__className = '';
        this.__style = {};
        switch (this.props.color) {
            default:
            case KLayout.COLOR_NONE:
                CssTool.combClassName(
                    this.__className,
                    'bg-color-none'
                );
                break;
            case KLayout.COLOR_NORMAL:
                CssTool.combClassName(
                    this.__className,
                    'bg-color-normal'
                );
                break;
        }
        switch (this.props.width) {
            default:
            case KLayout.WIDTH_NORMAL:
                break;
            case KLayout.WIDTH_FULL:
                CssTool.combClassName(
                    this.__className,
                    'w-100'
                );
                break;
            case KLayout.WIDTH_FIXED:
                CssTool.combStyle(
                    this.__style,
                    this.props.fixedWidth | KLayout.defaultProps.fixedWidth
                );
                break;
        }

    }

    /**
     * 渲染函数
     * @returns {*} jsx
     */
    render() {
        return (
            <Layout
                className={CssTool.combClassName(
                    this.__className,
                    this.props.className
                )}
                style={CssTool.combStyle(
                    this.__style,
                    this.props.style
                )}>
                {this.props.children}
            </Layout>
        );
    }

}
