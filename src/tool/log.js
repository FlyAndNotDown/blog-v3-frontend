/**
 * /tool/log.js
 * @author John Kindem
 */

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
        console.log(`[dev] ${context}${detail ? `\n${detail}` : ''}`);
    }

    /**
     * 开发环境错误
     * @param {string} context 内容
     * @param {string} reason 原因
     */
    static devError(context, reason) {
        console.log(`[devError] ${context}${reason ? `\n${reason}` : ''}`);
    }

}
