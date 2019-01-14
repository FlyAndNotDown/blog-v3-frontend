/**
 * /component/gadget/loading-layout.js
 * @author John Kindem
 * @version v1.0
 */

import React from 'react';
import { Spin } from 'antd';
import { KLayout } from '../tool/k-layout';

/**
 * LoadingLayout
 * @constructor
 */
export class LoadingLayout extends React.Component {

    /**
     * constructor of react component
     * @param {Object} props properties of react component
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * render function
     * @returns {Object} jsx render result
     */
    render() {
        return (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                <div className={'h-40vh'}></div>
                <Spin/>
            </KLayout>
        );
    }

}
