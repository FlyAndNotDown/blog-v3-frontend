import React from 'react';
import { Row, Col } from 'antd';
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
                    <div className={'color-primary font-size-40px'}>
                        <Link to={'#'} className={'color-primary'}>
                            {this.props.title}
                        </Link>
                    </div>
                    <div className={'font-size-20px'}>
                        <ReactMarkdown
                            className={'md-description'}
                            source={
                                '```js\n' +
                                'function main() {\n' +
                                '   return 0;\n' +
                                '}\n' +
                                '```\n'
                            }/>
                    </div>
                </Col>
            </Row>
        );

    }

}