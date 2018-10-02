/**
 * /page/post.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { NavBar } from '../component/nav-bar';
import { Footer } from '../component/footer';
import { Row, Col, Affix, Divider, Icon, Anchor } from 'antd';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';

const testMarkdown = `
# Live demo
Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below
> This blockquote will change based on the HTML settings above.

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
`;

/**
 * 文章页面 - /post/:postId
 */
export class PostPage extends React.Component {

    /**
     * 构造
     * @param {object} props 属性
     */
    constructor(props) {
        super(props);

        this.state = {
            anchorLinks: []
        };

        this.url = '';
    }

    /**
     * 组件加载生命周期
     */
    componentDidMount() {
        // 获取 url
        this.url = this.props.history.location;
        // TODO 发送请求获取文章
    }

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <KLayout colorMode={KLayout.COLOR_MODE_NONE}>
                    <Affix offsetTop={0}>
                        <NavBar active={true}/>
                    </Affix>
                </KLayout>
                <KLayout>
                    <Row>
                        <Col
                            xs={{ offset: 1, span: 22 }}
                            sm={{ offset: 1, span: 22 }}
                            md={{ offset: 2, span: 20 }}
                            lg={{ offset: 2, span: 20 }}
                            xl={{ offset: 3, span: 18 }}
                            xxl={{ offset: 4, span: 16 }}>
                            <Row>
                                <Col
                                    xs={{ offset: 0, span: 24 }}
                                    sm={{ offset: 0, span: 24 }}
                                    md={{ offset: 0, span: 24 }}
                                    lg={{ offset: 2, span: 14 }}>
                                    <Row className={'bg-color-main mt-md'}>
                                        <Col
                                            xs={{ offset: 0, span: 0 }}
                                            sm={{ offset: 0, span: 0 }}
                                            md={{ offset: 0, span: 0 }}
                                            lg={{ offset: 0, span: 24 }}>
                                            <div className={'font-size-lg mt-md'}>let和const</div>
                                            <div className={'font-size-xs mt-sm color-grey'}>
                                                <span><Icon type={'clock-circle-o'}/>&nbsp;2018-10-2</span>
                                                <span className={'ml-md'}>
                                                    <Link to={'#'} className={'color-grey text-decoration-none'}>#JavaScript</Link>
                                                    &nbsp;
                                                    <Link to={'#'} className={'color-grey text-decoration-none'}>#前端</Link>
                                                    &nbsp;
                                                    <Link to={'#'} className={'color-grey text-decoration-none'}>#积累</Link>
                                                    &nbsp;
                                                    <Link to={'#'} className={'color-grey text-decoration-none'}>#语法</Link>
                                                    &nbsp;
                                                    <Link to={'#'} className={'color-grey text-decoration-none'}>#全栈</Link>
                                                </span>
                                            </div>
                                            <Divider/>
                                        </Col>
                                        <Col
                                            xs={{ offset: 0, span: 24 }}
                                            sm={{ offset: 0, span: 24 }}
                                            md={{ offset: 0, span: 24 }}
                                            lg={{ offset: 0, span: 0 }}>
                                            <div className={'font-size-lg mt-md text-align-center'}>let和const</div>
                                            <div className={'font-size-xs mt-sm color-grey text-align-center'}>
                                                <span><Icon type={'clock-circle-o'}/>&nbsp;2018-10-2</span>
                                            </div>
                                            <Divider/>
                                        </Col>
                                    </Row>
                                    <ReactMarkdown
                                        className={'markdown-body mt-lg'}
                                        source={testMarkdown}
                                        renderers={{
                                            heading: (object) => {
                                                // TODO 设置 id，并且存入锚点信息
                                            },
                                            code: (object) => {
                                                return (
                                                    <SyntaxHighlighter
                                                        language={object.language}>
                                                        {object.value}
                                                    </SyntaxHighlighter>
                                                );
                                            }
                                        }}/>
                                </Col>
                                <Col
                                    xs={{ offset: 0, span: 0 }}
                                    sm={{ offset: 0, span: 0 }}
                                    md={{ offset: 0, span: 0 }}
                                    lg={{ offset: 2, span: 4 }}>
                                    <Anchor offsetTop={100} className={'bg-color-main'}>
                                        <Anchor.Link href={'/#/post/1#'} title="Basic demo"/>
                                    </Anchor>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </KLayout>
                    <Footer className={'mt-lg'}/>
            </KLayout>
        );
    }

}
