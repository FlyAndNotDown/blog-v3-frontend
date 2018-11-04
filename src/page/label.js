/**
 * /page/label.js
 * @author John Kindem
 */

import React from 'react';
import { KLayout } from '../component/tool/k-layout';
import { Row, Col, Spin } from 'antd';
import { NavHeader } from '../component/nav-header';
import { Footer } from '../component/footer';
import navHeaderBgImg from '../img/header-bg-3.jpg';

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

        this.state = {};
    }

    /**
     * render function
     * @return {*} result of render
     */
    render() {
        // main layout to show labels info
        const mainLayout = (
            <KLayout
                colorMode={KLayout.COLOR_MODE_MAIN}
                className={'z-index-1 p-xl'}>
                <Row>
                    <Col>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
                </Row>
            </KLayout>
        );

        // nav header content
        const navHeaderContent = (
            <div>
                <div className={'font-size-xl color-white'}>标签</div>
                <div className={'font-size-md color-white'}>Find something interesting</div>
            </div>
        );

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
                colorMode={KLayout.COLOR_MODE_MAIN}>
                <NavHeader bgImg={navHeaderBgImg} content={navHeaderContent}/>
                {mainLayout}
                <Footer/>
            </KLayout>
        );
    }

}
