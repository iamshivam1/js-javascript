// for of

// ["","",""]
// [{},{},{}]

const arr = [5,1,2,3,4]

for (const num of arr) {
    // console.log(num);
}

const greetings = 'Hello world!'
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set('UK', "United Kingdom")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,":-", value);
    
}

// const myObj ={
//     game1: "nfs",
//     game2: "spiderman"

// }

// for (const [key,value] of myObj) {
//     console.log(key,value);
    
// } not itteratable on object


