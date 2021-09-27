import {games} from "../routers/index.mjs";
import {tokenVerify} from "../helpers/index.mjs";

export const getStateController = async (ctx, next) => {
    const requestData = ctx.request.body;

    ctx.body = {
        ...games[tokenVerify(requestData.token).id].getState()
    };

    await next();
}