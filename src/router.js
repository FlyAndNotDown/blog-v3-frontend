import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { IndexPage } from "./page";
import { PostPage } from "./page/post";

/**
 * 主路由组件
 */
export class MainRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                    <Route exact path={'/post/:postId'} component={PostPage}/>
                </Switch>
            </HashRouter>
        );
    }

}