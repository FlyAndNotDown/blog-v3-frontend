/**
 * /tool/color.js
 * @author John Kindem
 * @description source file for color tool
 * @version v1.0
 */

import optionConfig from '../config/option';

const colorPrefebs = optionConfig.colorPrefebs;

/**
 * ColorTool
 * @constructor
 * @description some tool function for colors
 */
export class ColorTool {

    /**
     * __getRandomColor
     * @private
     * @description get a random color from exist availabel color list
     * @return {string} a random color
     */
    static __getRandomColor() {
        return labelColors[Math.floor(Math.random() * labelColors.length)];
    }

    /**
     * getFirstRandomColor
     * @description get a random color from exist availabel color array
     * @return {string} a random color
     */
    static getFirstRandomColor() {
        return LabelTool.__getRandomColor();
    }

    /**
     * getNextRandomColor
     * @description get a random color from color list, but not as same as prev
     * @param {string} prevColor prev color
     * @return {string} a random color
     */
    static getNextRandomColor(prevColor) {
        let randomColor = LabelTool.__getRandomColor();
        while (randomColor === prevColor) {
            randomColor = LabelTool.__getRandomColor();
        }
        return randomColor;
    }

}
