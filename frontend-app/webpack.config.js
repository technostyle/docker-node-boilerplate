require("dotenv").config();
const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const publicPath = PUBLIC_URL_MOCK;
const publicPath = process.env.PUBLIC_URL;
// const publicPort = process.env.PORT;

console.log({publicPath})
// console.log({publicPort})

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  devtool: "source-map",
  mode: "production",
  plugins: [
    new DefinePlugin({
      "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL),
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
