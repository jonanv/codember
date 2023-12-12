import fs from 'node:fs';

const data = fs.readFileSync('2023/challenge03/encryption_policies.txt' ,'utf8');
const arrayPass = data.split('\n');

let validPasswords = [];
let invalidPasswords = [];

for (const value of arrayPass) {
    let polite = value.split(' ');
    let [min, max] = polite[0].split('-');
    let letter = polite[1].split(':');
    let pass = polite[2];
    let responsePass = validatePass(min, max, letter[0], pass);
    if (responsePass) {
        validPasswords.push(value);
    } else {
        invalidPasswords.push(value);
    }
}

// console.log(validPasswords);
// console.log(invalidPasswords);
console.log('validas: ' + validPasswords.length);
console.log('invalida #13: ' + invalidPasswords[13]);
console.log(`invalida #42: ${ invalidPasswords[41] }`);
console.log(`submit ${ invalidPasswords[41].split(' ')[2] }`);


function validatePass(min, max, letter, pass) {
    let arrayPass = pass.split('');
    let count = 0;
    arrayPass.forEach(element => {
        if (element === letter) count++;
    });
    // console.log(count);
    if (count >= min && count <= max) return true;
    return false;
}