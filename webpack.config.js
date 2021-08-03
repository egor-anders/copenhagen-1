const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const config = {
    target: 'web',
    context: __dirname,

    entry: ['./src/js/index.ts', './src/scss/main.scss'],

    output: {
      filename: 'js/index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },

    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                experimentalWatchApi: true,
                configFile: path.resolve(__dirname, './tsconfig.json'),
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img/',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.ts', '.json'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src', 'index.html'),
        favicon: path.resolve(__dirname, 'src/img', 'ico.svg'),
      }),
    ],

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
  };

  if (argv.mode == 'production') {
    config.plugins.push(
      new TerserPlugin({
        parallel: true,
      })
    );
  } else if (argv.mode == 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
