const path = require('path');

const { parsed: localEnv } = require('dotenv').config({
  path: path.resolve(`${__dirname}/.env`),
});

const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  generateBuildId: async () => {
    return require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .trim();
  },
  webpack(config, _) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.resolve.alias['root'] = path.join(__dirname, './');
    config.resolve.alias['components'] = path.join(__dirname, './app');
    config.resolve.alias['store'] = path.join(__dirname, './components');
    config.resolve.alias['helpers'] = path.join(__dirname, './helpers');
    return config;
  },
});
