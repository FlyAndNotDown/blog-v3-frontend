/**
 * /tool/mock.js
 * @author John Kindem
 */

import Mock from 'mockjs';

/**
 * Mock工具类
 */
export class MockTool {

    /**
     * 开启 Mock
     */
    static start() {
        Mock.mock();
    }

}
