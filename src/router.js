/**
 * /router.js
 * @author John Kindem
 */

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { IndexPage } from './page/index';
import { PostPage } from './page/post';
import { AdminIndexPage } from './page/admin/index';
import { AdminGeneralPage } from './page/admin/general';
import { AdminNewPostPage } from './page/admin/post/new';
import { Error404Page } from './page/error-404';

/**
 * 主路由组件
 */
export class MainRouter extends React.Component {

    /**
     * 渲染函数
     * @return {JSX} 渲染结果
     */
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                    <Route exact path={'/admin'} component={AdminIndexPage}/>
                    <Route exact path={'/admin/general'} component={AdminGeneralPage}/>
                    <Route exact path={'/admin/post/new'} component={AdminNewPostPage}/>
                    <Route exact path={'/post/:postId'} component={PostPage}/>
                    <Route exact path={'/:page'} component={IndexPage}/>
                    <Route paht={'*'} component={Error404Page}/>
                </Switch>
            </HashRouter>
        );
    }

}
