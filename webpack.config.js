const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
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
      }
    ]
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, 'index.html'),
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};