import fs from 'node:fs';

const data = fs.readFileSync('2023/challenge04/files_quarantine.txt', 'utf8');
const arrayChecksum = data.split('\n');

const realFiles = [];

arrayChecksum.forEach(element => {
    if (verifiedFiles(element)) realFiles.push(element);
});
console.log(realFiles);
console.log(`archivo real #33: ${ realFiles[32] }`);
console.log(`submit ${ realFiles[32].split('-')[0] }`);

function verifiedFiles(elementChecksum) {
    let [chain, checksum] = elementChecksum.split('-');
    let file = {};
    let arrayChain = [...chain];

    // console.log(arrayChain);
    arrayChain.forEach((element) => {
        (file[element] != undefined) 
            ? file[element] += 1 
            : file[element] = 1;
    });
    // console.log(file);
    let fileChecksum = '';
    
    arrayChain.forEach((element) => {
        if (file[element] === 1) fileChecksum += element;
    });
    // console.log(fileChecksum);
    return fileChecksum === checksum;
}