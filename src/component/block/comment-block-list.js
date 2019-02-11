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
            // new comment textarea value
            newCommentValue: '',

            // selected comment key
            replyToParentCommentKey: null,
            replyToChildCommentKey: null
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
     * @param {Object} parentComment parent comment object
     * @param {number} parentKey key of iteration object
     * @returns {*} render result
     */
    parentCommentsRenderFunction = (parentComment, parentKey) => {
        /**
         * handle called when parent reply button clicked
         */
        let onParentReplyButtonClick = () => { this.setState({ replyToParentCommentKey: parentKey }); };

        /**
         * child comment render function
         * @param {Object} childComment child comment object
         * @param {number} childKey key of iteration object
         * @returns {*} render result
         */
        let childCommentsRenderFunction = (childComment, childKey) => {
            /**
             * handle called when child reply button clicked
             */
            let onChildReplyButtonClick = () => {
                this.setState({
                    replyToParentCommentKey: parentKey,
                    replyToChildCommentKey: childKey
                });
            };

            // return render result
            return (
                <Comment
                    key={childKey}
                    actions={[(<a className={'color-second'} onClick={onChildReplyButtonClick}>回复</a>)]}
                    author={childComment.user.nickname}
                    datetime={
                        <Tooltip title={childComment.datetime}>
                            <span>{moment(childComment.datetime, optionConfig.dateFormat).fromNow()}</span>
                        </Tooltip>
                    }
                    avatar={
                        childComment.user.type === 'local' ? (
                            <Avatar>{childComment.user.nickname[0]}</Avatar>
                        ) : (
                            <Avatar src={childComment.user.avatar}/>
                        )
                    }
                    content={
                        <div>{childComment.body}</div>
                    }/>
            );
        };

        // return render result
        return (
            <Comment
                key={parentKey}
                actions={[(<a className={'color-second'} onClick={onParentReplyButtonClick}>回复</a>)]}
                author={parentComment.user.nickname}
                datetime={
                    <Tooltip title={parentComment.datetime}>
                        <span>{moment(parentComment.datetime, optionConfig.dateFormat).fromNow()}</span>
                    </Tooltip>
                }
                avatar={
                    parentComment.user.type === 'local' ? (
                        <Avatar>{parentComment.user.nickname[0]}</Avatar>
                    ) : (
                        <Avatar src={parentComment.user.avatar}/>
                    )
                }
                content={
                    <div>{parentComment.body}</div>
                }>
                {parentComment.children && parentComment.children.map(childCommentsRenderFunction)}
            </Comment>
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