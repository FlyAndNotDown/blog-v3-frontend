import React from 'react';
import { Layout } from 'antd';
import { CssTool } from "../../tool/css";

/**
 * KLayout 自定义 KLayout
 * @param {number} colorMode 颜色
 * @param {number} widthMode 长度
 * @param {number} fixedWidth
 */
export class KLayout extends React.Component {

    // 提供的选项
    // 颜色
    static COLOR_MODE_NONE = 0;
    static COLOR_MODE_MAIN = 1;
    // 宽度
    static WIDTH_MODE_NORMAL = 0;
    static WIDTH_MODE_FULL = 1;
    static WIDTH_MODE_FIXED = 2;

    // 默认属性
    static defaultProps = {
        colorMode: KLayout.COLOR_MODE_NONE,
        widthMode: KLayout.WIDTH_MODE_FULL,
        fixedWidth: '1440px'
    };

    constructor(props) {

        // 调用父类构造函数
        super(props);

        // 构造初始 className 和 style
        this.__className = '';
        this.__style = {};
        switch (this.props.colorMode) {
            default:
            case KLayout.COLOR_MODE_NONE:
                this.__className = CssTool.combClassName(
                    this.__className,
                    'bg-color-none'
                );
                break;
            case KLayout.COLOR_MODE_MAIN:
                this.__className = CssTool.combClassName(
                    this.__className,
                    'bg-color-main'
                );
                break;
        }
        switch (this.props.widthMode) {
            default:
            case KLayout.WIDTH_MODE_NORMAL:
                break;
            case KLayout.WIDTH_MODE_FULL:
                this.__className = CssTool.combClassName(
                    this.__className,
                    'w-100'
                );
                break;
            case KLayout.WIDTH_MODE_FIXED:
                this.__className = CssTool.combStyle(
                    this.__style,
                    this.props.fixedWidth || KLayout.defaultProps.fixedWidth
                );
                break;
        }

    }

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

