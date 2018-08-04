import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

/**
 * Post - 文章
 * @props title - 标题
 * @props description - 描述
 * @props time - 时间
 * @props tags - 标签
 *      JSON arr
 *      - JSON obj
 *          - id 标签 id
 *          - name 标签名
 */
export class Post extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return (
            <Row>
                <Col>
                    <div className={'color-primary font-size-35px'}>
                        <Link to={'#'} className={'color-primary text-decoration-none'}>
                            {this.props.title}
                        </Link>
                    </div>
                    <div className={'font-size-20px'}>
                        <ReactMarkdown
                            className={'md-description'}
                            source={
                                '这是测试描述哦这是测试描述哦这是测试描述哦这是测试描述哦这是测试描述哦' +
                                '这是测试描述哦这是测试描述哦这是测试描述哦这是测试描述哦这是测试描述哦'
                            }/>
                    </div>
                    <div>
                        <span className={'float-left font-size-20px color-second'}>
                            <Icon type={'clock-circle-o'}/>
                            &nbsp;{this.props.time}
                        </span>
                        <span className={'float-right font-size-20px color-second'}>
                            {this.props.tags ? (
                                this.props.tags.map((item, no) => {
                                    return (
                                        <Link
                                            to={'#'}
                                            className={'color-second text-decoration-none'}
                                            key={no}>
                                            #{item.name}
                                        </Link>
                                    );
                                })
                            ) : '没有标签'}
                        </span>
                    </div>
                </Col>
            </Row>
        );

    }

}