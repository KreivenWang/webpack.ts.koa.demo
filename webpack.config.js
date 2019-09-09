var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
console.log(__dirname);
module.exports = {
  target: 'node',
  mode: 'production',
  entry: [path.resolve(__dirname, './src/index.ts')], //入口文件
  output: {
    //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
    path: __dirname + '/dist', //输出位置
    filename: 'bundle.js' //输入文件
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // tsc编译后，再用babel处理
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              // 加快编译速度
              transpileOnly: true,
              // 指定特定的ts编译配置，为了区分脚本的ts配置
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
  plugins: [new webpack.BannerPlugin('This file is created by xp')],
  externals: [
    //have node modules excluded
    nodeExternals()
  ]
};
