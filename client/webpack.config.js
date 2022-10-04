const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Added and configure workbox plugins for a service worker and manifest file.
// AddedCSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE',
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }), 
      new WebpackPwaManifest({
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Edit text',
        background_color: '#000000',
        theme_color: '#000000',
        start_url: './',
        fingerprints:false, 
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            size: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons') 
          },
        ]
      }), 
      
   
    ],

    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
