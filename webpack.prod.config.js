const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
      chunkFilename: 'styles.[contenthash].css',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: 'node_modules',
        parallel: true,
        minify: TerserWebpackPlugin.swcMinify,
        extractComments: false,
        terserOptions: {
          compress: {drop_console: true, drop_debugger: true},
        },
      }),
    ],
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
};
