/**
 * /page/label.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { Row, Col, Spin, Tag, Divider } from 'antd';
import { NavHeader } from '../component/nav-header';
import { Footer } from '../component/footer';
import navHeaderBgImg from '../img/header-bg-3.jpg';
import axios from 'axios';
import { LabelTool } from '../tool/label';
import requestConfig from '../config/request';
import { Log } from '../tool/log';
import regexConfig from '../config/regex';
import { LabelBlockList } from '../component/block/label-block-list';

/**
 * LabelPage
 * @constructor
 * @description the component of label page
 */
export class LabelPage extends React.Component {

    /**
     * constructor of component
     * @param {Object} props properties of component
     */
    constructor(props) {
        super(props);

        this.state = {
            labelsLoading: true,

            labels: [],

            selectedLabel: null,
            labelPostsLoading: false,
            labelPosts: null
        };

        this.__lastLabelColor = null;
    }

    /**
     * a life function of React, to do something after document ready
     */
    async componentDidMount() {
        let response;
        let data;

        // get the page params
        let labelId = this.props.match.params.labelId;

        // do the request to get all the label info
        try {
            response = await axios.get(requestConfig.label, {
                params: {
                    type: 'all'
                }
            });
        } catch (e) {
            Log.devError(`get ${requestConfig.label}`, e);
            return this.props.history.push('/err/404');
        }

        // if success
        // log it
        Log.dev(`get ${requestConfig.label} OK`);

        // deal data
        response = response || {};
        data = response.data || {};

        let labels = data.labels || null;

        // safety
        if (!labels) {
            return this.props.history.push('/err/404');
        }

        // set label color
        for (let i = 0; i < labels.length; i++) {
            if (i === 0) {
                this.__lastLabelColor = LabelTool.getFirstRandomColor();
                labels[i].color = this.__lastLabelColor;
            } else {
                this.__lastLabelColor = LabelTool.getNextRandomColor(this.__lastLabelColor);
                labels[i].color = this.__lastLabelColor;
            }
        }

        // save it to state
        setTimeout(() => {
            this.setState({
                labels: labels,
                labelsLoading: false
            });
        }, 300);

        // judge if the page params is a number
        // if yes, get the post which have the label
        if (labelId.match(regexConfig.normal.naturalNumber)) {
            this.setState({
                selectedLabel: parseInt(labelId, 10),
                labelPostsLoading: true
            });

            // start loading
            // do the request to get post which have this label
            try {
                response = await axios.get(requestConfig.post, {
                    params: {
                        type: 'label',
                        labelId: labelId
                    }
                });
            } catch (e) {
                Log.devError(`get ${requestConfig.post}`, e);
                return this.props.history.push('/err/404');
            }

            // if success
            // log it
            Log.dev(`get ${requestConfig.label} OK`);

            // deal data
            response = response || {};
            data = response.data || {};

            let posts = data.posts || null;

            // safety protect
            if (!posts) {
                return this.props.history.push('/err/404');
            }

            // save it to state
            setTimeout(() => {
                this.setState({
                    labelPostsLoading: false,
                    labelPosts: posts
                });
            }, 300);
        }
    }

