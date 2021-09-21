export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.cards = [];
    }

    takeCard(deck) {
        const card = deck.pop();
        this.cards.push(card);
        this.score += card.nominal;
    }
}