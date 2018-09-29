/**
 * /tool/mock.js
 * @author John Kindem
 */

import Mock from 'mockjs';
import requestConfig from '../config/request';

/**
 * Url工具类
 */
class UrlTool {

    /**
     * url中是否带有参数
     * @param  {string} url url
     * @return {bool}       是否带有参数
     */
    static haveParam(url) {
        return url.indexOf('?') !== -1;
    }

    /**
     * 获取参数对象
     * @param  {string} url url
     * @return {object}     参数
     */
    static getParam(url) {
        let string = url.split('?')[1];
        let keyValues = string.splice('&');
        let params = {};
        keyValues.forEach((keyValue) => {
            let temp = keyValue.split('=');
            params[temp[0]] = temp[1];
        });
    }

}

/**
 * Mock工具类
 */
export class MockTool {

    /**
     * 开启 Mock
     */
    static start() {
        // home
        Mock.mock(requestConfig.home, 'get', [
            {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                type: 'emotion',
                context: '今天真是开心的一天呢',
                date: '2018-9-26'
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }, {
                postKey: 1,
                type: 'post',
                title: '测试标题',
                description: '测试描述测试描述测试描述测试描述测试描述测试描述',
                date: '2018-9-26',
                labels: [{
                    name: '标签',
                    key: 1
                }]
            }
        ]);
        // admin
        Mock.mock(requestConfig.admin, 'get', (options) => {
            if (!UrlTool.haveParam(options.url)) {
                return {
                    success: false,
                    reason: 'params error'
                };
            }
            let paramsObject = UrlTool.getParam(options.url);
            if (!paramsObject.username || paramsObject.username !== 'admin') {
                return {
                    success: false,
                    reason: 'admin account is not exist'
                };
            }
            return {
                success: true,
                salt: '4c37a5b2cc0e'
            };
        });
        Mock.mock(requestConfig.admin, 'post', (options) => {
            // TODO
        });
    }

}
