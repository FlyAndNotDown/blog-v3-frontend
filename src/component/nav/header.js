import React from 'react';
import { Row, Col, Avatar, Divider } from 'antd';
import avatarImg from '../../img/avatar.jpg';

/**
 * 导航
 */
export class Header extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <Row
                className={'mt-60px'}>
                <Col>
                    <div className={'text-align-center'}>
                        <Avatar
                            className={'w-100px h-100px shadow-little'}
                            src={avatarImg}/>
                    </div>
                    <h1 className={'text-align-center mb-0'}>
                        John Kindem
                    </h1>
                    <h2 className={'color-second text-align-center'}>
                        简单、快乐的前端狗
                    </h2>
                </Col>
            </Row>
        );

    }

}