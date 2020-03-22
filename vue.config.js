module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true
      })
  },
  // Here to enable debug breakpoints
  configureWebpack: {
    devtool: 'source-map'
  }
}
