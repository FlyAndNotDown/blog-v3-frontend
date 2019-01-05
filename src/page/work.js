/**
 * /page/work.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { Spin, Row, Col } from 'antd';

/**
 * page of work
 * @constructor
 */
export class WorkPage extends React.Component {

    /**
     * constructor
     * @param {Object} props properties of React component
     */
    constructor(props) {
        super(props);

        this.state = {
            // if page data load down
            loadDown: false
        };
    }

    /**
     * a life function of React component
     */
    async componentDidMount() {
        // TODO
        this.setState({
            loadDown: true
        });
    }

    /**
     * render function of React component
     * @returns {*} JSX render result
     */
    render() {
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
                        xl={{ offset: 3, span: 18 }}
                        xxl={{ offset: 5, span: 14 }}>

                    </Col>
                </Row>
            </KLayout>
        );

        // nav header content
        const navHeaderContent = (
            <div>
                <div className={'font-size-xl color-white'}></div>
                <div className={'font-size-md color-white'}></div>
            </div>
        );

        // return the render result
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                
            </KLayout>
        );
    }

}
