import fs from 'node:fs';

const data = fs.readFileSync('2023/challenge02/message_02.txt', 'utf8');

const arrayCompiler = data.split('');

let chain = '';
let number = 0;
arrayCompiler.map((operation) => {
    switch (operation) {
        case '#': // "#" Incrementa el valor numérico en 1.
            number += 1;
            break;
        case '@': // "@" Decrementa el valor numérico en 1.
            number -= 1
            break;
        case '*': // "*" Multiplica el valor numérico por sí mismo.
            number *= number;
            break;
        case '&': // "&" Imprime el valor numérico actual.
            chain += number;
            break;
    }
});

console.log(`submit ${ chain }`);