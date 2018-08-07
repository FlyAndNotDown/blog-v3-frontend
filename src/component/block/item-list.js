import React from 'react';
import { Post } from "./post";
import { Row, Col, Divider, Pagination } from 'antd';
import { CssTool } from "../../tool/css";
import { Message } from "./message";

/**
 * ItemList - 主页元素列表
 * @props items: 各种元素
 */
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
                    {this.props.items.map((item, key) => {
                        switch (item.type) {
                            case 'post':
                                return (
                                    <div>
                                        <Post
                                            key={key}
                                            title={item.title}
                                            date={item.date}
                                            tags={item.tags}/>
                                        {key < this.props.items.length - 1 ? <Divider/> : null}
                                    </div>
                                );
                            case 'message':
                                return (
                                    <div>
                                        <Message
                                            key={key}
                                            text={item.text}
                                            date={item.date}/>
                                        {key < this.props.items.length - 1 ? <Divider/> : null}
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                    <div className={'text-align-center mt-40px'}>
                        <Pagination size={'small'} total={100}/>
                    </div>
                </Col>
            </Row>
        );

    }

}