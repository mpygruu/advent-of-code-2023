const dr = require('../data-reader');

const data = dr.readData('data.txt').split('\n');

function getColorCountsForSet(setData) {
    let colorCounts = {}

    let reducedSetData = setData.trim().split(/ |, |;+/);
    for (let i=0; i<reducedSetData.length; i+=2) {
        let count = parseInt(reducedSetData[i]);
        let color = reducedSetData[i+1];
        colorCounts[color] = count;
    }

    return colorCounts;
}

let gameImpossible = (colorCounts, elfBagColorCounts) => (colorCounts.red > elfBagColorCounts.red
    || colorCounts.green > elfBagColorCounts.green || colorCounts.blue > elfBagColorCounts.blue)

let elfBagColorCounts = { 'red': 12, 'green': 13, 'blue': 14 }

let answerPart1 = 0;
let answerPart2 = 0;

for (let line of data) {
    let gameId = parseInt(line.slice(5, line.indexOf(':')));
    let cubeSetsData = line.slice(line.indexOf(':')+2).split(';');

    let gamePossible = true;
    let minSet = { 'red': 0, 'green': 0, 'blue': 0 }

    for (let i=0; i<cubeSetsData.length; i++) {
        let colorCounts = getColorCountsForSet(cubeSetsData[i])

        for (let color of Object.keys(colorCounts)) {
            if (colorCounts[color] > minSet[color]) {
                minSet[color] = colorCounts[color];
            }
        }

        if (gameImpossible(colorCounts, elfBagColorCounts)) {
            gamePossible = false;
        }
    }

    answerPart2 += minSet.red * minSet.green * minSet.blue;

    if (gamePossible) {
        answerPart1 += gameId;
    }
}

console.log('Answer to part 1: ', answerPart1)
console.log('Answer to part 2: ', answerPart2)