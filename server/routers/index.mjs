import Router from "koa-router";
import {Game} from "../game/structures/Game.mjs";
import {Player} from "../game/structures/Player.mjs";

const router = new Router();

const player1 = new Player("Danil");
const player2 = new Player("Yan");
const player3 = new Player("Yan");

const game = new Game([player1, player2, player3]);

const games = {

};

router.get("/state", (ctx) => {
    ctx.body = game.getState();
});

router.post("/hit", (ctx) => {
    game.hit();
    ctx.body = game.getState();
})

router.post("/stand", (ctx) => {
    game.stand();
    ctx.body = game.getState();
})

router.post("/reset", (ctx) => {
    game.reset();
    ctx.body = game.getState();
});

export default router;