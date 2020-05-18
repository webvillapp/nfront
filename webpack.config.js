const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is main configuration object.
module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/bundles'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
      
            // Set loaders to transform files.
            use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },                 
                   {
                     loader: "css-loader",
                   },
                   {
                     loader: "postcss-loader"
                   },
                   {
                     loader: "sass-loader",
                     options: {
                       implementation: require("sass")
                     }
                   }
                 ]
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                   {
                     loader: "file-loader",
                     options: {
                       outputPath: 'images',
                       name: "[name].[ext]",
                       esModule: false
                     }
                     
                   }
                 ]
          }                           
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: 'images' },
      ]
    })
  ],

  devServer: {
    writeToDisk: true
  },

  mode: 'development'
};