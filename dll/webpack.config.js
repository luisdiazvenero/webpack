const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  //entry: path.resolve(__dirname,'index.js'),
  entry: {
    // vendor: [
    //   'react',
    //   'react-dom'
    // ],
    home: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      // aqui van los loaders
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },

      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:"css-loader",
            options:{
              modules: true,
              importLoaders:1
            }
          },
          "postcss-loader"
        ]
      },
      // {
        // test: que tipo de archivo quiero reconocer
        // test: /\.css$/,
        // use: que loader se va a encargar del archivo
        // use: [MiniCssExtractPlugin.loader, "css-loader"]

      // },
      {
        // test: que tipo de archivo quiero reconocer
        test: /\.styl$/,
        // use: que loader se va a encargar del archivo
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"]

      },
      {
        // test: que tipo de archivo quiero reconocer
        test: /\.less$/,
        // use: que loader se va a encargar del archivo
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]

      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]

      }
    ]
  },
  plugins: [
    // aqui van los plugins
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    })
  ],
  // optimization: {
  //   splitChunks: {
  //       name: "vendor",
  //       minChunks: Infinity,
  //       chunks: "initial"
  //   }
  // }
}
