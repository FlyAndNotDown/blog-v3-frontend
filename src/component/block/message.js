import React from 'react';
import { Icon } from 'antd';

/**
 * 说说
 * @props text - 内容
 * @props time - 时间
 */
export class Message extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <div>
                <div className={'text-align-center font-size-40px color-primary'}>
                    <Icon type={'message'}/>
                </div>
                <div className={'text-align-center font-size-20px color-grey p-0-60px'}>
                    {this.props.text}
                </div>
                <div className={'text-align-center font-size-20px color-second'}>
                    <Icon type={'clock-circle-o'}/>&nbsp;{this.props.time}&nbsp;#说说
                </div>
            </div>
        );

    }

}