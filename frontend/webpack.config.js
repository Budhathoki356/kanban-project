var webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "development",
  entry: "./app/main.js",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: /node_modules/
      },
      {
        test:  /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ],
  },
  output: {
    path: __dirname + "/static/js",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "underscore",
    }),
    new MiniCssExtractPlugin({
      filename: '../style.css'
    })
  ],
  resolve: {
    modules: [__dirname + "/node_modules", __dirname + "/app"],
  },
  resolveLoader: {
    modules: [__dirname + "/node_modules"],
  },
};
