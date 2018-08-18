import React from 'react';
import { Header } from "../component/header";
import headerBg from '../img/header-bg-2.png';
import { KLayout } from "../component/k-layout";

/**
 * IndexPage 页面组件 - /
 */
export class IndexPage extends React.Component {

    /**
     * 构造
     * @param props 属性
     */
    constructor(props) {

        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {};

    }

    /**
     * 渲染函数
     * @returns {*} jsx
     */
    render() {
        return (
            <KLayout>
                <Header
                    bgImg={headerBg}/>
            </KLayout>
        );
    }

}