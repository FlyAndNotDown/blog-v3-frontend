/**
 * /tool/mock.js
 * @author John Kindem
 */

import Mock from 'mockjs';
import requestConfig from '../config/request';

/**
 * 测试 Markdown 内容
 * @type {string}
 */
const testMarkdown = `
# Live demo
Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below
> This blockquote will change based on the HTML settings above. [testLink](https://github.github.com/gfm/)

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
`;

/**
 * Url工具类
 * @constructor
 */
class UrlTool {

    /**
     * url中是否带有参数
     * @param {string} url url
     * @returns {bool} 是否带有参数
     */
    static haveParam(url) {
        return url.indexOf('?') !== -1;
    }

    /**
     * 获取参数对象
     * @param {string} url url
     * @returns {Object} 参数对象
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
     * @param {string} url url
     * @returns {*} 正则表达式
     */
    static getRegex(url) {
        return new RegExp(`^${url}[?=/a-zA-Z0-9]*`);
    }

}

/**
 * Http Body 工具类
 * @constructor
 */
class BodyTool {

    /**
     * 获取 body 的 json 对象
     * @returns {Object} body 的 json 对象
     */
    static getBody(body) {
        return JSON.parse(body);
    }

}

/**
 * Mock工具类
 * @constructor
 */
export class MockTool {

    /**
     * 开启 Mock 功能
     */
    static start() {
        // home
        Mock.mock(UrlTool.getRegex(requestConfig.home), 'get', {
            blocks: [
                {
                    postKey: 1,
                    type: 'post',
                    title: '测试标题',
                    description: '这是一段测试代码\n```javascript\nlet a = 10;\n```\n',
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
        Mock.mock(UrlTool.getRegex(requestConfig.adminLogin), 'get', options => {
            if ((UrlTool.getParam(options.url).username || '') === 'admin') {
                return {
                    salt: '45c8b12f3e1a'
                };
            }
            return {
                salt: null
            };
        });
        Mock.mock(UrlTool.getRegex(requestConfig.adminLogin), 'post', options => {
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
        // post
        Mock.mock(UrlTool.getRegex(requestConfig.post), 'get', {
            title: 'let和const',
            time: '2018-10-2',
            labels: [{
                name: 'JavaScript',
                key: 1
            }, {
                name: '前端',
                key: 2
            }, {
                name: '积累',
                key: 3
            }, {
                name: '语法',
                key: 4
            }, {
                name: '全栈',
                key: 5
            }],
            body: testMarkdown
        });
        // archive
        Mock.mock(UrlTool.getRegex(requestConfig.archive), 'get', [{
            year: 2018,
            children: [{
                month: 10,
                children: [{
                    day: 5,
                    title: 'let和const',
                    key: 1
                }, {
                    day: 5,
                    title: 'let和const',
                    key: 1
                }, {
                    day: 5,
                    title: 'let和const',
                    key: 1
                }, {
                    day: 5,
                    title: 'let和const',
                    key: 1
                }]
            }, {
                month: 10,
                children: [{
                    day: 5,
                    title: 'let和const',
                    key: 1
                }, {
                    day: 5,
                    title: 'let和const',
                    key: 1
                }, {
                    day: 5,
                    title: 'let和const',
                    key: 1
                }, {
                    day: 5,
                    title: 'let和const',
                    key: 1
                }]
            }]
        }]);
    }

}
