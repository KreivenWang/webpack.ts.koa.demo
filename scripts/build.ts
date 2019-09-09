import WebpackConfig from '../config/webpack.config';
import webpack = require('webpack');

const buildConfig = new WebpackConfig('production');

webpack(buildConfig).watch({ aggregateTimeout: 300 }, (err: Error) => {
  if (err) console.error(`error: ` + err);
  else console.log('done no error');
});
