const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'minesweeper'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: { minimize: false },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: './src/resources.scss',

              // Or array of paths
              // eslint-disable-next-line no-dupe-keys
              resources: [
                './src/styles/vars.scss',
                './src/styles/mixins.scss',
                './src/styles/functions.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  mode: 'development',
  devServer: {
    compress: true,
    port: 3000,
  },
};
