const path = require('path');
const webpack = require('webpack');

module.exports = {
  //entry: path.resolve(__dirname,'index.js'),
  entry: {
    modules: [
      'react',
      'react-dom'
    ],
    // home: path.resolve(__dirname,'src/js/index.js'),
    // contact: path.resolve(__dirname,'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]'
  },

  plugins: [

    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
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
