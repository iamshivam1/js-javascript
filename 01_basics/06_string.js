const name = "Shivam"
const repoCount = 50

// console.log(name + " " +repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shivam-gp-man')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-9,4)
// console.log(anotherString);

const newStringOne = "   Shivam  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://shivam.com/shivam%20gupta"
console.log(url.replace('%20', '-'));

console.log(url.includes('shivam'));


console.log(gameName.split('-'));
