module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    })
  ]
}