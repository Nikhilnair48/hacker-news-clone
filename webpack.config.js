const HtmlWebpackPlugin = require("html-webpack-plugin");
require("babel-register");
const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    polyfill: "babel-polyfill",
    app: "./dist/app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hacker News CLone",
      filename: "index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000"
    })
  }
};
