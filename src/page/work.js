/**
 * /page/work.js
 * @author John Kindem
 * @description source file for work page
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { Spin, Row, Col, List, Avatar, Icon } from 'antd';
import navHeaderBgImg from '../img/header-bg-4.png';
import { Footer } from '../component/footer';
import { NavHeader } from '../component/nav-header';
import { Link } from 'react-router-dom';
import { BlankLink } from '../component/tool/blank-link';
import { ColorTool } from '../tool/color';

const { Item } = List;
const { Meta } = Item;

/**
 * page of work
 * @constructor
 */
export class WorkPage extends React.Component {

    // slogans
    static __WORK_PAGE__SLOGAN_MAIN = '求知若渴,虚怀若愚';
    static __WORK_PAGE__SLOGAN_SECOND = 'Stay hungery, Stay foolish';
    // works set
    static __WORK_PAGE__WORKS_SET = '作品集';

    /**
     * constructor
     * @param {Object} props properties of React component
     */
    constructor(props) {
        super(props);

        // last color
        this.__lastAvatarColor = null;

        this.state = {
            // if page data load down
            loadDown: false,
            // works data
            works: [{
                logo: {
                    type: 'char',
                    char: '编'
                },
                title: 'C语言(缩减版)编译器前端',
                key: 20,
                description: '一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端',
                github: ''
            }, {
                logo: {
                    type: 'char',
                    char: '编'
                },
                title: 'C语言(缩减版)编译器前端',
                key: 20,
                description: '一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端',
                github: ''
            }, {
                logo: {
                    type: 'char',
                    char: '编'
                },
                title: 'C语言(缩减版)编译器前端',
                key: 20,
                description: '一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端',
                github: ''
            }]
        };
    }

    /**
     * a life function of React component
     */
    async componentDidMount() {
        // TODO
        setTimeout(() => {
            this.setState({
                loadDown: true,
                works: [{
                    logo: {
                        type: 'char',
                        char: '编'
                    },
                    title: 'C语言(缩减版)编译器前端',
                    key: 20,
                    description: '一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端',
                    github: ''
                }, {
                    logo: {
                        type: 'char',
                        char: '编'
                    },
                    title: 'C语言(缩减版)编译器前端',
                    key: 20,
                    description: '一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端',
                    github: ''
                }, {
                    logo: {
                        type: 'char',
                        char: '编'
                    },
                    title: 'C语言(缩减版)编译器前端',
                    key: 20,
                    description: '一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端一个简单的编译器前端',
                    github: ''
                }]
            });
        }, 500);
    }

    /**
     * render function of work list
     * @return {*} render result
     */
    workListItemRenderFunc = (item) => {
        // set the avatar background color
        this.__lastAvatarColor = item.logo.type === 'char' ?
            (this.__lastAvatarColor ?
                ColorTool.getFirstRandomColor() :
                ColorTool.getNextRandomColor(this.__lastAvatarColor)
            ) : this.__lastAvatarColor;

        // return the render result
        return (
            <Item>
                <Meta
                    avatar={
                        item.logo.type === 'char' ?
                            (<Avatar style={{
                                backgroundColor: this.__lastAvatarColor
                            }}>{item.logo.char}</Avatar>) :
                            (<Avatar src={item.logo.src}/>)
                    }
                    title={
                        <h3>
                            <Link className={'color-dark float-left'} to={`/post/key/${item.key}`}>{item.title}</Link>
                            &nbsp;
                            <Link className={'color-dark float-right pr-sm'} to={item.github}><Icon type={'github'}/></Link>
                        </h3>
                    }
                    description={item.description}/>
            </Item>
        );
    };

    /**
     * render function of React component
     * @returns {*} JSX render result
     */
    render() {
        // TODO background color

        // loading layout
        const loadingLayout = (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <div className={'h-40vh'}></div>
                <Spin/>
            </KLayout>
        );

        // main layout
        const bodyLayout = (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}
                className={'z-index-1 p-xl'}>
                <Row>
                    <Col
                        xs={{ offset: 1, span: 22 }}
                        sm={{ offset: 1, span: 22 }}
                        md={{ offset: 2, span: 20 }}
                        lg={{ offset: 2, span: 20 }}
                        xl={{ offset: 5, span: 14 }}
                        xxl={{ offset: 7, span: 10 }}>
                        <h1 className={'mt-lg'}>{WorkPage.__WORK_PAGE__WORKS_SET}</h1>
                        <List
                            className={'mt-lg'}
                            itemLayout={'horizontal'}
                            dataSource={this.state.works}
                            renderItem={this.workListItemRenderFunc}/>
                    </Col>
                </Row>
            </KLayout>
        );

        // nav header content
        const navHeaderContent = (
            <div>
                <div className={'font-size-xl color-white'}>{WorkPage.__WORK_PAGE__SLOGAN_MAIN}</div>
                <div className={'font-size-md color-white'}>{WorkPage.__WORK_PAGE__SLOGAN_SECOND}</div>
            </div>
        );

        // return the render result
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                {this.state.loadDown && (
                        <NavHeader
                            bgImg={navHeaderBgImg}
                            content={navHeaderContent}/>
                    )
                }
                {this.state.loadDown ? bodyLayout : loadingLayout}
                {this.state.loadDown && <Footer/>}
            </KLayout>
        );
    }

}
