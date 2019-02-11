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
 * @param {boolean} login user login status
 * @param {Object} user user info object
 */
export class CommentBlockList extends React.Component {

    // static text
    static __PUBLISH_NEW_COMMENT_BUTTON__TEXT = '我也说一句';
    static __LOGIN_BUTTON__TEXT = '登录以参与评论';

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
        const newCommentInputTextarea = (
            <Comment
                avatar={<Avatar>{this.props.user.nickname[0]}</Avatar>}
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
                                {CommentBlockList.__PUBLISH_NEW_COMMENT_BUTTON__TEXT}
                            </Button>
                        </div>
                    </div>
                }
                author={this.props.user.nickname}/>
        );

        // login tip
        const loginTip = (
            <Comment
                avatar={<Avatar icon={'user'}/>}
                content={
                    <div>
                        <Button type={'primary'}>{CommentBlockList.__LOGIN_BUTTON__TEXT}</Button>
                    </div>
                }/>
        );

        // return render result
        return (
            <Row>
                <Col>
                    {this.props.login ? newCommentInputTextarea : loginTip}
                </Col>
            </Row>
        );
    }

}