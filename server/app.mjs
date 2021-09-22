import Koa from "koa";
import serve from "koa-static";
import router from "./routers/index.mjs";

const app = new Koa();

app.use(serve('./static'));
app.use(router.routes());
app.listen({
    port: 4000
});
