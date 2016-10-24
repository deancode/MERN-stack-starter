const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  // Extensions for webpack
  plugins: [
   // Automatically generate our html page
   // https://www.npmjs.com/package/html-webpack-plugin
   new htmlWebpackPlugin({
     // Define the starting point for our dynamic html creation
     template: path.join(__dirname, 'src/index.html'),
     appMountId: 'root',
     title: 'Hello',
   }),
 ],
}
