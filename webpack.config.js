const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },

  //loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo page",
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],

  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist/index.html"),
    port: 5000,
    // open: true,
    hot: true,
    liveReload: true,
  },
};
