const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './src/main.js'
    ],
    //列出第三方库
    vendor: [
      'react',
      'react-dom',
      'jquery',
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].chunk.[chunkhash].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options:{
              minimize: true
            }
          }
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  },
  stats: {
    chunks: false,
    children: false
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname,'../'),
    }),
    new ExtractTextPlugin({
      filename: 'styles.[contenthash].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'React App',
      template: path.resolve(__dirname,'../template/index.template.html'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      warnings: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'runtime'],
    }),
    new webpack.HashedModuleIdsPlugin(),
  ]
}