/**
 * /page/work.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { Spin } from 'antd';

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

        // return the render result
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>
                
            </KLayout>
        );
    }

}
