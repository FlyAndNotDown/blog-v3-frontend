import React from 'react';
import { BgColorNoneLayout } from "../layout/bg-color-none-layout";
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import QueueAnimation from 'rc-queue-anim';

/**
 * 页头组件
 * @props bg - 背景图
 * @props leftLink - 左边的链接
 *      JSON obj
 *      - to - 链接指向
 *      - name - 链接名
 * @props rightLink - 右边的链接
 *      JSON obj
 *      - to - 链接指向
 *      - name - 链接名
 * @props main - 主要内容
 *      JSON obj
 *      - mt - 向上的边距 (如 20px)
 *      - lines - 内容
 *          JSON arr
 */
export class Header extends React.Component {

    static defaultProps = {
        height: '450px'
    };

    /**
     * 属性
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {};

    }

    /**
     * 渲染
     * @returns {null}
     */
    render() {

        // 链接行
        let linkRow = (
            <Row className={'mt-20px'}>
                <QueueAnimation delay={300}>
                    <span
                        key={'nav-l'}
                        className={'float-left'}>
                        {this.props.leftLink ?
                            <Link
                                to={this.props.leftLink.to}
                                className={'text-decoration-none ml-20px color-white font-weight-bold font-size-15px'}>
                                {this.props.leftLink.name}
                            </Link> : null
                        }
                    </span>
                    <span
                        key={'nav-r'}
                        className={'float-right'}>
                        {this.props.rightLink ?
                            <Link
                                to={this.props.rightLink.to}
                                className={'text-decoration-none mr-20px color-white font-weight-bold font-size-15px'}>
                                {this.props.rightLink.name}
                            </Link> : null
                        }
                    </span>
                </QueueAnimation>
            </Row>
        );

        // 内容行
        let mainRow = (
            this.props.main ? (
                <Row style={{
                    marginTop: this.props.main.mt
                }}>
                    <Col>
                        <QueueAnimation delay={500}>
                            {this.props.main.lines.map((line, no) => {
                                return (
                                    <div key={`main-line-${no}`}>
                                        {line}
                                    </div>
                                );
                            })}
                        </QueueAnimation>
                    </Col>
                </Row>
            ) : null
        );

        return (
            <BgColorNoneLayout
                style={{
                    backgroundImage: `url(${this.props.bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: this.props.height
                }}
                className={'shadow-little'}>
                {linkRow}
                {mainRow}
            </BgColorNoneLayout>
        );

    }

}