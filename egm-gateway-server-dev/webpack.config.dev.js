const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

require("dotenv").config({ path: "./mac/.env" });

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

const serverConfig = {
  target: "node",
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "mac"),

    filename: "server.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.COMPILATION_TARGET": JSON.stringify("server"),
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  externals: nodeModules,
};

module.exports = [serverConfig];
