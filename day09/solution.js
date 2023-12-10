const dr = require('../data-reader');
const data = dr.readData('data.txt').split('\n');
const Node = require('./node');
function findNodeByName(nodeName, nodes) {
    for (let node of nodes) {
        if (node.name === nodeName) {
            return node;
        }
    }
    return 'unidentified';
}

function loadNodesfromData(data) {
    let nodes = [];
    for (let i=2; i<data.length; i++) {
        let name = data[i].slice(0, data[i].indexOf(' '));
        let left = data[i].slice(data[i].indexOf('(')+1, data[i].indexOf(','));
        let right = data[i].slice(data[i].indexOf(', ')+2, data[i].indexOf(')'));
        nodes.push(new Node(name, left, right));
    }
    return nodes;
}

function loadNavigationfromData(data) {
    return data[0];
}

const navigation = loadNavigationfromData(data);
const nodes = loadNodesfromData(data);

const startNode = findNodeByName('AAA', nodes);
const destinationNode = findNodeByName('ZZZ', nodes);

let destinationFound = false;
let step = 0;
let currentNode = startNode;

while(!destinationFound) {
    let navigationStep = step % navigation.length;
    currentNode = findNodeByName(navigation[navigationStep] === 'L' ? currentNode.leftNeighbor : currentNode.rightNeighbor, nodes);
    step++;
    if (currentNode === destinationNode) destinationFound = true;
}

console.log(step)