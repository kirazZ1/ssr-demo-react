/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 14:43:08
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 14:43:36
 * @FilePath: /ssr-demo/build/webpack.client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 14:43:08
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 14:43:18
 * @FilePath: /ssr-demo/build/webpack.client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(process.cwd(), "client_build"),
  },
});