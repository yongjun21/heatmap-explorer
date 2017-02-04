var path = require('path')
var Webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
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
      // css: 'css-loader!sass-loader'
      css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader')
    },
    postcss: [require('autoprefixer')]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new Webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    fallback: path.join(__dirname, 'node_modules')
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },
  devtool: 'source-map'
}
