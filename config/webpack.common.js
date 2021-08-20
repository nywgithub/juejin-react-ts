const path = require('path');
var APP_DIR = path.resolve(__dirname, '../src');//_dirname 代表当前文件的目录绝对路径
var BUILD_DIR = path.resolve(__dirname, '../dist');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//样式集中在common.css中打包出来
const HtmlWebpackPlugin = require("html-webpack-plugin");
const entryDir = path.resolve(APP_DIR, 'index.jsx');//入口文件

module.exports = {
    entry: entryDir,

    output: {
        //输出路径
        path: BUILD_DIR,
        filename: 'js/[name].js?[chunkhash:8]',
        chunkFilename: 'js/[name].js?[chunkhash:8]'
    },
    externals: {
       
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/i,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/i,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                            //modifyVars: theme
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]?[contenthash:8]',
                    outputPath: './imgs',
                    publicPath: "/dist/imgs",
                    //publicPath: "//www.micstatic.com/xxx/imgs",
                    //emitFile:false
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].css?[hash:8]',
            chunkFilename: "css/[name].css?[hash:8]"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            templateParameters: {
                title: "TS-Webpack-React"
            },
            favicon: null
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.less', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@CSS': path.resolve(__dirname, '../src/css'),
            '@IMG': path.resolve(__dirname, '../src/imgs'),
            '@CP': path.resolve(__dirname, '../src/common/components'),
        }
    },
    optimization: {

    },
}