/**
 * /component/block/post-block.js
 * @author John Kindem
 */

import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

/**
 * 文章块组件
 * @constructor
 * @property {number} postKey 文章键
 * @property {string} title 标题
 * @property {string} description 描述
 * @property {string} date 日期
 * @property {Array} labels 标签
 * * @member {Object} label 标签对象
 * * @member {string} name 标签名
 * * @member {string} key 标签键
 */
export class PostBlock extends React.Component {

    /**
     * 构造
     * @param {Object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * Markdown 代码渲染函数
     * @param {Object} object 解析对象
     * @return {*} 渲染结果
     */
    markdownCodeRender = object => {
        return (
            <SyntaxHighlighter
                language={object.language}>
                {object.value}
            </SyntaxHighlighter>
        );
    };

    /**
     * 标签迭代映射函数
     * @param {Object} label 标签对象
     * @param {number} key 迭代标识
     * @returns {*} 渲染结果
     */
    labelsMapFunc = (label, key) => {
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
    };

    /**
     * 渲染函数
     * @returns {*} 渲染结果
     */
    render() {
        // 标题 div
        let titleDiv = (
            <div>
                <Link className={'font-size-lg color-black'} to={`/post/${this.props.postKey}`}>
                    {this.props.title}
                </Link>
            </div>
        );

        // 描述 div
        let descriptionDiv = (
            <div className={'font-size-xs mt-xs'}>
                <ReactMarkdown
                    className={'markdown-block'}
                    source={this.props.description}
                    renderers={{
                        code: this.markdownCodeRender
                    }}/>
            </div>
        );

        // 日期 span
        let dateSpan = (
            <span className={'font-size-xs mt-sm float-left'}>
                <Icon type={'clock-circle-o'}/>
                <span className={'pl-xs pr-xs'}>{this.props.date}</span>
            </span>
        );

        // 标签 span
        let labelSpan = (
            <span className={'font-size-xs mt-sm float-right'}>
                {this.props.labels.map(this.labelsMapFunc)}
            </span>
        );

        // 附加栏 div
        let additionalDiv = (
            <div>
                {dateSpan}
                {labelSpan}
            </div>
        );

        return (
            <Row className={'mt-md'}>
                <Col>
                    {titleDiv}
                    {descriptionDiv}
                    {additionalDiv}
                </Col>
            </Row>
        );
    }

}
