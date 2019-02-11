/**
 * /component/block/comment-block-list.js
 * @author John Kindem
 * @description source file for component block list component
 * @version v1.0
 */

import React from 'react';
import { Row, Col, Comment, Avatar, Input, Button, Tooltip } from 'antd';
import moment from 'moment';
import optionConfig from '../../config/option';

/**
 * CommentBlockList component
 * @constructor
 * @param {boolean} login user login status
 * @param {Object} user user info object
 * @param {[Object]} comments comment objects list
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
     * parent comment render function
     * @param {Object} comment parent comment object
     * @returns {*} render result
     */
    parentCommentsRenderFunction = (comment) => {
        // return render result
        return (
            <Comment
                actions={[(<a className={'color-second'}>回复</a>)]}
                author={comment.user.nickname}
                datetime={
                    <Tooltip title={comment.datetime}>
                        <span>{moment(comment.datetime, optionConfig.dateFormat).fromNow()}</span>
                    </Tooltip>
                }
                avatar={
                    comment.user.type === 'local' ? (
                        <Avatar>{comment.user.nickname[0]}</Avatar>
                    ) : (
                        <Avatar src={comment.user.avatar}/>
                    )
                }
                content={
                    <div>{comment.body}</div>
                }>
                {comment.children && comment.children.map(this.childCommentsRenderFunction)}
            </Comment>
        );
    };

    /**
     * child comment render function
     * @param {Object} comment child comment object
     * @returns {*} render result
     */
    childCommentsRenderFunction = (comment) => {
        // return render result
        return (
            <Comment
                actions={[(<a className={'color-second'}>回复</a>)]}
                author={comment.user.nickname}
                datetime={
                    <Tooltip title={comment.datetime}>
                        <span>{moment(comment.datetime, optionConfig.dateFormat).fromNow()}</span>
                    </Tooltip>
                }
                avatar={
                    comment.user.type === 'local' ? (
                        <Avatar>{comment.user.nickname[0]}</Avatar>
                    ) : (
                        <Avatar src={comment.user.avatar}/>
                    )
                }
                content={
                    <div>{comment.body}</div>
                }/>
        );
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
                    {this.props.comments && this.props.comments.map(this.parentCommentsRenderFunction)}
                </Col>
            </Row>
        );
    }

}