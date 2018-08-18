import React from 'react';
import { BgColorNoneLayout } from "../component/bg-color-none-layout";

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
            <BgColorNoneLayout>

            </BgColorNoneLayout>
        );
    }

}