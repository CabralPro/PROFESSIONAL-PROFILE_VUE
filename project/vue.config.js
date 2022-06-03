const path = require('path');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
	lintOnSave: false,
  productionSourceMap: false,
	configureWebpack: {
    resolve: {
      alias: {
        // '@generics': path.resolve(__dirname, 'src/components/generics'),
      },
    },
  }
}
