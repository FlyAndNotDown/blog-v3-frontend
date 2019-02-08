/**
 * /component/block/comment-block-list.js
 * @author John Kindem
 * @description source file for comment block list component
 * @version v1.0
 */

import React from 'react';
import { Comment, Row, Col, Avatar } from 'antd';

/**
 * CommentBlockList
 * @constructor
 */
export class CommentBlockList extends React.Component {

    /**
     * constructor of component
     * @param {Object} props properties of react component 
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // return render result
        return (
            <Row>
                <Col>
                    <Comment
                        actions={[<span>Reply to</span>]}
                        author={<a>Kindem</a>}
                        avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}/>}
                        alt={'Kindem'}
                        content={<p>Hello World</p>}>
                        <Comment
                            actions={[<span>Reply to</span>]}
                            author={<a>Kindem</a>}
                            avatar={<Avatar src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}/>}
                            alt={'Kindem'}
                            content={<p>Hello World</p>}>
                        </Comment>
                    </Comment>
                </Col>
            </Row>
        );
    }

}
