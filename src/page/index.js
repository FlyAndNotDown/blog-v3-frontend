import React from 'react';
import { Header } from "../component/header";
import headerBg from '../img/header-bg-2.png';
import avatar from '../img/avatar.jpg';
import { KLayout } from "../component/k-layout";
import { Avatar, Row, Col } from 'antd';
import { Nav } from "../component/nav";

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
                <Header bgImg={headerBg}>
                    <div className={'text-align-center'}>
                        <Avatar
                            className={'w-100px h-100px'}
                            src={avatar}/>
                    </div>
                    <div className={'text-align-center font-size-lg color-white mt-md'}>
                        Frontend is Code's Expression
                    </div>
                </Header>
                <Nav/>
                <Row className={'bg-color-main'}>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/>
                </Row>
            </KLayout>
        );
    }

}