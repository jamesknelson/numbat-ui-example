import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";


export default (DEBUG, PATH, PORT=3000) => ({
  entry: (DEBUG ? [
    `webpack-dev-server/client?http://localhost:${PORT}`,
  ] : []).concat([
    './src/theme/theme.less',
    'babel/polyfill',
    './src/main'
  ]),

  output: {
    path: path.resolve(__dirname, PATH, "generated"),
    filename: DEBUG ? "main.js" : "main-[hash].js",
    publicPath: "/generated/"
  },

  cache: DEBUG,
  debug: DEBUG,

  // For options, see http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG && "eval",

  module: {
    loaders: [
      // Load ES6/JSX
      { test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules", "numbat-ui", "src"),
          path.resolve(__dirname, "..", "numbat-ui", "src")],
        loader: "babel-loader",
        query: {
          stage: 0}},

      // Load styles
      { test: /\.less$/,
        loader: DEBUG
          ? "style!css!autoprefixer!less"
          : ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader") },

      // Load images
      { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },

      // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  },

  plugins: DEBUG
    ? []
    : [
      new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
      new ExtractTextPlugin("style.css", {allChunks: false}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
        mangle: {screw_ie8: true, keep_fnames: true}
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ],

  resolveLoader: {
    fallback: path.resolve(__dirname, "node_modules")
  },

  resolve: {
    fallback: path.resolve(__dirname, "node_modules"),

    modulesDirectories: [
      "node_modules"
    ],

    // Allow to omit extensions when requiring these files
    extensions: ["", ".js", ".jsx"]
  }
});
