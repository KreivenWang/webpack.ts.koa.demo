var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

// __dirname: absolute directory for current running file.
console.log(__dirname);

module.exports = {
  target: 'node',
  mode: 'production',
  entry: [path.resolve(__dirname, './src/index.ts')],
  output: {
    path: __dirname + '/dist',
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // after tsc, babel-loader will do the job
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              // fastern compilation speed
              transpileOnly: true,
              configFile: path.resolve(__dirname, './tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  // plugins: [new webpack.BannerPlugin('This file is created by xp')],
  externals: [
    //have node modules excluded
    nodeExternals()
  ]
};
