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
        let keyValues = string.split('&');
        let params = {};
        keyValues.forEach((keyValue) => {
            let temp = keyValue.split('=');
            params[temp[0]] = temp[1];
        });
        return params;
    }

    /**
     * 获取匹配任意url子域的正则
     * @param  {string} url url
     * @return {regex}     正则表达式
     */
    static getRegex(url) {
        return new RegExp(`^${url}[\\?=/a-zA-Z0-9]*`);
    }

}

/**
 * Http Body 工具类
 */
class BodyTool {

    /**
     * 获取 body 的 json 对象
     * @return {object} body 的 json 对象
     */
    static getBody(body) {
        return JSON.parse(body);
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
        Mock.mock(requestConfig.home, 'get', {
            blocks: [
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
            ]
        });
        // admin
        Mock.mock(UrlTool.getRegex(requestConfig.admin), 'get', (options) => {
            if ((UrlTool.getParam(options.url).username || '') === 'admin') {
                return {
                    salt: '45c8b12f3e1a'
                };
            }
            return {
                salt: null
            };
        });
        Mock.mock(UrlTool.getRegex(requestConfig.admin), 'post', (options) => {
            let body = BodyTool.getBody(options.body);
            if (body.username === 'admin' &&
                body.password === 'e1efa1257b4cb3cc4a85c904869ea31930ca2629368f5c22bef6cac1f764f69e')
                return {
                    success: true
                };
            return {
                success: false
            };
        });
    }

}
