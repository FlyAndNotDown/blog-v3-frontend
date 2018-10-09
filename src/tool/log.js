/**
 * /tool/log.js
 * @author John Kindem
 */

import mainConfig from '../config/main';

/**
 * 日志工具类
 * @constructor
 */
export class Log {

    /**
     * 开发环境日志
     * @param {string} context 内容
     * @param {string} detail 详情
     */
    static dev(context, detail) {
        if (mainConfig.devMode) console.log(`[dev] ${context}${detail ? `\n${detail}` : ''}`);
    }

    /**
     * 开发环境错误
     * @param {string} context 内容
     * @param {string} reason 原因
     */
    static devError(context, reason) {
        if (mainConfig.devMode) console.log(`[devError] ${context}${reason ? `\n${reason}` : ''}`);
    }

    /**
     * 生产环境日志
     * @param {string} context 内容
     * @param {string} detail 原因
     */
    static log(context, detail) {
        console.log(`[log] ${context}${detail ? `\n${detail}` : ''}`);
    }

    /**
     * 生产环境错误
     * @param {string} context 内容
     * @param {string} reason 原因
     */
    static error(context, reason) {
        console.log(`[error] ${context}${reason ? `\n${reason}` : ''}`);
    }

}
