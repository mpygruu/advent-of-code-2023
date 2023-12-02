const fs = require('node:fs');

function readData(filePath) {
    try {
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.error(err);
    }
}

module.exports =  { readData };