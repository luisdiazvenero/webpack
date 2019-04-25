const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');



module.exports = (env) => {
  //mode: 'development',
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[hash].css",
      chunkFilename: "[id].[chunkhash].css"
    })
  ]

  if(env.NODE_ENV==='production') {
    plugins.push(
      new CleanWebPackPlugin()
    )
  }

  return {
    plugins,
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({}),
        new UglifyJsPlugin(),
      ],
    },
    entry: {
      invie: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist')+"/",
      chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [require('@babel/plugin-proposal-object-rest-spread')]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
  	          MiniCssExtractPlugin.loader,
  	          "css-loader"
  	        ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                fallback: 'file-loader',
                name: 'images/[name].[hash].[ext]',
              }
            }
          ]
        },
      ]
    }
  }



}
