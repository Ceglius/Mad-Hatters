const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "production",
  output: {
    filename: "js/main.js",
  },

  externalsPresets: { node: true },
  externals: [nodeExternals()],

  optimization: {
    minimize: false,
  },
};
