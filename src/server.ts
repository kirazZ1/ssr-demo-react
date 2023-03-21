import router from "@/router/index";
import express from "express";
import path from "path";
import { matchRoutes, RouteObject } from "react-router-dom";
import { render } from "./server/index";
import { serverStore } from "./store";

const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.resolve(process.cwd(), "client_build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/example", (req, res) => {
  res.send({
    data: req.body,
    code: 0,
  });
});

app.get("*", (req, res) => {
  // 根据路由表初始化Map（如果存在loadData就放入Map里面，方便后面取用）
  // loadData获取到的远程数据会放入serverStore里面
  const routeMap = new Map<string, () => Promise<any>>();
  router.forEach((item) => {
    if (item.path && item.loadData) {
      routeMap.set(item.path, item.loadData(serverStore));
    }
  });

  // 匹配当前路由的routes
  const matchedRoutes = matchRoutes(router as RouteObject[], req.path);

  const promises: Array<() => Promise<any>> = [];
  matchedRoutes?.forEach((item) => {
    if (routeMap.has(item.pathname)) {
      promises.push(routeMap.get(item.pathname) as () => Promise<any>);
    }
  });

  // 脱水操作 - 确保把数据放入store之后在进行render
  Promise.all(promises).then(() => {
    const content = render(req.path);
    res.send(`
    <html>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(serverStore.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
  });
});

app.listen(4000, () => {
  console.log("ssr-server listen on 4000");
});
