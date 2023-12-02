const dr = require('../data-reader');

const data = dr.readData('data.txt').split('\n');

function isDigit(str) {
    return '0123456789'.split('').includes(str);
}

function findLeftDigit(line) {
    for (let i=0; i<line.length; i++) {
        if (isDigit(line[i])) {
            return line[i];
        }
    }
}

let answerPart1 = 0;

for (let line of data) {
    let leftDigit = findLeftDigit(line);
    let rightDigit = findLeftDigit(line.split('').reverse().join(''));
    answerPart1 += parseInt(leftDigit+rightDigit);
}

console.log(answerPart1);