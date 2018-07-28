import React from 'react';
import { BgColorNoneLayout } from "../layout/bg-color-none-layout";
import { Row, Col, Avatar } from 'antd';
import avatarImg from '../../img/avatar.jpg';

/**
 * 页头组件
 * @props bg - 背景图
 */
export class Header extends React.Component {

    static defaultProps = {
        height: '350px'
    };

    /**
     * 属性
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {};

    }

    /**
     * 渲染
     * @returns {null}
     */
    render() {

        return (
            <BgColorNoneLayout
                style={{
                    backgroundImage: `url(${this.props.bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: this.props.height
                }}
                className={'shadow-little'}>
                <Row className={'mt-60px'}>
                    <Col>
                        <div className={'text-align-center'}>
                            <Avatar
                                src={avatarImg}
                                className={'w-100px h-100px'}/>
                        </div>
                        <h1 className={'text-align-center color-white font-size-35px mb-0'}>
                            John Kindem
                        </h1>
                        <h2 className={'text-align-center color-f6 font-size-25px'}>
                            简单快乐的前端狗子
                        </h2>
                    </Col>
                </Row>
            </BgColorNoneLayout>
        );

    }

}