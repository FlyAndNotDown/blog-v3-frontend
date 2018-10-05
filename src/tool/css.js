/**
 * /tool/css.js
 * @author John Kindem
 */

/**
 * css 工具类
 * @constructor
 */
export class CssTool {

    /**
     * 根据默认 css 名和输入的 className 拼接出新的 className
     * @param {string} defaultClassName 默认类名
     * @param {string} inputClassName 输入类名
     * @returns {string} 拼接出来的新的className
     */
    static combClassName(defaultClassName, inputClassName) {
        return inputClassName ?
            `${defaultClassName} ${inputClassName}` : defaultClassName;
    }

    /**
     * 拼接 style
     * @param {Object} defaultStyle 默认样式
     * @param {Object} inputStyle 输入样式
     * @returns {Object} 拼接后的样式
     */
    static combStyle(defaultStyle, inputStyle) {
        let style = {};
        if (defaultStyle) {
            for (let key in defaultStyle) {
                if (defaultStyle.hasOwnProperty(key)) {
                    style[key] = defaultStyle[key];
                }
            }
        }
        if (inputStyle) {
            for (let key in inputStyle) {
                if (inputStyle.hasOwnProperty(key)) {
                    style[key] = inputStyle[key];
                }
            }
        }
        return style;
    }

}
