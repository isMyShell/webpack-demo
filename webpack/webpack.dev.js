const merge = require('webpack-merge')
//单入口的wabpack.base.js
// const webpackBaseConfig = require('./webpack.base.js')
//多入口 多出口webpack.multiple.base.js
const webpackBaseConfig = require('./webpack.multiple.base.js')
const webpack = require('webpack')
const devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8000
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}
module.exports = merge(webpackBaseConfig, devConfig)