const path = require('path')
const webpack = require('webpack')
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
var dashboard = new Dashboard();
module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './src/main.js'
    ],
    //列出第三方库
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
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
        use: [ 'style-loader', 'css-loader' ]
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
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('../dist/styles.css'),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
  ]
}