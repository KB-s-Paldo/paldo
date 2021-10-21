const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
  },
  devServer: {
    disableHostCheck:true
  },
  // publicPath: '/moneymany/'
}