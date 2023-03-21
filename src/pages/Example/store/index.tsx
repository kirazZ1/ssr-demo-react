/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 16:39:59
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 17:32:49
 * @FilePath: /ssr-demo/src/pages/Example/store/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const rootUrl = typeof window !== "undefined" ? '' : 'http://localhost:4000'

const getData = createAsyncThunk(
    "example/getData",
    async (initData: string) => {
        const res = await axios.post(rootUrl + "/api/example", {
            content: initData,
        });
        return res.data?.data?.content;
    }
);

const exampleReducer = createSlice({
    name: "example",
    initialState:
        typeof window !== "undefined"
            ? (window as any)?.context?.state?.example
            : {
                content: "默认数据",
            },
    reducers: {},
    extraReducers(build) {
        build
            .addCase(getData.pending, (state, action) => {
                state.content = "请求中...";
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.content = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.content = "请求失败";
            });
    },
});

export { exampleReducer, getData };