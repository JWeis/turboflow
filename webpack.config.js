const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "turboflow.min.js",
    path: path.resolve(__dirname, "dist")
  }
};
