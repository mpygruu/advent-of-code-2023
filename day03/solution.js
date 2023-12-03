const dr = require('../data-reader');

const data = dr.readData('data.txt').split('\n');

isDigit = (char) => '0123456789'.includes(char);
isDot = (char) => char === '.';
isSymbol = (char) => !(isDot(char) || isDigit(char));

// part 2 to be done some day
isAsterisk = (char) => char === '*';

function numberAdjacentToSymbol(startIndex, endIndex, numberRow, symbolChecker) {
    for (let i=startIndex; i<=endIndex; i++) {
        if (digitAdjacentToSymbol(numberRow, i, symbolChecker)) return true;
    }
    return false;
}

function digitAdjacentToSymbol(row, col, symbolChecker) {
    let minRow = Math.max(row-1, 0);
    let minCol = Math.max(col-1, 0);
    let maxRow = Math.min(row+1, data.length-1);
    let maxCol = Math.min(col+1, data[row].length-1);

    for (let i=minRow; i<=maxRow; i++) {
        for (let j=minCol; j<=maxCol; j++) {
            if (symbolChecker(data[i][j])) return true;
        }
    }
    return false;
}

let answerPart1 = 0;

for (let i=0; i<data.length; i++) {
    let line = data[i];

    let currentNumberString = '';
    let currentNumberStartIndex = -1;


    for (let j=0; j<line.length; j++) {
        let character = line[j];


        if (isDigit(character)) {
            currentNumberString += character;
            if (currentNumberStartIndex === -1) currentNumberStartIndex = j;
        }

        if ((!isDigit(character) || (j===data[i].length-1)) && currentNumberString !== '') {
            if (numberAdjacentToSymbol(currentNumberStartIndex, j-1, i, isSymbol)) {
                answerPart1 += parseInt(currentNumberString);
            }

            currentNumberString = '';
            currentNumberStartIndex = -1;
        }
    }
}

console.log(answerPart1)