const merge = require('webpack-merge')
//单入口的wabpack.base.js
// const webpackBaseConfig = require('./webpack.base.js')
//多入口 多出口webpack.multiple.base.js
const webpackBaseConfig = require('./webpack.multiple.base.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const prdConfig = {
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      sourceMap:true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}
module.exports = merge(webpackBaseConfig, prdConfig)