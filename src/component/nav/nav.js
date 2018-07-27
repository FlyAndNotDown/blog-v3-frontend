import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';

/**
 * 导航栏
 */
export class Nav extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <div className={'font-size-18px color-second text-align-center'}>
                <Link to={'#'} className={'color-second'}>首页</Link>
                &nbsp;|&nbsp;
                <Link to={'#'} className={'color-second'}>归档</Link>
                &nbsp;|&nbsp;
                <Link to={'#'} className={'color-second'}>关于</Link>
                <Divider/>
            </div>
        );

    }

}