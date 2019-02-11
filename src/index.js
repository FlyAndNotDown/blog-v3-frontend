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
import moment from 'moment';
import axios from 'axios';
import commentJSChinesePackage from './config/moment-zh';

// import all css
import './css/css';

// set cookies function in axios
axios.defaults.withCredentials = true;

// judge dev mode
if (mainConfig.devMode) {
    Log.dev('dev mode toggled', `mock status: ${mainConfig.mock}`);
    if (mainConfig.mock) {
        // start mock
        MockTool.start();
    }
}

// set moment language to chinese
moment.locale('zh', commentJSChinesePackage);

/**
 * render main router component
 */
ReactDom.render(
    <MainRouter/>,
    document.getElementById('root')
);
