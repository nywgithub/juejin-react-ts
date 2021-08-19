const merge = require('webpack-merge');
const devBase = require('./webpack.dev.base.js');
const webpack = require('webpack');

module.exports = merge(devBase, {
    plugins: [
        new webpack.DefinePlugin({
            __IS_MOCK: false,
        }),
    ],
});