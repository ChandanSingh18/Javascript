const name = "chandan"
const repocount = 100

//console.log(name + repocount)

console.log(`My name is ${name} and I have ${repocount} repos`);

const sentence = new String("CODING")

console.log(sentence[1]) // O
console.log(sentence.__proto__) // String.prototype

console.log(sentence.length) // 6
console.log(sentence.toUpperCase()) // CODING
console.log(sentence.toLowerCase()) // coding
console.log(sentence.charAt(5)) // G
console.log(sentence.indexOf("I")) // 3
console.log(sentence.slice(1, 4)) // DIN
console.log(sentence.split("D")) // [ 'CO', 'ING' ]
console.log(sentence.replace("CODING", "SINGH")) // SINGH
console.log(sentence) // CODING (original string is unchanged)
console.log(sentence.valueOf('')) // CODING (returns the primitive value of the string)