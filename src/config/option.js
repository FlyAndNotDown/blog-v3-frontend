/**
 * /config/option.js
 * @author John Kindem
 * @version v1.0
 */

import mainConfig from './main';

/**
 * 导出选项
 */
export default mainConfig.devMode ? {
    postPerPage: 10
} : {
    postPerPage: 10
};
