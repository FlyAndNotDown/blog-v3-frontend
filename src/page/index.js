import React from 'react';
import { Header } from "../component/header";
import headerBg from '../img/header-bg-2.png';
import avatar from '../img/avatar.jpg';
import { KLayout } from "../component/k-layout";
import { Avatar, Row, Col } from 'antd';
import { Nav } from "../component/nav";
import QueueAnimation from 'rc-queue-anim';

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
                
            </KLayout>
        );
    }

}