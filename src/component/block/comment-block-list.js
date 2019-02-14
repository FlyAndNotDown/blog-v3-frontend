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
 * @param {boolean} lcoked locked status
 * @param {Function} onNewComment handle called when publish a new comment
 * @param {Function} onNewReply handle called when publish a new reply
 */
export class CommentBlockList extends React.Component {

    // static text
    static __PUBLISH_NEW_COMMENT_BUTTON__TEXT = '我也说一句';
    static __PUBLISH_NEW_REPLY_BUTTON__TEXT = '回复';
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

            // new reply value
            newReplyValue: '',

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
     * handle called when publish a new comment
     */
    onNewCommentButtonClick = () => {
        /**
         * called handle from props
         * @param {string} value value of new comment textarea
         */
        if (this.props.onNewComment && this.props.onNewComment(this.state.newCommentValue)) {
            this.setState({ newCommentValue: '' });
        }
    };

    /**
     * parent comment render function
     * @param {Object} parentComment parent comment object
     * @param {number} parentKey key of iteration object
     * @returns {*} render result
     */
    parentCommentsRenderFunction = (parentComment, parentKey) => {
        /**
         * handle called when new reply button clicked
         */
        let onNewReplyButtonClick = (parentKey, childKey) => {
            /**
             * called callback from props
             * @param {string} value new reply textarea value
             * @param {number} parentKey parent comment object key
             * @param {number} childKey child comment object key
             */
            if (this.props.onNewReply && this.props.onNewReply(this.state.newReplyValue, parentKey, childKey)) {
                this.setState({ newReplyValue: '' });
            }
        };

        /**
         * handle called when new reply value changed
         * @param {Object} e react event object
         */
        let onNewReplyValueChange = (e) => { this.setState({ newReplyValue: e.target.value }); };

        /**
         * new reply block generator
         * @param {number} parentKey parent comment object key
         * @param {number} childKey child comment object key
         */
        let newReplyBlockGenerator = (parentKey, childKey) => {
            return (
                <div>
                    <Input.TextArea
                        value={this.state.newReplyValue}
                        onChange={onNewReplyValueChange}
                        autosize={{ minRows: 4 }}/>
                    <Button
                        disabled={!!this.props.lcoked}
                        type={'primary'}
                        className={'mt-sm'}
                        onClick={() => { return onNewReplyButtonClick(parentKey, childKey); }}>
                        {CommentBlockList.__PUBLISH_NEW_REPLY_BUTTON__TEXT}
                    </Button>
                </div>
            );
        };

        // login tip
        let replyLoginTip = (
            <div>
                <Button type={'primary'}>{CommentBlockList.__LOGIN_BUTTON__TEXT}</Button>
            </div>
        );

        /**
         * handle called when parent reply button clicked
         */
        let onParentReplyButtonClick = () => {
            this.setState({
                replyToParentCommentKey: parentKey,
                replyToChildCommentKey: null,
                newReplyValue: ''
            });
        };

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
                    replyToChildCommentKey: childKey,
                    newReplyValue: ''
                });
            };

            // return render result
            return (
                <Comment
                    key={childKey}
                    actions={[(<a className={'color-second'} onClick={onChildReplyButtonClick}>回复</a>)]}
                    author={this.props.login ? childComment.creator.nickname : ''}
                    datetime={
                        <Tooltip title={childComment.datetime}>
                            <span>{moment(childComment.datetime, optionConfig.dateFormat).fromNow()}</span>
                        </Tooltip>
                    }
                    avatar={
                        childComment.creator.type === 'local' ? (
                            this.props.login ? (
                                <Avatar>{childComment.creator.nickname[0]}</Avatar>
                            ) : (
                                <Avatar icon={'user'}/>
                            )
                        ) : (
                            <Avatar src={childComment.creator.avatar}/>
                        )
                    }
                    content={
                        <div>{childComment.body}</div>
                    }>
                    {this.state.replyToParentCommentKey === parentKey &&
                        this.state.replyToChildCommentKey === childKey &&
                            (this.props.login ? newReplyBlockGenerator(parentKey, childKey) : replyLoginTip)
                    }
                </Comment>
            );
        };

        // return render result
        return (
            <Comment
                key={parentKey}
                actions={[(<a className={'color-second'} onClick={onParentReplyButtonClick}>回复</a>)]}
                author={this.props.login ? parentComment.creator.nickname : ''}
                datetime={
                    <Tooltip title={parentComment.datetime}>
                        <span>{moment(parentComment.datetime, optionConfig.dateFormat).fromNow()}</span>
                    </Tooltip>
                }
                avatar={
                    parentComment.creator.type === 'local' ? (
                        this.props.login ? (
                            <Avatar>{parentComment.creator.nickname[0]}</Avatar>
                        ) : (
                            <Avatar icon={'user'}/>
                        )
                    ) : (
                        <Avatar src={parentComment.creator.avatar}/>
                    )
                }
                content={
                    <div>{parentComment.body}</div>
                }>
                {this.state.replyToParentCommentKey === parentKey &&
                    this.state.replyToChildCommentKey === null &&
                        (this.props.login ? newReplyBlockGenerator(parentKey, null) : replyLoginTip)
                }
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
                avatar={
                    this.props.login ? (
                        <Avatar>{this.props.user.nickname[0]}</Avatar>
                    ) : (
                        <Avatar icon={'user'}/>
                    )
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
                                disabled={!!this.props.lcoked}
                                type={'primary'}
                                onClick={this.onNewCommentButtonClick}>
                                {CommentBlockList.__PUBLISH_NEW_COMMENT_BUTTON__TEXT}
                            </Button>
                        </div>
                    </div>
                }
                author={this.props.login ? this.props.user.nickname : ''}/>
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