var path = require('path')
var Webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader')
    },
    postcss: [require('autoprefixer')]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new Webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, '/dist'),
    hot: true,
    historyApiFallback: true
  },
  devtool: 'eval-source-map'
}
