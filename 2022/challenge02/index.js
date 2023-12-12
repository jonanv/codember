import fs from 'fs-extra';

function asciiToRealWords(str) {
    let words = '';
    str.split(' ').forEach((asciiStr) => {
        let word = '';
        let num = 0;
        asciiStr.split('').forEach((character) => {
            num = num * 10 + (character - '0');
            if (num >= 32 && num <= 122) {
                word += String.fromCharCode(num);
                num = 0;
            }
        });
        words += word + ' ';
    });
    return words.trim();
}

console.time("challenge02");
const encryptedMessage = fs.readFileSync('2022/challenge02/encrypted.txt', 'utf8');

console.log(`submit ${asciiToRealWords(encryptedMessage.toString())}`);
console.timeEnd("challenge02");