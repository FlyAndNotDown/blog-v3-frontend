import React from 'react';
import { Affix } from 'antd';
import { CssTool } from "../../tool/css";

export class KAffix extends React.Component {

    // 默认 className
    static __defaultClassName = '';

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Affix
                offsetTop={1}
                className={CssTool.combClassName(KAffix.__defaultClassName, this.props.className)}
                style={this.props.style}>
                {this.props.children}
            </Affix>
        );
    }

}