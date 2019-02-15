/**
 * /config/request.js
 * @author John Kindem
 */

import mainConfig from './main';

/**
 * 公共url前缀
 * @type {string}
 */
export const commonUrlPrefix = mainConfig.devMode ? 'http://localhost:30000/request/blog' : '/request/blog';

/**
 * 请求url配置
 */
export default {
    home: `${commonUrlPrefix}/home`,
    post: `${commonUrlPrefix}/post`,
    adminLogin: `${commonUrlPrefix}/admin/login`,
    archive: `${commonUrlPrefix}/archive`,
    label: `${commonUrlPrefix}/label`,
    comment: `${commonUrlPrefix}/comment`,
    userLocal: `${commonUrlPrefix}/user/local`,
    userLogin: `${commonUrlPrefix}/user/login`,
    message: `${commonUrlPrefix}/message`
};
