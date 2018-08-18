import React from 'react';
import { KLayout } from "./k-layout";
import { Avatar } from 'antd';

/**
 * Header 页头组件
 * @param {string} bgImg 背景图地址
 * @param {string} className css类
 */
export class Header extends React.Component {

    // 默认 css 类
    static __defaultClassName = 'w-100';

    /**
     * 构造
     * @param props 组件属性
     */
    constructor(props) {

        // 调用父类构造函数
        super(props);

        // 设置组件初始状态
        this.state = {};

    }

    /**
     * 渲染函数
     * @returns {*} jsx
     */
    render() {

        // 返回渲染结果
        return (
            <KLayout>
                <div>
                    <img
                        src={this.props.bgImg}
                        className={'position-fixed left-0 w-100 h-100 object-fit-cover'}
                        alt={'header-bg-img'}/>
                </div>
                <div
                    className={'z-index-1 m-0-auto'}>

                </div>
            </KLayout>
        );

    }

}