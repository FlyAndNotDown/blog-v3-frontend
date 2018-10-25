/**
 * /component/tool/blank-link.js
 * @author John Kindem
 * @version v1.0
 */

import React from 'react';

/**
 * BlankLink
 * @description the packing of '<a href='...' target='__blank'></a>'
 * @property {string} className the CSS class names of component
 * @property {Object} style the inline CSS style of component
 * @property {string} to href of the link
 * @property {Object} children children between two labels
 */
export class BlankLink extends React.Component {

    /**
     * the constructor of component
     * @param {Object} props the properties of component
     */
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     * main rendering function of component
     * @return {*} the JSX model of component
     */
    render() {
        return (
            <a
                className={this.props.className}
                style={this.props.style}
                href={this.props.to}
                target={'__blank'}>
                {this.props.children}
            </a>
        );
    }

}
