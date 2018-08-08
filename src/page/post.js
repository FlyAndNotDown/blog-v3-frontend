import React from 'react';
import { BgColorNoneLayout } from "../component/layout/bg-color-none-layout";
import postBg from '../img/header-bg.jpg';
import { Header } from "../component/block/header";
import QueueAnimation from 'rc-queue-anim';
import { Footer } from "../component/block/footer";
import { Icon } from 'antd';

export class PostPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <BgColorNoneLayout>
                <QueueAnimation delay={500}>
                    <Header
                        key={'header'}
                        bg={postBg}
                        main={{
                            mt: '80px',
                            lines: [(
                                <div className={'text-align-center color-white font-size-40px'}>
                                    文章标题文章标题文章标题文章标题文章标题
                                </div>
                            ), (
                                <div className={'text-align-center color-white font-size-25px'}>
                                    <Icon type={'clock-circle-o'}/>&nbsp;2018.5.9
                                </div>
                            ), (
                                <div className={'text-align-center color-white font-size-25px'}>
                                    #测试&nbsp;#测试&nbsp;#测试
                                </div>
                            )]
                        }}/>
                    <BgColorNoneLayout key={'body'}>

                    </BgColorNoneLayout>
                    <Footer key={'footer'}/>
                </QueueAnimation>
            </BgColorNoneLayout>
        );

    }

}