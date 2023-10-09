const args = process.argv.slice(2);

const verydisco = (str) => {
    let toReturn = [];
    if (str.includes(' ')) {
        let toWorkWith = str.split(' ');
        for (let index = 0; index < toWorkWith.length; index++) {
            let firstPart = toWorkWith[index].slice(0, Math.ceil((toWorkWith[index].length / 2)));
            let lastPart = toWorkWith[index].slice(Math.ceil(toWorkWith[index].length / 2));
            toReturn[index] = lastPart + firstPart;
        }
        return toReturn.join(' ');
    } else {
        let firstPart = str.slice(0,Math.ceil(str.length / 2));
        let lastPart = str.slice(Math.ceil(str.length / 2));
        return lastPart + firstPart;
    }
};

if (args.length > 0) {
    let result = verydisco(args[0]); 
    console.log(result);
}
