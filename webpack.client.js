const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

module.exports = merge(config, {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'public'),
  },
  module: {

    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
            }
          }
        ]
      }
    ]
  }
})