/**
 * /component/block/archive-block-list.js
 * @author John Kindem
 * @version v1.0
 * @description source file for component 'archive block list'
 */

import React from 'react';
import { Row, Col, List } from 'antd';
import { BlankLink } from '../tool/blank-link';

/**
 * ArchiveBlockList
 * @description the main block list of archive page
 * @property {[{[]}]} posts the data of archive page posts
 */
export class ArchiveBlockList extends React.Component {

    /**
     * constructor of the component
     * @param {Object} props properties of the React component
     */
    constructor(props) {
        super(props);

        this.__dateShown = [];
    }

    /**
     * archive post render function
     * @return {*} JSX render result
     */
    archivePostRenderFunc = (item) => {
        return (
            <List.Item>
                <BlankLink
                    className={'color-text-a'}
                    to={`/post/key/${item.id}`}>
                    <span>{item.day}日</span>
                    <span className={'ml-md'}>{item.title}</span>
                </BlankLink>
            </List.Item>
        );
    };

    /**
     * map function of post array
     * @return {*} JSX render result
     */
    postsListMapFunc = (list) => {
        return (
            <div>
                <h1>{list.year}年{list.month}月</h1>
                <List
                    bordered
                    dataSource={list.posts}
                    renderItem={this.archivePostRenderFunc}/>
            </div>
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
                    {this.props.posts.map(this.postsListMapFunc)}
                </Col>
            </Row>
        );
    }

}
