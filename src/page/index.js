import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import { Header } from "../component/nav/header";
import headerBg from '../img/header-bg.jpg';

/**
 * 页面组件 - /
 */
export class IndexPage extends React.Component {

    /**
     * 构造函数
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
            <BgColorNoneLayout>
                <Header bg={headerBg}/>
            </BgColorNoneLayout>
        );

    }

}