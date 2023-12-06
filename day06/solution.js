const dr = require('../data-reader');
const data = dr.readData('data.txt').split('\n');

getNumbersFromLineAsArray = (line) => line.slice(line.indexOf(':')+1).trim().split(/ +/).map((val) => parseInt(val));
getNumberFromLineMerged = (line) => parseInt(line.slice(line.indexOf(':')+1).replaceAll(/ +/g, ''));

function calculateWaysToWinForRace(raceLength, recordDistance) {
    let sum = 0;
    for (let i=1; i<raceLength; i++) {
        let predictedDistance = i*(raceLength-i);
        if (predictedDistance > recordDistance) sum++;
    }
    return sum;
}

let raceLengths = getNumbersFromLineAsArray(data[0]);
let raceDistances = getNumbersFromLineAsArray(data[1]);

let answerPart1 = 1;

for (let i=0; i< raceLengths.length; i++) {
    let numberOfWaysToWin = calculateWaysToWinForRace(raceLengths[i], raceDistances[i]);
    answerPart1 *= numberOfWaysToWin;
}

console.log(answerPart1);

let singleRaceLength = getNumberFromLineMerged(data[0]);
let singleRaceRecord = getNumberFromLineMerged(data[1]);
let numberOfWaysToWinSingleRace = calculateWaysToWinForRace(singleRaceLength, singleRaceRecord);

console.log(numberOfWaysToWinSingleRace);