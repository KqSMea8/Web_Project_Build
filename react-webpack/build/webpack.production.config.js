const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./webpack.base.config')

/**
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  performance: {
    hints: false
  },
 */

config.mode = 'production'
config.optimization = {
  splitChunks: {
    chunks: 'all',
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

config.plugins = (config.plugins || []).concat([
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../')
  }),
  new webpack.HashedModuleIdsPlugin()
])

module.exports = config
