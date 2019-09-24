const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
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
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				options: {
					inlineRequires: '\/img\/'
				},
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new StyleLintPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Frontend Mentor | Fylo landing page with dark theme and features grid',
			meta: {
				viewport: 'width=device-width, initial-scale=1.0',
				charset: 'UTF-8'
			}
		}),
		new CopyPlugin([
			{ from: 'src/img', to: 'img' },
		]),
	]
};
