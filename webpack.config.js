'use strict';

const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        use: 'babel-loader', 
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /\.(eot|svg|ttf|woff|woff2)$/, 
        use: 'url-loader?limit=100000',
      },
      { 
        test: /\.(png|jpg)$/, 
        use: 'url-loader?limit=100000',
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new BundleTracker({filename: './webpack-stats.json'}),
    ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
  watchOptions: {
    poll: true
  }
}