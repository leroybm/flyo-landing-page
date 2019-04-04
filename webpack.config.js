const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
    new StyleLintPlugin()
  ]
};