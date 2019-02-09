/**
 * /page/post.js
 * @author John Kindem
 * @description source file for leave message page component
 * @version v1.0
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';

/**
 * message page component
 * @constructor
 */
export class MessagePage extends React.Component {

    /**
     * constructor of React component
     * @param {Object} props properties of React component
     */
    constructor(props) {
        super(props);

        this.state = {
            loadDown: false
        };
    }

    /**
     * render function
     * @returns {*} render result
     */
    render() {
        // return render result
        return (
            <KLayout colorMode={KLayout.COLOR_MODE_MAIN}>
                
            </KLayout>
        );
    }

}