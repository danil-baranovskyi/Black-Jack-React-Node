import Router from "koa-router";
import {Game} from "../game/structures/Game.mjs";
import {Player} from "../game/structures/Player.mjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

const router = new Router();

const games = {};
const secKey = "ya ne loh, ya smogu";

const gameIdCheckByToken = (token) => {
    const gameId = jwt.verify(token, secKey, {noTimestamp: true});
    return Object.keys(games).includes(gameId.id);
}

const getIdFromToken = (token) => {
    return jwt.verify(token, secKey).id;
}

router.post("/start", (ctx) => {
    let playersNames = ctx.request.body.playersNames;
    const gameId = uuidv4();
    games[gameId] = new Game(playersNames.map((playerName) => new Player(playerName)));

    const token = jwt.sign({id: gameId}, secKey);
    ctx.body = {
        ...games[gameId].getState(),
        token: token
    };
});


router.post("/state", (ctx) => {
    const token = ctx.request.body.token;
    if(gameIdCheckByToken(token)) {
        ctx.body = {
            ...games[getIdFromToken(token)].getState()
        }
    }
});

router.post("/hit", (ctx) => {
    const token = ctx.request.body.token;
    if(gameIdCheckByToken(token)) {
        games[getIdFromToken(token)].hit();
        ctx.body = {
            ...games[getIdFromToken(token)].getState()
        }
    }
})

router.post("/stand", (ctx) => {
    const token = ctx.request.body.token;
    if(gameIdCheckByToken(token)) {
        games[getIdFromToken(token)].stand();
        ctx.body = {
            ...games[getIdFromToken(token)].getState()
        }
    }
})

router.post("/reset", (ctx) => {
    const token = ctx.request.body.token;
    if(gameIdCheckByToken(token)) {
        games[getIdFromToken(token)].reset();
        ctx.body = {
            ...games[getIdFromToken(token)].getState()
        }
    }
});

export default router;