/**
 * /page/archive.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { Affix } from "antd";
import { NavBar } from "../component/nav-bar";

/**
 * 归档页面组件
 */
export class ArchivePage extends React.Component {

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
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}>
                <KLayout colorMode={KLayout.COLOR_MODE_NONE}>
                    <Affix offsetTop={0}>
                        <NavBar active={true}/>
                    </Affix>
                </KLayout>
            </KLayout>
        );
    }

}
