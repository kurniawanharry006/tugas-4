const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: [
          {
              loader:"style-loader"
          },
          {
              loader:"css-loader"
          }
      ]
         },
           {
               test:/\.html$/,
               use:['html-loader']
           },
           {
               test:/\.(jpg|png)$/,
               use:[
                   {
                       loader:'file-loader',
                       options: {
                           name:'[name].[ext]',
                           outputPath:'images/',
                           publicPath:'images/'
                       }
                   }
               ]
           }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/template.html',
        filename:"index.html" })
  ]
};