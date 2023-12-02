const dr = require('../data-reader');

const data = dr.readData('data.txt').split('\n');

const digits = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
}


function isDigit(str) {
    if (str.length === 1) {
        return str in '0123456789'.split('');
    }
    return false;
}

function findLeftNumber(line) {
    for (let i=0; i<line.length; i++) {
        if (isDigit(line[i])) {
            return line[i];
        }

        for (let j=i; j<=i+4; j++) {
            let fragment = line.slice(i, j + 1)
            if (Object.keys(digits).includes(fragment)) {
                return digits[fragment];
            }
        }
    }
}

function findRightNumber(line) {
    for (let i=line.length-1; i>=0; i--) {
        if (isDigit(line[i])) {
            return line[i];
        }

        for (let j=i; j>=i-4; j--) {
            let fragment = line.slice(j, i+1)
            if (Object.keys(digits).includes(fragment)) {
                return digits[fragment];
            }
        }

    }
}

let answerPart2 = 0;

for (let line of data) {
    let leftNumber = findLeftNumber(line);
    let rightNumber = findRightNumber(line);
    answerPart2 += parseInt(leftNumber+rightNumber);
}

console.log(answerPart2);
