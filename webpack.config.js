var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  performance: {
    hints: false
  },
  externals: {
    moment: 'moment'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    /*alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js'
    }*/ // removes 100kb from the download. 476kb gzip vs 578kb gzip
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  //devtool: '#eval-source-map', // TODO: GET RID OF THIS BLOATED SOURCE MAPPING
  plugins: [
    new VueLoaderPlugin(),
  ]
  
}
