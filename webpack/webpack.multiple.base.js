const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestWebpackPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
const multipe = require('./config/config.js')
const getEntrys = multipe.getEntrys
const getOutHtmls = multipe.getOutHtmls
//根据具体目录结构来确定路径
const entryPattern = './src/pages/**.html';

module.exports = {
  entry:getEntrys(entryPattern),
  output: {
    filename: '[name]/js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:['babel-loader'],
        exclude: "/node_modules"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?importLoaders=1&&minimize","postcss-loader"]
        }),
        exclude:"/node_modules"
      },
      // LESS
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: ['css-loader?importLoaders=1&&minimize', 'postcss-loader', 'less-loader'] })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options:{
          limit:10000,
          name:'[name]/img/[name].[hash].[ext]'
        },
        exclude: "/node_modules"
      }
    ]
  },
  plugins: [
    new ManifestWebpackPlugin(),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    }),
    new ExtractTextPlugin({
      filename:"[name]/css/[name].[contenthash].css",
      allChunks:true
    }),
    ...getOutHtmls(entryPattern)
  ]
}