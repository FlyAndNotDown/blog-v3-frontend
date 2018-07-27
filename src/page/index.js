import React from 'react';
import { Layout } from 'antd';
import { Header } from "../component/nav/header";

/**
 * 页面组件 - /
 */
export class IndexPage extends React.Component {

    render() {

        return (
            <Layout>
                <Header/>
            </Layout>
        );

    }

}