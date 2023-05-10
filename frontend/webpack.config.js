var webpack = require("webpack");

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
  ],
  resolve: {
    modules: [__dirname + "/node_modules", __dirname + "/app"],
  },
  resolveLoader: {
    modules: [__dirname + "/node_modules"],
  },
};