    /**
     * componentWillReceiveProps
     * @description a life function, to do something before get new props
     * @param {Object} nextProps new props
     */
    async componentWillReceiveProps(nextProps) {
        let response;
        let data;

        // get the new page params
        let labelId = nextProps.match.params.labelId;

        // check if there is new selectedLabel
        if (labelId.match(regexConfig.normal.naturalNumber)) {
            // if true, update the selectedLabel and its posts
            this.setState({
                selectedLabel: parseInt(labelId, 10),
                labelPostsLoading: true
            });

            // start loading
            // do the request to get post which have this label
            try {
                response = await axios.get(requestConfig.post, {
                    params: {
                        type: 'label',
                        labelId: labelId
                    }
                });
            } catch (e) {
                Log.devError(`get ${requestConfig.post}`, e);
                return this.props.history.push('/err/404');
            }

            // if success
            // log it
            Log.dev(`get ${requestConfig.label} OK`);

            // deal data
            response = response || {};
            data = response.data || {};

            let posts = data.posts || null;

            // safety protect
            if (!posts) {
                return this.props.history.push('/err/404');
            }

            // save it to state
            setTimeout(() => {
                this.setState({
                    labelPostsLoading: false,
                    labelPosts: posts
                });
            }, 300);
        } else {
            // else, where it's 'all' and other
            // update all the state
            let response;
            let data;

            // get the page params
            let labelId = this.props.match.params.labelId;

            // do the request to get all the label info
            try {
                response = await axios.get(requestConfig.label, {
                    params: {
                        type: 'all'
                    }
                });
            } catch (e) {
                Log.devError(`get ${requestConfig.label}`, e);
                return this.props.history.push('/err/404');
            }

            // if success
            // log it
            Log.dev(`get ${requestConfig.label} OK`);

            // deal data
            response = response || {};
            data = response.data || {};

            let labels = data.labels || null;

            // safety
            if (!labels) {
                return this.props.history.push('/err/404');
            }

            // set label color
            for (let i = 0; i < labels.length; i++) {
                if (i === 0) {
                    this.__lastLabelColor = LabelTool.getFirstRandomColor();
                    labels[i].color = this.__lastLabelColor;
                } else {
                    this.__lastLabelColor = LabelTool.getNextRandomColor(this.__lastLabelColor);
                    labels[i].color = this.__lastLabelColor;
                }
            }

            // save it to state
            setTimeout(() => {
                this.setState({
                    labels: labels,
                    labelsLoading: false,
                    selectedLabel: null,
                    labelPostsLoading: false,
                    labelPosts: null
                });
            }, 300);
        }
    }

    /**
     * labelsMapFunc
     * @description map function to show label info
     * @param {{id: number, name: string}} label label object
     * @return {*} JSX render result
     */
    labelsMapFunc = (label, key) => {
        // return JSX render result
        return (
            <Tag
                color={label.color}
                key={key}
                onClick={() => {
                    this.props.history.push(`/label/${label.id}`);
                }}>
                {label.name}
            </Tag>
        );
    };

    /**
     * render function
     * @return {*} result of render
     */
    render() {
        // label post loading row
        const labelPostLoadingRow = (
            <Row>
                <Col>
                    <Spin/>
                </Col>
            </Row>
        );

        // label posts block list row
        const labelPostsRow = (
            <div>
                <LabelBlockList
                    posts={this.state.labelPosts}/>
            </div>
        );

        // main layout to show labels info
        const mainLayout = (
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
                        xxl={{ offset: 5, span: 14 }}>
                        <br/><br/>
                        <div>
                            <h1>标签一览</h1>
                            <div className={'lh-40px'}>
                                {this.state.labels.map(this.labelsMapFunc)}
                            </div>
                        </div>
                        <br/>
                        <Divider/>
                        <br/>
                        {this.state.labelPostsLoading ? labelPostLoadingRow :
                            this.state.labelPosts && labelPostsRow
                        }
                    </Col>
                </Row>
            </KLayout>
        );

        // nav header content
        const navHeaderContent = (
            <div>
                <div className={'font-size-xl color-white'}>寻找你感兴趣的内容</div>
                <div className={'font-size-md color-white'}>Find something interesting</div>
            </div>
        );

        // labels loading layout
        const labelsLoadingLayout = (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <div className={'h-40vh'}></div>
                <Spin/>
            </KLayout>
        );

        // return the render result
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}>
                {!this.state.labelsLoading && (<NavHeader bgImg={navHeaderBgImg} content={navHeaderContent}/>)}
                {!this.state.labelsLoading ? mainLayout : labelsLoadingLayout}
                {!this.state.labelsLoading && (<Footer/>)}
            </KLayout>
        );
    }

}
