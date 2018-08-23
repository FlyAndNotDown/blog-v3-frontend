import React from 'react';
import { Header } from "../component/header";
import headerBg from '../img/header-bg-2.png';
import avatar from '../img/avatar.jpg';
import { KLayout } from "../component/k-layout";
import { Avatar } from 'antd';

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
                <Header bgImg={headerBg}>
                    <div className={'text-align-center'}>
                        <Avatar
                            className={'w-100px h-100px'}
                            src={avatar}/>
                    </div>
                    <div className={'text-align-center font-size-xl color-white mt-md'}>

                    </div>
                </Header>
            </KLayout>
        );
    }

}