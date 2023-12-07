module.exports = class Hand {
    constructor(cards, bid) {
        this.cards = cards;
        this.bid = bid;
    }

    get type() {
        if(this.isFiveOfAKind(this.cards)) return 'five-of-a-kind';
        else if(this.isFourOfAKind(this.cards)) return 'four-of-a-kind';
        else if(this.isFullHouse(this.cards)) return 'full-house';
        else if(this.isThreeOfAKind(this.cards)) return 'three-of-a-kind';
        else if(this.isTwoPair(this.cards)) return 'two-pair';
        else if(this.isOnePair(this.cards)) return 'one-pair';
        else if(this.isHighCard(this.cards)) return 'high-card';
        return 'unidentified';
    }

    cardCountsInHand(cards) {
        let cardCounts = {}
        for (let card of cards) {
            cardCounts[card] ? cardCounts[card]++ : cardCounts[card] = 1;
        }
        return cardCounts;
    }

    isFiveOfAKind = (cards) => Object.values(this.cardCountsInHand(cards)).includes(5);
    isFourOfAKind = (cards) => Object.values(this.cardCountsInHand(cards)).includes(4);
    isFullHouse = (cards) => Object.values(this.cardCountsInHand(cards)).includes(3) && Object.values(this.cardCountsInHand(cards)).includes(2);
    isThreeOfAKind = (cards) => Object.values(this.cardCountsInHand(cards)).includes(3);
    isTwoPair = (cards) => Object.values(this.cardCountsInHand(cards)).includes(2) && Object.keys(this.cardCountsInHand(cards)).length === 3;
    isOnePair = (cards) => Object.values(this.cardCountsInHand(cards)).includes(2);
    isHighCard = (cards) => Object.keys(this.cardCountsInHand(cards)).length === 5;
}