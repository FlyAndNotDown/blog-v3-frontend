/**
 * /index.js
 * @author John Kindem
 */

import React from 'react';
import ReactDom from 'react-dom';
import { MainRouter } from "./router";
import { MockTool } from "./tool/mock";
import mainConfig from './config/main';
import { Log } from './tool/log';

// 导入全局 css
import './css/css';

// 开发模式
if (mainConfig.devMode) {
    Log.dev('dev mode toggled');
    // 开启 Mock
    MockTool.start();
}

/**
 * 渲染主路由，构成单页应用
 */
ReactDom.render(
    <MainRouter/>,
    document.getElementById('root')
);
