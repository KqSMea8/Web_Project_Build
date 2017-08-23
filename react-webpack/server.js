const webpack = require('webpack')
const config = require('./webpack/webpack.dev.config.js')
const webpackDevServer = require('webpack-dev-server')

config.entry.main.unshift('react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:4200/', 'webpack/hot/only-dev-server')

const compiler = webpack(config)

const server = new webpackDevServer(compiler, {
    hot: true,
    noInfo: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
})

server.listen(4200, 'localhost', () => {
    console.log(`server started at localhost:4200 , please open localhost:4200/src`)
})