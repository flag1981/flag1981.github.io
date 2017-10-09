const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "index": "./src/index.js",
    "module-with-dynamic-import": "./src/module-with-dynamic-import.js",
    "common": "./src/common.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      chunks: [
        "index"
      ],
    })
  ],
  output: {
    filename: "[name].js",
    library: ["library", "[name]"],
    path: `${__dirname}/dist/`,
    publicPath: `${__dirname}/dist/`,
  }
};