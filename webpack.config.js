const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'pinyin-match',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            'env'
          ]
        }
      }]
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}