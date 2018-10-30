/**
 * /component/block/archive-block-list.js
 * @author John Kindem
 * @version v1.0
 * @description source file for component 'archive block list'
 */

import React from 'react';
import { Row, Col } from 'antd';

/**
 * ArchiveBlockList
 * @description the main block list of archive page
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
     * map function of post array
     * @return {*} JSX render result
     */
    postsMapFunc = (post) => {
        // TODO
    };

    /**
     * render function
     * @return {*} JSX render result
     */
    render() {
        return (
            <Row className={'w-block-list m-auto-0'}>
                <Col>
                    {this.props.posts.map(this.postsMapFunc)}
                </Col>
            </Row>
        );
    }

}
