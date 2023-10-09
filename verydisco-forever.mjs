import fs from 'fs';

let args = process.argv.slice(2);

function veryDisco(word) {
    let mid = Math.ceil(word.length / 2);
    return word.slice(mid) + word.slice(0, mid);
}
let result
if (args.length > 1) {
    result = veryDisco(args[0]);
}else{
    result = args.flatMap(arg => arg.split(' ').map(word => veryDisco(word)));
    result = result.join(' ')
}

fs.writeFile('verydisco-forever.txt', result, (err) => {
    if (err) throw err;
});