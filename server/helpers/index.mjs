import jwt from "jsonwebtoken";
import {secKey} from "../routers/index.mjs";
import {games} from "../routers/index.mjs";
import {GameResult} from "../db/index.mjs";

export const gameIdCheckByToken = (token) => {
    const gameId = tokenVerify(token);
    return Object.keys(games).includes(gameId.id);
}

export const tokenVerify = (token) => {
    return jwt.verify(token, secKey);
}

export const addResult = (requestData, games) => {
    if (Array.isArray(games[tokenVerify(requestData.token).id].getState().winners)) {
        GameResult.create(
            {
                winners: games[tokenVerify(requestData.token).id].getState().winners,
                players: games[tokenVerify(requestData.token).id].getState().players,
                clientId: tokenVerify(requestData.token).id,
            },
            (err, doc) => {
                if (err) return console.log(err);
                console.log("Object is saved: ", doc)
            }
        )
    }
}

export const validCheck = (ctx, requestData) => {
    if (requestData.playersNames.length < 2) {
        ctx.throw(422)
    }

    for (let i = 0; i < requestData.playersNames.length; i++) {
        if (requestData.playersNames[i].trim().length <= 3) {
            ctx.throw(422)
        }
    }
}