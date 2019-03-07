/**
 * /router.js
 * @author John Kindem
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IndexPage } from './page/index';
import { PostPage } from './page/post';
import { Error404Page } from './page/error-404';
import { ArchivePage } from './page/archive';
import { LabelPage } from './page/label';
import { UserLoginPage } from './page/user/login';
import { UserRegisterPage } from './page/user/register';
import { MessagePage } from './page/message';
import { FriendPage } from './page/friend';
import { AboutPage } from './page/about';
import { UserGithubPage } from './page/user/github';
import { AdminIndexPage } from './page/admin';
import { AdminLoginPage } from './page/admin/login';

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
                    <Route exact path={'/user/login'} component={UserLoginPage}/>
                    <Route exact path={'/user/register'} component={UserRegisterPage}/>
                    <Route exact path={'/user/github'} component={UserGithubPage}/>
                    <Route exact path={'/admin'} component={AdminIndexPage}/>
                    <Route exact path={'/admin/login'} component={AdminLoginPage}/>
                    <Route exact path={'/archive'} component={ArchivePage}/>
                    <Route exact path={'/label'} component={LabelPage}/>
                    <Route exact path={'/friend'} component={FriendPage}/>
                    <Route exact path={'/about'} component={AboutPage}/>
                    <Route exact paht={'/message'} component={MessagePage}/>
                    <Route paht={'*'} component={Error404Page}/>
                </Switch>
            </BrowserRouter>
        );
    }

}
