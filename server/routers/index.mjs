import Router from "koa-router";
import {Game} from "../game/structures/Game.mjs";
import {Player} from "../game/structures/Player.mjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

const router = new Router();

const games = {};
const secKey = "ya ne loh, ya smogu";

const gameIdCheckByToken = (token) => {
    const gameId = tokenVerify(token);
    return Object.keys(games).includes(gameId.id);
}

const tokenVerify = (token) => {
    return jwt.verify(token, secKey);
}

const validCheck = (ctx, requestData) => {
    if (requestData.playersNames.length < 2) {
        ctx.throw(422)
    }

    for (let i = 0; i < requestData.playersNames.length; i++) {
        if (requestData.playersNames[i].trim().length <= 3) {
            ctx.throw(422)
        }
    }
}

router.post("/start", (ctx) => {
    const requestData = ctx.request.body;
    console.log(requestData)
    validCheck(ctx, requestData);

    if (requestData.token) {
        games[tokenVerify(requestData.token)] = new Game(requestData.playersNames.map((playerName) => new Player(playerName)));
        ctx.body = {
            ...games[tokenVerify(requestData.token)].getState(),
            token: requestData.token
        };
    }
    const gameId = uuidv4();
    const token = jwt.sign({id: gameId}, secKey, {noTimestamp: true});

    games[gameId] = new Game(requestData.playersNames.map((playerName) => new Player(playerName)));

    ctx.body = {
        ...games[gameId].getState(),
        token: token
    };
});


router.post("/state", (ctx) => {
    const requestData = ctx.request.body;
    console.log(requestData)
    if(gameIdCheckByToken(requestData.token)) {

        ctx.body = {
            ...games[tokenVerify(requestData.token).id].getState()
        };
    }
});

router.post("/hit", (ctx) => {
    const requestData = ctx.request.body;
    if(gameIdCheckByToken(requestData.token)) {
        games[tokenVerify(requestData.token).id].hit();
        ctx.body = {
            ...games[tokenVerify(requestData.token).id].getState()
        }
    }
})

router.post("/stand", (ctx) => {
    const requestData = ctx.request.body;

    if(gameIdCheckByToken(requestData.token)) {
        games[tokenVerify(requestData.token).id].stand();
        ctx.body = {
            ...games[tokenVerify(requestData.token).id].getState()
        }
    }
})

router.post("/reset", (ctx) => {
    const requestData = ctx.request.body;

    if(gameIdCheckByToken(requestData.token)) {
        games[tokenVerify(requestData.token).id].reset();
        ctx.body = {
            ...games[tokenVerify(requestData.token).id].getState()
        }
    }
});

export default router;