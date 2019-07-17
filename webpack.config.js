const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.handlebars$/,
				use: [
					'handlebars-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new StyleLintPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin()
	]
};
