import fs from 'node:fs';

const data = fs.readFileSync('2023/challenge05/database_attacked.txt', 'utf8');
const arrayData = data.split('\n');

let validUsers = [];
let invalidUsers = [];
const invalidUsersFirstLetters = [];

let regex = {
    id: /^[a-z0-9]+$/i,
    username: /^[a-z0-9]+$/i,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    age: /^\d+$/,
    location: /^\w+(\s+\w+)*$/,
};

arrayData.forEach((user) => {
    const [ id, username, email, age, location ] = user.split(',');
    if (!validateUser({ id, username, email, age, location })) {
        invalidUsers.push(user);
        invalidUsersFirstLetters.push(username.split('')[0]);
    } else {
        validUsers.push(user);
    }
});

console.log(invalidUsers);
console.log(`submit ${ invalidUsersFirstLetters.join('') }`);

function validateUser(user) {
    let { id, username, email, age, location } = user;
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