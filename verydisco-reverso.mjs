import fs from 'fs'


const fileName = process.argv.slice(2)[0];
const fromFileNameToTheFile = (fileName) => {
    fs.readFile(fileName, 'utf-8', (err, content) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log(verydisco(content));
        }
    });
};

fromFileNameToTheFile(fileName)

const verydisco = (str) => {
    let toReturn = [];
    if (str.includes(' ')) {
        let toWorkWith = str.split(' ');
        for (let index = 0; index < toWorkWith.length; index++) {
            let firstPart = toWorkWith[index].slice(0, Math.floor((toWorkWith[index].length / 2)));
            let lastPart = toWorkWith[index].slice(Math.floor(toWorkWith[index].length / 2));
            toReturn[index] = lastPart + firstPart;
        }
        return toReturn.join(' ');
    } else {
        let firstPart = str.slice(0,Math.floor(str.length / 2));
        let lastPart = str.slice(Math.floor(str.length / 2));
        return lastPart + firstPart;
    }
};