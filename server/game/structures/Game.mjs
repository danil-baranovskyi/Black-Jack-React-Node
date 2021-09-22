import {getDeck} from "../functions/getDeck.mjs";
import {shuffle} from "../functions/deckShuffle.mjs";

export class Game {
    constructor(players) {
        this.players = players;
        this.deck = shuffle(getDeck());
        this.currentPlayer = 0;

        this.deal();
    }

    reset() {
        this.currentPlayer = 0;
        this.deck = shuffle(getDeck());
        this.players.forEach((player) => {
            player.cards = [];
            player.score = 0;
            return player;
        });

        this.deal();
    }

    deal() {
        this.players.forEach(player => {
            player.takeCard(this.deck);
            player.takeCard(this.deck);
        })
    }

    hit() {
        if (this.currentPlayer === this.players.length) {
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
        if (this.currentPlayer < this.players.length) {
            this.currentPlayer++;
        }
    }

    winners() {
        if (this.currentPlayer !== this.players.length) {
            return null;
        }

        const scores = {};
        for (let i = 0; i < this.players.length; i++) {
            if (!scores[this.players[i].score]) {
                scores[this.players[i].score] = [];
            }

            scores[this.players[i].score].push(i);
        }

        for (let j = 21; j >= 2; j--) {
            if (!scores[j]) {
                continue;
            }

            return scores[j];
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