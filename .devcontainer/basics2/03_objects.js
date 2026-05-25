//singleton

//object literal

const symbol = Symbol("id");

const person = {
    name: "chandan",
    symbol: "id",
    "full name": "chandan Singh",
    age: 24,
    location: "India",
    email: "chandan@gmail.com",  
}

console.log(person["age"]);
console.log(person[symbol]);

person.age = 25;

console.log(person);
