const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');

module.exports = merge(common, {
  mode: "production",
  performance: {
    maxEntrypointSize: 400000,
    hints: "warning"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true//清除console语句
          }
        }
      })
    ],
    runtimeChunk: {
      name: "runtime",
    },
    namedChunks: true,
    moduleIds: "hashed",
    splitChunks: {
      chunks: 'all',
      minSize: 1,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/].*\.(js|jsx|ts|tsx)$/,
          priority: -10
        },
        common: {
          name: "common",
          test: /[\\/]common[\\/].*\.(js|jsx|ts|tsx)$/,
          minSize: 1,
          priority: -10
        },
        default: false
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __IS_MOCK: false,
    }),
  ]
});