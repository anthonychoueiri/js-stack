// @flow

import path from 'path';
import webpack from 'webpack';

import { WDS_PORT } from './src/shared/config';
import { isProd } from './src/shared/util';

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    // $FlowFixMe
    path: path.resolve(__dirname, 'dist'),
    // $FlowFixMe
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      // $FlowFixMe
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    // $FlowFixMe
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // $FlowFixMe
    new webpack.HotModuleReplacementPlugin(),
    // $FlowFixMe
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  optimization: {
    moduleIds: 'named',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // $FlowFixMe
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
