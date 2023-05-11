var path = require('path') 
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, 'app/main.js')
  },
  output: {
    path: path.resolve(__dirname,'dist/'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "underscore",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      title: 'Kanban Project',
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  resolve: {
    modules: [__dirname + "/node_modules", __dirname + "/app"],
  },
  resolveLoader: {
    modules: [__dirname + "/node_modules"],
  },
};
