const config = require('./webpack.config.js');
config.devServer = {
  historyApiFallback: true,
  port: 3000,
  liveReload: true
};
config.devtool = 'inline-source-map';
module.exports = config;
