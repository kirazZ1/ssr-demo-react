/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 15:18:46
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 17:09:21
 * @FilePath: /ssr-demo/src/router/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from "@/pages/Home";
import Example from "@/pages/Example";

interface IRouter {
  path: string;
  element: JSX.Element;
  loadData?: (store: any) => any;
}

const router: Array<IRouter> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example",
    element: <Example />,
    loadData: Example.getInitProps
  },
];

export default router;