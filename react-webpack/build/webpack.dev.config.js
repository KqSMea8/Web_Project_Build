const webpack = require('webpack')
const config = require('./webpack.base.config.js')
const WebpackDevServer = require('webpack-dev-server')
const PORT = process.env.PORT || 8000

config.entry.main = (config.entry.main || []).concat([
  // 'react-hot-loader/patch', // Code is automatically patched in v4
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server'
])

// separate css-loader and style-loader in dev and production because dev // need hot reload but extract-text-webpack-plugin not support hot reload
config.module.rules = (config.module.rules || []).concat([
  {
    test: /\.(css|scss)$/,
    use: ['style-loader', 'css-loader',
      {
        loader: 'postcss-loader',
        options: {}
      },
      'sass-loader'
    ]
  }
])

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin()
])

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  hot: true,
  // noInfo: true,
  quiet: true,
  historyApiFallback: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
})

server.listen(PORT, 'localhost', () => {
  console.log(`server started at localhost:${PORT}`)
})
