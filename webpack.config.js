'use strict'

var path = require('path');

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'build')
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [
      'node_modules',
      'src'
    ]
  },
  module: {
    rules: [{
      test: /\.ts[x]?$/,
      use: [{
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          useCache: true
        }
      }],
      include: path.join(__dirname, './src'),
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.png$/,
      use: [{
        loader: 'url-loade',
        options: {
          limit: 100000
        }
      }]
    }, {
      test: /\.jpg$/,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }]
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream'
        }
      }]
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }]
    }, {
      test: /\.(gif)$/,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      enforce: "pre",
      test: /\.js$/,
      use: [{
        loader: 'source-map-loader'
      }]
    }, {
      test: /\.ts[x]]?$/,
      enforce: 'pre',
      use: [{
        loader: 'tslint-loader'
      }]
    }]
  }
};
