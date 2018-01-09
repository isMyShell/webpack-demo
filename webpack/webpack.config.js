const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestWebpackPlugin = require('webpack-manifest-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry : {
    app: './src/index.js',
    print:"./src/printMe.js"
  },
  output : {
    filename:'[name].[hash].bundle.js',
    path:path.resolve(__dirname, 'dist' )
  },
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true,
    port:8000
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:['file-loader']
      }
    ]
  },
  plugins:[
    new UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestWebpackPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'html-webpack-plugin'
    })
  ]
}