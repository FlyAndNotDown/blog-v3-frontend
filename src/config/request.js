/**
 * /config/request.js
 * @author John Kindem
 */

/**
 * 公共url前缀
 * @type {string}
 */
export const commonUrlPrefix = '/request/blog';

/**
 * 请求url配置
 */
export default {
    home: `${commonUrlPrefix}/home`,
    post: `${commonUrlPrefix}/post`,
    admin: `${commonUrlPrefix}/admin`,
    archive: `${commonUrlPrefix}/archive`
};
