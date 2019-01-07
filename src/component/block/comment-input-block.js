/**
 * /component/block/comment-input-block.js
 * @author John Kindem
 * @description source file for component 'comment-input-block'
 * @version v1.0
 */

import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

/**
 * CommentInputBlock
 * @constructor
 * @property {function} onChange thing to do when textarea on change
 * @property {function} onSubmit thing to do when value on submit
 * @property {boolean} submitting if the button on status submitting
 * @property {string} value value of textarea
 * @property {boolean} disabled disabled status
 */
export class CommentInputBlock extends React.Component {

    // comment button text
    static COMMENT_INPUT_BLOCK__COMMENT_BUTTON_TEXT = '我也来说一句';
    static COMMENT_INPUT_BLOCK__COMMENT_BUTTON_DISABLED_TEXT = '登录参与评论';

    /**
     * constructor of component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * handle when login button clicked
     */
    onLoginButtonClick = () => {
        // TODO
    }

    /**
     * render function of component
     * @returns {*} result of render
     */
    render() {
        // input textarea row
        const inputRow = (
            <div>
                <TextArea rows={4} onChange={this.props.onChange} value={this.props.value}/>
            </div>
        );

        // submit button row
        const submitButtonRow = (
            <div>
                <Button
                    loading={this.props.submitting}
                    onClick={this.props.onClick}
                    type={'primary'}>
                    {CommentInputBlock.COMMENT_INPUT_BLOCK__COMMENT_BUTTON_TEXT}
                </Button>
            </div>
        );

        // disabled button row
        const disabledButtonRow = (
            <div>
                <Button
                    onClick={this.onLoginButtonClick}
                    type={'primary'}>
                    {CommentInputBlock.COMMENT_INPUT_BLOCK__COMMENT_BUTTON_DISABLED_TEXT}
                </Button>
            </div>
        );

        return (
            <div>
                {!this.props.disabled && inputRow}
                {this.props.disabled ? (
                    disabledButtonRow
                ) : (
                    submitButtonRow
                )}
            </div>
        );
    }

}