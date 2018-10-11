/**
 * /config/regex.js
 * @author John Kindem
 */

/**
 * 导出正则规则
 */
export default {
    admin: {
        username: /[0-9a-z]{6,16}/,
        password: /[0-9a-z@#]{6,16}/,
        passwordHash: /[0-9a-f]{64,64}/
    },
    post: {
        title: /^.{1,100}$/,
        description: /^.{1,1000}$/
    }
};