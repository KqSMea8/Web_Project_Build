const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.base.config')

config.mode = 'production'
config.optimization = {
  splitChunks: {
    chunks: 'all',
    // minChunks: 1, // what means about minChunks ?
    name: 'common'
  },
  minimize: true,
  runtimeChunk: {
    name: 'runtime'
  }
}
config.performance = {
  hints: false
}

config.module.rules = (config.module.rules || []).concat([
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            minimize: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        },
        'postcss-loader',
        'sass-loader'
      ],
      fallback: 'style-loader'
    })
  }
])

config.plugins = (config.plugins || []).concat([
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../')
  }),
  new ExtractTextPlugin({
    filename: 'style.[chunkhash].css',
    allChunks: true
  }),
  new webpack.HashedModuleIdsPlugin()
])

module.exports = config
