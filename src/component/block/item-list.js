import React from 'react';
import { Post } from "./post";
import { Row, Col, Divider } from 'antd';
import { CssTool } from "../../tool/css";
import { Message } from "./message";

export class ItemList extends React.Component {

    static defaultClassName = 'mb-20px';

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <Row className={CssTool.combClassName(ItemList.defaultClassName, this.props.className)}>
                <Col>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Message
                        text={
                            '我只是觉得吧，这个世界太真实'
                        }
                        time={'2018.7.13'}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>
                    <Divider/>
                    <Post
                        title={'你好世界'}
                        time={'2018.7.13'}
                        tags={[{
                            short: 'test',
                            name: '测试'
                        }]}/>

                </Col>
            </Row>
        );

    }

}