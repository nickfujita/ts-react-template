const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var plugins = [
  new NyanProgressPlugin(),
  new HtmlWebpackPlugin({template: 'src/index.html'})
];

plugins = plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);

// FOR PRODUCTION
// plugins = plugins.concat([
//   new webpack.optimize.OccurenceOrderPlugin(),
//   new webpack.optimize.UglifyJsPlugin({
//     compressor: {
//       warnings: false
//     },
//     output: {
//       comments: false
//     },
//   }),
// ]);

module.exports = {
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  entry: ['webpack-hot-middleware/client', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: plugins,
  module: {
    preLoaders: [
      {
        test: /\.ts(x?)$/,
        loader: "tslint",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /styles/],
        loader: 'ts-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.(jpe?g|png|woff|woff2|ttf)$/,
        loader: 'url',
      },
    ]
  }
};
