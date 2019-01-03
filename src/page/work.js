/**
 * /page/work.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';

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

        this.state = {};
    }

    /**
     * a life function of React component
     */
    async componentDidMount() {
        // TODO
    }

    /**
     * render function of React component
     * @returns {*} JSX render result
     */
    render() {

        // return the render result
        return (
            <KLayout
                colorMode={KLayout.COLOR_MODE_NONE}>

            </KLayout>
        );
    }

}
