const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getEntrys = function(entryPattern){
  let entrys = []
  let entry = {}
  glob.sync(entryPattern).forEach((path) => {
    let length = path.split('/').length - 1
    path = path.split('/')[length].split('.')[0]
    entry[path] = `./src/pages/${path}/${path}.js`
  })
  return entry
}

const getOutHtmls = function(entryPattern){
  let outHtmls = []
  glob.sync(entryPattern).forEach((path) => {
    let length = path.split('/').length - 1
    let filename = path.split('/')[length]
    let template = path
    pageName = path.split('/')[length].split('.')[0]
    outHtmls.push(new HtmlWebpackPlugin({
      filename,
      template,
      inject:true,
      chunks: [pageName, 'common'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      // chunksSortMode: 'dependency'
    }))
  })
  return outHtmls
}

module.exports = {
  getEntrys,
  getOutHtmls
}