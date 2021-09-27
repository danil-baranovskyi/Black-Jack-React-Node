import Router from "koa-router";
import {Game} from "../game/structures/Game.mjs";
import {Player} from "../game/structures/Player.mjs";
import jwt from "jsonwebtoken";
import {v4 as uuidv4} from 'uuid';
import {tokenVerify, validCheck} from "../helpers/index.mjs";
import {authMiddleWare} from "../middlewares/index.mjs";
import {getAllResultsController} from "../controllers/getAllResultsController.mjs";
import {resetGameController} from "../controllers/resetGameController.mjs";
import {getStateController} from "../controllers/getStateController.mjs";
import {standController} from "../controllers/standController.mjs";
import {hitController} from "../controllers/hitController.mjs";

const router = new Router();

export const games = {};
export const secKey = "ya ne loh, ya smogu";

router.post("/start", (ctx) => {
    const requestData = ctx.request.body;

    validCheck(ctx, requestData);

    if (requestData.token) {
        games[tokenVerify(requestData.token)] =
            new Game(requestData.playersNames.map(
                (playerName) => new Player(playerName))
            );

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

router.post("/hit", authMiddleWare, hitController)

router.post("/stand", authMiddleWare, standController)

router.post("/reset", authMiddleWare, resetGameController);

router.get("/results", getAllResultsController);

router.post("/state", authMiddleWare, getStateController);

export default router;