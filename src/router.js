/**
 * /router.js
 * @author John Kindem
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IndexPage } from './page/index';
import { PostPage } from './page/post';
import { AdminIndexPage } from './page/admin/index';
import { AdminGeneralPage } from './page/admin/general';
import { AdminNewPostPage } from './page/admin/post/new';
import { Error404Page } from './page/error-404';
import { ArchivePage } from './page/archive';
import { LabelPage } from './page/label';
import { UserLoginPage } from './page/user/login';
import { UserRegisterPage } from './page/user/register';
import { MessagePage } from './page/message';

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
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={IndexPage}/>
                    <Route exact path={'/post/key/:postId'} component={PostPage}/>
                    <Route exact path={'/label/:labelId'} component={LabelPage}/>
                    <Route exact path={'/admin/general'} component={AdminGeneralPage}/>
                    <Route exact path={'/admin/post/new'} component={AdminNewPostPage}/>
                    <Route exact path={'/user/login'} component={UserLoginPage}/>
                    <Route exact path={'/user/register'} component={UserRegisterPage}/>
                    <Route exact path={'/archive'} component={ArchivePage}/>
                    <Route exact path={'/label'} component={LabelPage}/>
                    <Route exact path={'/admin'} component={AdminIndexPage}/>
                    <Route exact paht={'/message'} component={MessagePage}/>
                    <Route paht={'*'} component={Error404Page}/>
                </Switch>
            </BrowserRouter>
        );
    }

}
