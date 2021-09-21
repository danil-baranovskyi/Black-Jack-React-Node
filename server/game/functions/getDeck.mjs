import {Card} from "../structures/Card.mjs";

const suitsIcons = [
    "./img/spadeSuit.png",
    "./img/diamondSuit.png",
    "./img/clubSuit.png",
    "./img/heartSuit.png"
]
const icons = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

export function getDeck() {
    let deck = [];

    for (let i = 0; i < suitsIcons.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push(new Card(icons[x], values[x], suitsIcons[i]));
        }
    }

    return deck;
}