import {getDeck} from "../functions/getDeck.mjs";
import {shuffle} from "../functions/deckShuffle.mjs";

export class Game {
    constructor(players) {
        this.players = players;
        this.deck = shuffle(getDeck());
        this.currentPlayer = 0;
    }

    deal() {
        this.players.forEach(el => {
            el.takeCard(this.deck);
            el.takeCard(this.deck);
        })
    }

    hit() {
        if (this.currentPlayer === this.players.length) {
            console.log("over")
            return;
        }

        if (this.players[this.currentPlayer].score <= 21) {
            this.players[this.currentPlayer].takeCard(this.deck);
        }

        if (this.players[this.currentPlayer].score > 21) {
            this.stand();
        }
    }

    stand() {
        this.currentPlayer++;
    }

    winners() {
        if (this.currentPlayer !== this.players.length) {
            return null;
        }

        for (let j = 21; j >= 2; j--) {
            const filtered = this.players.filter(player => player.score === j);
            if(filtered.length > 0) {
                return filtered;
            }
        }

        return [];
    }

    getState() {
        return {
            players: this.players,
            currentPlayer: this.currentPlayer,
            winners: this.winners()
        }
    }
}