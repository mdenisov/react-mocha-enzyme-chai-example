const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './dist/';

module.exports = {
	entry: './src/main.js',
	devServer: {
		hot: true,
		inline: true,
		port: 8080,
		historyApiFallback: true
	},
	resolve: {
		extensions: ['', '.js']
	},
	output: {
		path: path.resolve(buildDirectory),
		filename: 'app.js',
		publicPath: 'http://localhost:8080/dist'
	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		}]
	},
	plugins: []
};