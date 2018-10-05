/**
 * /component/footer.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col } from 'antd';
import { KLayout } from "./tool/k-layout";
import { Link } from 'react-router-dom';
import { KIcon } from "./tool/k-icon";

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
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}
                className={'z-index-1'}>
                <Row className={'m-xl p-xl'}>
                    <Col className={'text-align-center'}>
                        <div className={'font-size-xl mb-md'}>
                            <a href={'https://github.com/FlyAndNotDown'} target={'__blank'}>
                                <KIcon type={'k-github'}/>
                            </a>
                            &nbsp;
                            <a href={'https://www.zhihu.com/people/kindem/activities'} target={'__blank'}>
                                <KIcon type={'k-zhihu'}/>
                            </a>
                            &nbsp;
                            <a href={'https://www.jianshu.com/u/d498ebae7b21'} target={'__blank'}>
                                <KIcon type={'k-jianshu'}/>
                            </a>
                            &nbsp;
                            <a href={'https://juejin.im/user/5b3a3d53f265da62d21e14fe'} target={'__blank'}>
                                <KIcon type={'k-juejin'}/>
                            </a>
                            &nbsp;
                            <a href={'https://segmentfault.com/u/liuweimeng'} target={'__blank'}>
                                <KIcon type={'k-sf'}/>
                            </a>
                            &nbsp;
                            <a href={'mailto:hwq2525775@gmail.com'}>
                                <KIcon type={'k-email'}/>
                            </a>
                            &nbsp;
                            <Link to={'#'}>
                                <KIcon type={'k-money'}/>
                            </Link>
                        </div>
                        <div className={'font-size-xs'}>
                            Theme By
                            <Link to={'#'} className={'color-text'} id={'emoji-red-heart'}>
                                <span role={'img'} aria-labelledby={'red-heart'}>❤️</span>
                                Blog-V3-Frontend
                            </Link>
                        </div>
                        <div className={'font-size-xs'}>
                            Framework By
                            <Link to={'#'} className={'color-text'} id={'emoji-ant'}>
                                <span role={'img'} aria-labelledby={'ant'}>🐜</span>
                                Ant-Design
                            </Link>
                        </div>
                        <div>@2017 Copyright kindemh.cn</div>
                    </Col>
                </Row>
            </KLayout>
        );
    }

}
