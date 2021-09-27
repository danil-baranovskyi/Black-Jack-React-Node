import {gameIdCheckByToken} from "../helpers/index.mjs";

export const authMiddleWare = async (ctx, next) => {
    const requestData = ctx.request.body;

    if(gameIdCheckByToken(requestData.token)) {
        await next();
    }
}