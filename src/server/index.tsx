/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 14:59:12
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 16:38:04
 * @FilePath: /ssr-demo/src/server/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router-dom";
import router from "@/router";
import { serverStore } from "@/store";
import { Provider } from "react-redux";
const App: React.FC<{ path: string }> = ({ path }) => {
    return (
        <Provider store={serverStore}>
            <StaticRouter location={path}>
                <Routes>
                    {router?.map((item, index) => {
                        return <Route {...item} key={index} />;
                    })}
                </Routes>
            </StaticRouter>
        </Provider>

    )
}

export const render = (path: string) => {
    return renderToString(<App path={path} />)
}


