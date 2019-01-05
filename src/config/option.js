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
    postPerPage: 10,
    labelColors: [
        '#FFD700',
        '#FF6A6A',
        '#C6E2FF',
        '#E6E6FA',
        '#C9C9C9',
        '#98FB98',
        '#8470FF',
        '#66CD00',
        '#48D1CC',
        '#1C86EE'
    ],
    colorPrefebs: [
        '#FFD700',
        '#FF6A6A',
        '#C6E2FF',
        '#E6E6FA',
        '#C9C9C9',
        '#98FB98',
        '#8470FF',
        '#66CD00',
        '#48D1CC',
        '#1C86EE'
    ]
} : {
    postPerPage: 10,
    labelColors: [
        '#FFD700',
        '#FF6A6A',
        '#C6E2FF',
        '#E6E6FA',
        '#C9C9C9',
        '#98FB98',
        '#8470FF',
        '#66CD00',
        '#48D1CC',
        '#1C86EE'
    ],
    colorPrefebs: [
        '#FFD700',
        '#FF6A6A',
        '#C6E2FF',
        '#E6E6FA',
        '#C9C9C9',
        '#98FB98',
        '#8470FF',
        '#66CD00',
        '#48D1CC',
        '#1C86EE'
    ]
};
