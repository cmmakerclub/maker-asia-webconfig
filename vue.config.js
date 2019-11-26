const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath: '',
  devServer: {
    proxy: 'http://localhost:8000',
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        minRatio: 0.8,
        threshold: 10240
      }),
    ]
  }
}