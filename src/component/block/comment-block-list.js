/**
 * /component/block/comment-block-list.js
 * @author John Kindem
 * @description source file for component block list component
 * @version v1.0
 */

import React from 'react';
import { Row, Col, Comment, Avatar, Input, Button } from 'antd';

/**
 * CommentBlockList component
 * @constructor
 */
export class CommentBlockList extends React.Component {

    /**
     * constructor of react component
     * @param {*} props 
     */
    constructor(props) {
        super(props);

        this.state = {
            newCommentValue: ''
        };
    }

    /**
     * handle called when new comment value changed
     * @param {Object} e react event object
     */
    onNewCommentValueChange = (e) => {
        this.setState({ newCommentValue: e.target.value });
    };

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // comment input textarea
        const commentInputTextarea = (
            <Comment
                avatar={
                    <Avatar>K</Avatar>
                }
                content={
                    <div>
                        <div>
                            <Input.TextArea
                                value={this.state.newCommentValue}
                                onChange={this.onNewCommentValueChange}
                                autosize={{ minRows: 4 }}/>
                        </div>
                        <div className={'mt-sm'}>
                            <Button
                                type={'primary'}>
                                我也说一句
                            </Button>
                        </div>
                    </div>
                }
                author={'Kindem'}/>
        );

        // return render result
        return (
            <Row>
                <Col>
                    {commentInputTextarea}
                </Col>
            </Row>
        );
    }

}