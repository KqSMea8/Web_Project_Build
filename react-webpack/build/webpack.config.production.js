const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./webpack.config.base.babel')

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
    test: /\.(css|scss)$/,
    use: MiniCssExtractPlugin.extract({
      use: [
        'css-loader',
        'postcss-loader'
      ],
      fallback: 'style-loader'
    })
  }
])

config.plugins = (config.plugins || []).concat([
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../')
  }),
  new MiniCssExtractPlugin({
    publicPath: '../../',
    filename: 'style/style.[chunkhash].css',
    allChunks: true
  }),
  new webpack.HashedModuleIdsPlugin()
])

module.exports = config
