const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "none",
  entry: {
    homepage: "./src/index.js",
    aboutpage: "./src/about.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Homepage",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["homepage"]
    }),
    new HtmlWebpackPlugin({
      title: "About",
      filename: "about.html",
      template: "./src/about.html",
      chunks: ["aboutpage"]
    })
  ],
  devServer: {
    port: 3000
  }
}
