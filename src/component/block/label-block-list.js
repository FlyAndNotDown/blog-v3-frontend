/**
 * component/block/label-block-list.js
 * @author John Kindem
 * @version v1.0
 * @description source file for component 'label-block-list'
 */

import React from 'react';
import { Row, Col, List } from 'antd';
import { BlankLink } from '../tool/blank-link';

/**
 * LabelBlockList
 * @description the posts block list of label page
 * @param {[]} posts the data of posts block list
 */
export class LabelBlockList extends React.Component {

    /**
     * constructor of the component
     * @param {Object} props properties of the React component
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    labelPostsRenderFunc = (item) => {
        return (
            <List.Item>
                <span>
                    {item.date}
                </span>
                &nbsp;
                <span>
                    <BlankLink
                        className={'text-decoration-none color-text'}
                        to={`/post/key/${item.key}`}>
                        {item.title}
                    </BlankLink>
                </span>
            </List.Item>
        );
    };

    /**
     * render function
     * @return {*} JSX render result
     */
    render() {
        return (
            <Row className={'w-block-list m-auto-0'}>
                <Col>
                    <List
                        bordered
                        locale={{
                            emptyText: '没有文章'
                        }}
                        dataSource={this.props.posts}
                        renderItem={this.labelPostsRenderFunc}/>
                </Col>
            </Row>
        );
    }

}
