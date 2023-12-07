const dr = require('../data-reader');
const Hand = require('./hand');

const data = dr.readData('data.txt').split('\n');

function sortHandsByStrength(hands) {
    return [].concat(
        hands.filter((hand) => hand.type === 'high-card').sort(handComparer),
        hands.filter((hand) => hand.type === 'one-pair').sort(handComparer),
        hands.filter((hand) => hand.type === 'two-pair').sort(handComparer),
        hands.filter((hand) => hand.type === 'three-of-a-kind').sort(handComparer),
        hands.filter((hand) => hand.type === 'full-house').sort(handComparer),
        hands.filter((hand) => hand.type === 'four-of-a-kind').sort(handComparer),
        hands.filter((hand) => hand.type === 'five-of-a-kind').sort(handComparer),
    );
}

function handComparer(hand1, hand2) {
    const cardStrengthOrder = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
    for (let i=0; i<hand1.cards.length; i++) {
        if (cardStrengthOrder.indexOf(hand1.cards[i]) === cardStrengthOrder.indexOf(hand2.cards[i])) continue;
        if (cardStrengthOrder.indexOf(hand1.cards[i]) < cardStrengthOrder.indexOf(hand2.cards[i])) {
            return 1;
        }
        return -1;
    }
}

let hands = [];
for (let line of data) {
    let cards = line.split(' ')[0];
    let bid = parseInt(line.split(' ')[1]);
    hands.push(new Hand(cards, bid));
}

let handsSorted = sortHandsByStrength(hands);
let answerPart1 = 0;
for (let i=0; i<handsSorted.length; i++) {
    answerPart1 += (i+1)*handsSorted[i].bid;
}

console.log(answerPart1)