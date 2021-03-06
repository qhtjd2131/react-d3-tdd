const { merge } = require("webpack-merge");

const common = require("./webpack.common");


module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 8000, //포트
    open: true, //개발 서버 실행 시 브라우저 오픈
    historyApiFallback: true,
    static: "./dist",
    hot: true,
  },
});


