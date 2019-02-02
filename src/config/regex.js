/**
 * /config/regex.js
 * @author John Kindem
 */

/**
 * 导出正则规则
 */
export default {
    normal: {
        naturalNumber: /^[1-9]\d*|0$/
    },
    admin: {
        username: /[0-9a-z]{6,16}/,
        password: /[0-9a-z@#]{6,16}/,
        passwordHash: /[0-9a-f]{64,64}/
    },
    post: {
        title: /^.{1,100}$/,
        description: /^.{1,1000}$/
    },
    user: {
        // username: /^[0-9a-z]{6,16}$/,
        email: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
        password: /^[0-9a-zA-Z@#]{6,16}$/,
        passwordHash: /^[0-9a-f]{64,64}$/,
        salt: /^[0-9a-f]{12}$/,
        nickname: /^([A-Za-z0-9]{4,20})|([\u4e00-\u9fa5]{2,10})$/
    },
};
