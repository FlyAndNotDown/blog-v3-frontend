/**
 * /component/block/comment-block.js
 * @author John Kindem
 * @description source file of component 'comment-block'
 */

import React from 'react';
import { Comment, Avatar, Form, Input, Button } from 'antd';
import { CommentInputBlock } from './comment-input-block';

/**
 * comment block
 * @constructor
 */
export class CommentBlock extends React.Component {

    /**
     * constructor of React component
     * @param {Object} props properties
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * render function of React component
     * @returns {*} render result of component
     */
    render() {
        return (
            <div>
                <Comment
                    avatar={
                        <Avatar icon={'user'}/>
                    }
                    content={
                        <CommentInputBlock
                            onChange={() => {}}
                            onSubmit={() => {}}
                            submitting={false}
                            value={'1234'}/>
                    }/>
            </div>
        );
    }

}
