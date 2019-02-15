import React from 'react';
import { Row, Col, Comment, Avatar, Input, Button, Tooltip } from 'antd';
import moment from 'moment';
import optionConfig from '../../config/option';

/**
 * MessageBlockList component
 * @constructor
 * @param {boolean} login user login status
 * @param {Object} user user info object
 * @param {[Object]} messages message objects list
 * @param {boolean} locked locked status
 * @param {Function} onNewMessage handle called when publish a new message
 */
export class MessageBlockList extends React.Component {

    // static text
    static __TEXTAREA__PLACEHOLDER = '别搞事情哦🤣';
    static __PUBLISH_NEW_MESSAGE_BUTTON__TEXT = '留言';
    static __LOGIN_BUTTON__TEXT = '登录以留言';

    /**
     * constructor of react component
     * @param {*} props properties
     */
    constructor(props) {
        super(props);

        this.state = {
            // new message value
            newMessageValue: ''
        };
    }

    /**
     * handel called when new message value change
     * @param {Object} e react event object
     */
    onNewMessageValueChange = (e) => {
        this.setState({ newMessageValue: e.target.value });
    };

    /**
     * handle called when new message button clicked
     */
    onNewMessageButtonClick = () => {
        // TODO
    };

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // message input textarea
        const newMessageInputTextarea = (
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
                                value={this.state.newMessageValue}
                                onChange={this.onNewMessageValueChange}
                                autosize={{ minRows: 4 }}
                                placeholder={MessageBlockList.__TEXTAREA__PLACEHOLDER}/>
                        </div>
                        <div className={'mt-sm'}>
                            <Button
                                disabled={!!this.props.locked}
                                type={'primary'}
                                onClick={this.onNewMessageButtonClick}>
                                {MessageBlockList.__PUBLISH_NEW_MESSAGE_BUTTON__TEXT}
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
                        <Button type={'primary'}>
                            {MessageBlockList.__LOGIN_BUTTON__TEXT}
                        </Button>
                    </div>
                }/>
        );

        // return render result
        return (
            <div>

            </div>
        );
    }

};