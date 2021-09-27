import {GameResult} from "../db/index.mjs";

export const getAllResultsController = async (ctx, next) => {
    ctx.body = await GameResult.find({}, null,{ sort: { time : -1 } }).limit(10);
}
