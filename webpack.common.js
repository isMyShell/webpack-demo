const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin") //涉及到计算机权限问题
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
    another: "./src/another-module.js",
    vendor: [
      'lodash'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    // filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve:{
    alias: {
      Print: path.resolve(__dirname, './src/print.js')
    }
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
        // use:[
        //   "style-loader",
        //   "css-loader"
        // ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    }),
    new HtmlWebPackPlugin({
      title: 'yuting',
      mobile: true,
      meta: [{
        name: 'description',
        content: 'A better default template for html-webpack-plugin.'
      }]
    }),
    new ExtractTextPlugin("[name].styles.css")
  ]
}
