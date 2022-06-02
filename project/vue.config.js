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
  },
	pwa: {
		name: "Pwa Name",
		short_name: "Pwa Short Name",
		theme_color: "#ffffff",
		background_color: "#ffffff",
		scope: "./",
		// start_url: "/dashboard",
		workboxOptions: {
			skipWaiting: true
		}
	}
}
