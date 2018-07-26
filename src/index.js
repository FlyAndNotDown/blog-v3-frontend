import React from 'react';
import ReactDom from 'react-dom';
import { MainRouter } from "./router";

// 导入全局 css
import './css/css';

/**
 * 渲染主路由，构成单页应用
 */
ReactDom.render(
    <MainRouter/>,
    document.getElementById('root')
);