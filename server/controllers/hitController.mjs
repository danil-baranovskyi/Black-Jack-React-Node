import {addResult, tokenVerify} from "../helpers/index.mjs";
import {games} from "../routers/index.mjs";

export const hitController = async (ctx, next) => {
    const requestData = ctx.request.body;

    games[tokenVerify(requestData.token).id].hit();

    addResult(requestData, games);

    ctx.body = {
        ...games[tokenVerify(requestData.token).id].getState()
    }
}