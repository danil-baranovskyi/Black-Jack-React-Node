import {games} from "../routers/index.mjs";
import {tokenVerify} from "../helpers/index.mjs";

export const resetGameController = async (ctx, next) => {
    const requestData = ctx.request.body;
    games[tokenVerify(requestData.token).id].reset();
    ctx.body = {
        ...games[tokenVerify(requestData.token).id].getState()
    }

    await next();
}