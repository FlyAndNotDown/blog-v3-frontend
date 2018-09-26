/**
 * /tool/log.js
 * @author John Kindem
 */

export class Log {

    /**
     * 开发环境日志
     * @param  {[type]} context 内容
     * @param  {[type]} detail 详情
     */
    static dev(context, detail) {
        console.log(`[dev] ${context}${detail ? `\n${detail}` : ''}`);
    }

    /**
     * 开发环境错误
     * @param  {[type]} context 内容
     * @param  {[type]} reason 原因
     */
    static devError(context, reason) {
        console.log(`[devError] ${context}${reason ? `\n${reason}` : ''}`);
    }

}
