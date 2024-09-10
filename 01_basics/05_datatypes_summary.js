// Primitive datatypes

// 7 types : string ,number, bullean, null, undefined, symbol , Bigint
const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 36367378383883n

// Refrence type (Non Primitive datatypes )

// Array,Objects,Functions

const heroes = ["shaktiman","krish","Vikral"]

let myObj = {
    name: "hitesh",
    age: 22,
}

const myfunction = function(){
    // console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack Memory used in (Primitive (Copy))
// Heap Memory used in (Non Primitive (Reference))

let myYoutubeName = "Shivam mahajan"

let anotherName = myYoutubeName

anotherName = "Shivam gupta"

// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
    email: "user@email.com"
    
}

let userTwo = userOne

userTwo.email = "shivam@email.com"

console.log(userTwo);
console.log(userOne);