const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //entry: path.resolve(__dirname,'index.js'),
  entry: {
    home: path.resolve(__dirname,'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // aqui van los loaders
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["@babel/preset-env", { "targets": { "node": "current" } }]]
          
          }
        }
      },
      {
        // test: que tipo de archivo quiero reconocer
        test: /\.css$/,
        // use: que loader se va a encargar del archivo
        use: [MiniCssExtractPlugin.loader, "css-loader"]

      }
    ]
  },
  plugins: [
    // aqui van los plugins
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
}
