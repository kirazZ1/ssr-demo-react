/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 14:42:11
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 14:42:35
 * @FilePath: /ssr-demo/build/webpack.base.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const WebpackBar = require("webpackbar");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        loader: "swc-loader",
        exclude: /node_modules/,
    
      },
      {
        test: /.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  plugins:[
    new WebpackBar(),
  ]
};