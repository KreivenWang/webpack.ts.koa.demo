import WebpackConfig from '../config/webpack.config';
import webpack from 'webpack';


const devConfig = new WebpackConfig('development');

webpack(devConfig).watch({ aggregateTimeout: 300 }, (err: Error) => {
  if (err) console.error(`error: ` + err);
  else console.log('done no error');
});
