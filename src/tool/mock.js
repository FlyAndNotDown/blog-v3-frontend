/**
 * /tool/mock.js
 * @author John Kindem
 */

import Mock from 'mockjs';
import requestConfig from '../config/request';

/**
 * Mock工具类
 */
export class MockTool {

    /**
     * 开启 Mock
     */
    static start() {
        // /index
        Mock.mock(requestConfig.index, 'get', [{
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
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }, {
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }, {
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }, {
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }, {
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }, {
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }, {
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }, {
            type: 'post',
            title: '测试标题',
            description: '测试描述测试描述测试描述测试描述测试描述测试描述',
            date: '2018-9-26',
            labels: [{
                name: '标签',
                key: 1
            }]
        }]);
    }

}
