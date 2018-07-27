/**
 * css 工具
 */
export class CssTool {

    /**
     * 根据默认 css 名和输入的 className 拼接出新的 className
     * @param defaultClassName
     * @param inputClassName
     */
    static combClassName(defaultClassName, inputClassName) {

        return inputClassName ?
            `${defaultClassName} ${inputClassName}` : defaultClassName;

    }

    /**
     * 拼接 style
     * @param defaultStyle
     * @param inputStyle
     */
    static combStyle(defaultStyle, inputStyle) {

        let style = {};

        for (let key in defaultStyle) {
            if (defaultStyle.hasOwnProperty(key)) {
                style[key] = defaultStyle[key];
            }
        }

        for (let key in inputStyle) {
            if (inputStyle.hasOwnProperty(key)) {
                style[key] = inputStyle[key];
            }
        }

        return style;

    }

}