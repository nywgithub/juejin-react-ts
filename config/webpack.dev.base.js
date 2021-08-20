const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
var BUILD_DIR = path.resolve(__dirname, '../dist');


module.exports = merge(common, {
    plugins: [
        
        
    ],
    output: {
        path: BUILD_DIR,
        publicPath: "dist/",
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    mode: "development",
    devtool: '#eval-source-map',
    devServer: {
        port: 3333,
        host: '127.0.0.1',
        hot: true,
        disableHostCheck: true,
    },
});