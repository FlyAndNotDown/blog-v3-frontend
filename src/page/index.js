/**
 * /page/index.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { NavHeader } from "../component/nav-header";
import { BlockList } from "../component/block/block-list";
import { Footer } from "../component/footer";

/**
 * 首页组件 - /
 */
export class IndexPage extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {};
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染函数
     */
    render() {
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                <NavHeader/>
                <KLayout
                    colorMode={KLayout.COLOR_MODE_MAIN}
                    className={'z-index-1 p-xl'}>
                    <BlockList/>
                </KLayout>
                <Footer/>
            </KLayout>
        );
    }

}
