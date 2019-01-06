/**
 * /component/block/comment-input-block.js
 * @author John Kindem
 * @description source file for component 'comment-input-block'
 * @version v1.0
 */

import React from 'react';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;
const { Item } = Form;

/**
 * CommentInputBlock
 * @constructor
 * @property {function} onChange thing to do when textarea on change
 * @property {function} onSubmit thing to do when value on submit
 * @property {boolean} submitting if the button on status submitting
 * @property {string} value value of textarea
 */
export class CommentInputBlock extends React.Component {

    // comment button text
    static COMMENT_INPUT_BLOCK__COMMENT_BUTTON_TEXT = '我也来说一句';

    /**
     * constructor of component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * render function of component
     * @returns {*} result of render
     */
    render() {
        return (
            <div>
                <Item>
                    <TextArea rows={4} onChange={this.props.onChange} value={this.props.value}/>
                </Item>
                <Item>
                    <Button
                        htmlType={'submit'}
                        loading={this.props.submitting}
                        onClick={this.props.onClick}
                        type={'primary'}>
                        {CommentInputBlock.COMMENT_INPUT_BLOCK__COMMENT_BUTTON_TEXT}
                    </Button>
                </Item>
            </div>
        );
    }

}
