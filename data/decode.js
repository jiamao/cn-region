const fs = require('fs');
const data = fs.readFileSync('./full.csv', {
    encoding: 'utf8'
});

const region = {};

const lines = data.split('\n');
for(const l of lines) {
    const cp = l.split('\t');
    region[cp[1]] = {
        id: cp[0],
        name: cp[1],
        code: cp[8],
        py: cp[5],
        type: cp[2],
        typeName: cp[7],
        parent: cp[10],
        regCode: cp[9]
    }
}

fs.writeFileSync('./address.js', JSON.stringify(region));