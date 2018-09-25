/**
 * /component/block/post-block.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';

/**
 * 文章块
 * @props {number} key 文章键
 * @props {string} title 标题
 * @props {string} description 描述
 * @props {string} date 日期
 * @props {array} labels 标签
 *  @member {object} label 标签对象
 *      @member {string} name 标签名
 *      @member {string} key 标签键
 */
export class PostBlock extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return (
            <Row className={'mt-md'}>
                <Col>
                    <Link className={'font-size-lg color-black'} to={`${this.props.key}`}>
                        {this.props.title}
                    </Link>
                    <div className={'font-size-xs mt-xs'}>
                        {this.props.description}
                    </div>
                    <div>
                        <span className={'font-size-xs mt-sm float-left'}>
                            <Icon type={'clock-circle-o'}/>
                            <span className={'pl-xs pr-xs'}>
                                {this.props.date}
                            </span>
                        </span>
                            <span className={'font-size-xs mt-sm float-right'}>
                            {this.props.labels.map((label, key) => {
                                return (
                                    <Link
                                        to={`/label/${label.key}`}
                                        key={key}
                                        className={'color-text'}>
                                        #{label.name}
                                        {key === this.props.labels.length - 1 ? (
                                            <span>&nbsp;</span>
                                        ) : null}
                                    </Link>
                                );
                            })}
                        </span>
                    </div>
                </Col>
            </Row>
        );
    }

}
