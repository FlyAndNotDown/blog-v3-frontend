/**
 * /tool/password.js
 * @author John Kindem
 */

import sha256 from 'js-sha256';

/**
 * 密码工具
 */
export class PasswordTool {

    /**
     * 加密
     * @param  {string} password 密码
     * @return {string} 密码hash值
     */
    static encode(password, salt) {
        return sha256(sha256(password) + salt);
    }

}
