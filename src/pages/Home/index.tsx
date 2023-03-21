/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 14:46:46
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 14:51:39
 * @FilePath: /ssr-demo/src/pages/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0)
  return (
      <div>
        <h1>Hello SSR</h1>
        <div >
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
  );
};

export default Home;