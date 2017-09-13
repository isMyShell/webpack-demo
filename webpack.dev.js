const path = require('path')
const merge = require("webpack-merge")
const common = require('./webpack.common.js')
const webpack = require('webpack')
module.exports = merge(common,{
  devtool: 'inline-source-map',
  devServer: {
    hot:true,
    // contentBase: './dist'
    // historyApiFallback: true,
    // inline: true
    contentBase: path.join(__dirname, "dist"),
    compress: true,//一切服务都启用gzip 压缩：
    port: 9000,
    proxy: {//代理 localhost:9000/api/ => http://localhost:3000
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""}
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
