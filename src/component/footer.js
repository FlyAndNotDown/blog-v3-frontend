/**
 * /component/footer.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";
import { KIcon } from "./tool/k-icon";
import { BlankLink } from './tool/blank-link';

/**
 * 页脚组件
 * @constructor
 */
export class Footer extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // div of site owner's info
        const linkDiv = (
            <div className={'font-size-xl mb-md'}>
                <BlankLink to={'https://github.com/FlyAndNotDown'}>
                    <KIcon type={'k-github'}/>
                </BlankLink>
                &nbsp;
                <BlankLink to={'https://www.zhihu.com/people/kindem/activities'}>
                    <KIcon type={'k-zhihu'}/>
                </BlankLink>
                &nbsp;
                <BlankLink to={'https://www.jianshu.com/u/d498ebae7b21'}>
                    <KIcon type={'k-jianshu'}/>
                </BlankLink>
                &nbsp;
                <BlankLink to={'https://juejin.im/user/5b3a3d53f265da62d21e14fe'}>
                    <KIcon type={'k-juejin'}/>
                </BlankLink>
                &nbsp;
                <BlankLink to={'https://segmentfault.com/u/liuweimeng'}>
                    <KIcon type={'k-sf'}/>
                </BlankLink>
                &nbsp;
                <a href={'mailto:hwq2525775@gmail.com'}>
                    <KIcon type={'k-email'}/>
                </a>
                &nbsp;
                <BlankLink to={'#'}>
                    <KIcon type={'k-money'}/>
                </BlankLink>
            </div>
        );

        // div of theme info
        const themeDiv = (
            <div className={'font-size-xs'}>
                Theme By
                <BlankLink to={'https://github.com/FlyAndNotDown/blog-v3-frontend'} className={'color-text'} id={'emoji-red-heart'}>
                    <span role={'img'} aria-labelledby={'red-heart'}>❤️</span>
                    Blog-V3-Frontend
                </BlankLink>
            </div>
        );

        // div of framework info
        const frameworkDiv = (
            <div className={'font-size-xs'}>
                Framework By
                <BlankLink to={'https://ant.design/'} className={'color-text'} id={'emoji-ant'}>
                    <span role={'img'} aria-labelledby={'ant'}>🐜</span>
                    Ant-Design
                </BlankLink>
            </div>
        );

        // div of copyright info
        const copyrightDiv = (
            <div className={'font-size-xs'}>
                ©2017-2019&nbsp;Copyright
                <a className={'color-text'}>
                    <span role={'img'} aria-labelledby={'star'}>✨</span>
                    kindemh.cn
                </a>
            </div>
        );

        // render
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}
                className={'z-index-1'}>
                <Row className={'m-xl p-xl'}>
                    <Col className={'text-align-center'}>
                        {linkDiv}
                        {themeDiv}
                        {frameworkDiv}
                        {copyrightDiv}
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
