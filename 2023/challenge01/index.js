import fs from 'node:fs'

const data = fs.readFileSync('2023/challenge01/message_01.txt', 'utf8');
let arrayAnimals = data.split(' ');
let animals = {};

arrayAnimals.map((animal) => {
    if (!animals[animal.toLowerCase().trim()]) {
        animals[animal.toLowerCase().trim()] = 1;
    } else {
        animals[animal.toLowerCase().trim()] += 1;
    }
});

let chainAnimals = '';
for (const [key, value] of Object.entries(animals)) {
    chainAnimals += key + value;
}
console.log(chainAnimals);