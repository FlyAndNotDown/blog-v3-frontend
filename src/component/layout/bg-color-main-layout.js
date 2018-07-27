import React from 'react';
import { Layout } from 'antd';
import { CssTool } from "../../tool/css";

/**
 * 带有主体背景颜色的 Layout
 * @props className - css类名
 */
export class BgColorMainLayout extends React.Component {

    static defaultClassName = 'bg-color-main';

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <Layout
                className={CssTool.combClassName(
                    BgColorMainLayout.defaultClassName,
                    this.props.className
                )}
                style={this.props.style}>
                {this.props.children}
            </Layout>
        );

    }

}
