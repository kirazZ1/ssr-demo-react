/*
 * @Author: KiraZz1 1634149028@qq.com
 * @Date: 2023-03-20 15:19:26
 * @LastEditors: KiraZz1 1634149028@qq.com
 * @LastEditTime: 2023-03-20 17:06:21
 * @FilePath: /ssr-demo/src/pages/Example/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "./store";


const Example: React.FC<{
    content?: string;
    getData?: (data: string) => void;
}> = ({ content, getData }) => {

    const [value, setValue] = useState('')

    return (
        <div>
            <h1>This is an {content}</h1>
            <input onChange={e => setValue(e.target.value)} />
            <button onClick={() => getData && getData(value)}>Fetch</button>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    // 将对应reducer的内容透传回dom
    return {
        content: state?.example?.content,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getData: (data: string) => {
            dispatch(getData(data));
        },
    };
};

const storeDemo: any = connect(mapStateToProps, mapDispatchToProps)(Example);

storeDemo.getInitProps = (store: any, data?: string) => {
    return store.dispatch(getData(data || "首屏加载数据"));
};

export default storeDemo;
