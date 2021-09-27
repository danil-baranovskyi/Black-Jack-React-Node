import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gameResultSchema = new Schema({
    clientId: String,
    players: [],
    winners: [],
    time : { type : Date, default: Date.now }
});

mongoose.connect("mongodb://localhost:27017/gamebd",
    {useUnifiedTopology: true, useNewUrlParser: true},
    err => {
        if (err) console.log(err);
    });

export const GameResult = mongoose.model("GameResult", gameResultSchema);

