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
                <BlankLink to={'https://www.jianshu.com/u/d498ebae7b21'}>
                    <KIcon type={'k-jianshu'}/>
                </BlankLink>
                &nbsp;
                <BlankLink to={'https://www.npmjs.com/~kindem'}>
                    <KIcon type={'k-npm'}/>
                </BlankLink>
                &nbsp;
                <a href={'mailto:johnkindem@qq.com'}>
                    <KIcon type={'k-email'}/>
                </a>
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

        // police info
        const policeInfoDiv = (
            <div className={'font-size-xs'}>
                备案号：
                <BlankLink to={'http://www.beian.miit.gov.cn/'} className={'color-text'}>
                    湘ICP备17018771号-2
                </BlankLink>
            </div>
        );

        // div of copyright info
        const copyrightDiv = (
            <div className={'font-size-xs'}>
                ©2017-2020&nbsp;Copyright
                <a className={'color-text'}>
                    <span role={'img'} aria-labelledby={'star'}>✨</span>
                    kindem.xyz
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
                        {policeInfoDiv}
                        {copyrightDiv}
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
