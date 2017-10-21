const webpack = require('webpack');
const path = require('path');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var isDebug = false;

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: ['./app.ts'],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.bundle.js'
	},
	resolve: { extensions: ['.ts', '.js'] },
	devtool: 'source-map',
	
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{
				test: /\.html$/,
				use: [
					{ loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) },
					{ loader: 'html-loader' }
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { sourceMap: isDebug } },
					{ loader: "less-loader", options: { sourceMap: isDebug } }
				]
			},
			{ test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=assets/[name].[ext]' },
		]
	},

	//plugins: [new BundleAnalyzerPlugin()]
};