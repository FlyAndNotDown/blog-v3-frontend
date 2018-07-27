import React from 'react';
import { BgColorNoneLayout } from "../layout/bg-color-none-layout";
import { Row, Col, Avatar } from 'antd';
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
            <BgColorNoneLayout>
                <Row
                    className={'mt-60px'}>
                    <Col
                        xs={{
                            span: 0,
                            offset: 0
                        }}
                        sm={{
                            span: 0,
                            offset: 0
                        }}
                        md={{
                            span: 0,
                            offset: 0
                        }}
                        lg={{
                            span: 10,
                            offset: 7
                        }}>
                        <div className={'text-align-center'}>
                            <Avatar
                                className={'w-100px h-100px shadow-little'}
                                src={avatarImg}/>
                        </div>
                        <h1 className={'text-align-center mb-0'}>
                            John Kindem
                        </h1>
                        <h2 className={'color-text text-align-center'}>
                            前端开发者，简约不简单
                        </h2>
                    </Col>
                </Row>
            </BgColorNoneLayout>
        );

    }

}