import Koa from "koa";
import serve from "koa-static";
import router from "./routers/index.mjs";
import bodyParser from "koa-bodyparser"

const app = new Koa();

app.use(bodyParser({ enableTypes: ['json', 'text'] }));
app.use(serve('./static'));
app.use(router.routes());
app.listen({
    port: 4000
});
