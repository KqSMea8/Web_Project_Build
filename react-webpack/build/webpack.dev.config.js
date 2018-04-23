const webpack = require('webpack')
const config = require('./webpack.base.config.js')
const WebpackDevServer = require('webpack-dev-server')
const PORT = process.env.PORT || 8000

config.entry.main = (config.entry.main || []).concat([
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${PORT}/`,
  'webpack/hot/dev-server'
])
config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin()
])
config.mode = 'development'

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  hot: true,
  noInfo: true,
  quiet: true,
  filename: config.output.filename,
  publicPath: '/',
  stats: {
    colors: true
  }
})

server.listen(PORT, 'localhost', () => {
  console.log(`server started at localhost:${PORT}`)
})
