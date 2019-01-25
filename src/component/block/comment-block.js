/**
 * /component/block/comment-block.js
 * @author John Kindem
 * @description source file of component 'comment-block'
 */

import React from 'react';
import { Comment, Avatar } from 'antd';
import { CommentInputBlock } from './comment-input-block';

/**
 * comment block
 * @constructor
 * @property {{ login: boolean }} user user info
 * @property {function} onNewCommentSubmit handle when new comment submit button click
 */
export class CommentBlock extends React.Component {

    // default props
    static defaultProps = {
        user: {
            login: false
        }
    };

    /**
     * constructor of React component
     * @param {Object} props properties
     */
    constructor(props) {
        super(props);

        this.state = {
            // new comment content
            newCommentContent: '',
            // submitting
            submitting: false
        };
    }

    /**
     * handle when new comment content change
     * @param  {Object} e a react event object
     */
    onNewCommentContentChange = (e) => {
        this.setState({
            newCommentContent: e.target.value
        });
    };

    /**
     * handle when new comment submit buttong click
     */
    onNewCommentSubmit = async () => {
        // set submitting state
        this.setState({
            submitting: true
        });

        // start submitting, else do nothing
        if (this.props.onNewCommentSubmit) {
            await this.props.onNewCommentSubmit(this.state.newCommentContent);
        }

        setTimeout(() => { this.setState({ submitting: false }); }, 1000);
    };

    /**
     * render function of React component
     * @returns {*} render result of component
     */
    render() {
        // new comment block
        const newCommentBlock = (
            <Comment
                avatar={
                    <Avatar icon={'user'}/>
                }
                content={
                    <CommentInputBlock
                        onChange={this.onNewCommentContentChange}
                        onSubmit={this.onNewCommentSubmit}
                        submitting={this.state.submitting}
                        value={this.state.newCommentContent}
                        disabled={!this.props.user.login}/>
                }/>
        );

        return (
            <div>
                {newCommentBlock}
            </div>
        );
    }

}
