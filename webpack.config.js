const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("node:path")
const {VanillaExtractPlugin} = require("@vanilla-extract/webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"]
  },
  module: {
    rules: [
      {test: /\.(js|ts)x?$/, exclude: /node_modules/, use: ["babel-loader"]},
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      },
      {
        test: /\.vanilla\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: require.resolve("css-loader"), options: {url: false}}
        ]
      }
    ]
  }
}
