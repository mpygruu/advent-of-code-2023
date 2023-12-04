const dr = require('../data-reader');
const data = dr.readData('data.txt').split('\n');

function getWinningNumbers(line) {
    return line.slice(line.indexOf(':')+2, line.indexOf('|')-1).trim().split(/ +/);
}

function getElfNumbers(line) {
    return line.slice(line.indexOf('|')+2).trim().split(' ');
}

function calculateCardPoints(winningNumbers, elfNumbers) {
    let points = 0;
    for (let number of elfNumbers) {
        if (winningNumbers.includes(number))  {
            points === 0 ? points++ : points*=2;
        }
    }
    return points;
}

let answerPart1 = 0;

for (let cardData of data) {
    let winningNumbers = getWinningNumbers(cardData);
    let elfNumbers = getElfNumbers(cardData);
    let points = calculateCardPoints(winningNumbers, elfNumbers);
    answerPart1 += points;
}

console.log(answerPart1);