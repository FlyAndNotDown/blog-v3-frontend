import React from 'react';
import { KLayout } from "../component/tool/k-layout";
import { NavHeader } from "../component/nav-header";

/**
 * IndexPage 页面组件 - /
 */
export class IndexPage extends React.Component {

    constructor(props) {

        // 调用父类构造
        super(props);

        // 设置组件初始状态
        this.state = {};

    }

    render() {
        return (
            <KLayout>
                <NavHeader/>
            </KLayout>
        );
    }

}