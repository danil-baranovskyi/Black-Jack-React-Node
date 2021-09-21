import Router from "koa-router";
import {Game} from "../game/structures/Game.mjs";
import {Player} from "../game/structures/Player.mjs";

const router = new Router();

const player1 = new Player("Danil");
const player2 = new Player("Yan");
const player3 = new Player("Sergei");

const game = new Game([player1, player2, player3]);

router.get("/deal", (ctx) => {
    game.deal();
    ctx.body = game.getState();
});

router.get("/hit", (ctx) => {
    game.hit();
    ctx.body = game.getState();
})

router.get("/stand", (ctx) => {
    game.stand();
    ctx.body = game.getState();
})

export default router;