const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const TerserPlugin = require("terser-webpack-plugin");
const named = require("vinyl-named");
const webPackConfig = require("./config/webpack.uncompressed.script.config");
let webPackConfigBeautify = Object.assign({}, webPackConfig);

webPackConfigBeautify.optimization = {
  minimizer: [
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {
          defaults: false,
          unused: true,
        },
        mangle: false,
        module: false,
        toplevel: true,
        keep_classnames: true,
        keep_fnames: true,
        format: {
          beautify: true,
        },
      },
    }),
  ],
};
function js() {
  return gulp
    .src("src/js/app.js")
    .pipe(named())
    .pipe(
      webpack({
        config: webPackConfigBeautify,
      })
    )
    .pipe(gulp.dest("dist/"));
}

// sass
function buildStyles() {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(rename("main.css"))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}

exports.default = gulp.series(buildStyles, js);
