/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 16:28:35
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 16:46:09
 * @FilePath: /ssr-demo/src/store/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { exampleReducer } from "@/pages/Example/store";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const clientStore = configureStore({
    reducer: { example: exampleReducer.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const serverStore = configureStore({
    reducer: { example: exampleReducer.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export { clientStore, serverStore };