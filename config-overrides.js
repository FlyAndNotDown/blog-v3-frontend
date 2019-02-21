const { injectBabelPlugin } = require('react-app-rewired');
const rewireUglifyjs = require('react-app-rewire-uglifyjs');

module.exports = function override(config, env) {
    // Ant Design
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );

    // use UglifyJS
    config = rewireUglifyjs(config);

    // dev mode
    config.devtool = 'false';

    return config;
};
