import {addResult, tokenVerify} from "../helpers/index.mjs";
import {games} from "../routers/index.mjs";

export const standController = async (ctx, next) => {
    const requestData = ctx.request.body;

    games[tokenVerify(requestData.token).id].stand();

    addResult(requestData, games);

    ctx.body = {
        ...games[tokenVerify(requestData.token).id].getState()
    }
}