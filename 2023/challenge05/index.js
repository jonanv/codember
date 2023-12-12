import fs from 'node:fs';

const data = fs.readFileSync('2023/challenge05/database_attacked.txt', 'utf8');
const arrayData = data.split('\n');

let validUsers = [];
let invalidUsers = [];
const invalidUsersFirstLetters = [];

let regex = {
    id: /^[a-zA-Z0-9]+$/,
    username: /^[a-zA-Z0-9]+$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    age: /^[0-9]+$/,
    location: /^[a-zA-Z]+$/
};

arrayData.forEach((user) => {
    if (validateUser(user)) {
        validUsers.push(user);
    } else {
        invalidUsers.push(user);
    }
});

console.log(invalidUsers);

function validateUser(user) {
    let [ id, username, email, age, location ] = user.split(',');
    return (
        id.length > 0 &&
        regex['id'].test(id) &&
        username.length > 0 &&
        regex['username'].test(username) &&
        email.length > 0 &&
        regex['email'].test(email) &&
        (age.length === 0 || regex['age'].test(age)) &&
        (location.length === 0 || regex['location'].test(location))
    );
}

// user.forEach((attr, index) => {
//     if (attr.length > 0 && regex[index].test(attr)) {
//         console.log(true);
//     }
// });
// console.log(regex[2].test('jonan.vargas23@hotmail.com'));

