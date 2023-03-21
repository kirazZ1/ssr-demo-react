/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 14:57:48
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 16:36:09
 * @FilePath: /ssr-demo/src/client/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "@/router";
import { Provider } from "react-redux";
import { clientStore } from "@/store";

const App: React.FC = () => {
    return (
        <Provider store={clientStore}>
            <BrowserRouter>
            <Routes>
                {router?.map((item, index) => {
                    return <Route {...item} key={index} />;
                })}
            </Routes>
        </BrowserRouter>
        </Provider>
        
    )
}

hydrateRoot(document.getElementById("root") as Document | Element, <App />);