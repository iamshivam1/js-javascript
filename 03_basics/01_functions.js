function saymyName () {
console.log("S");
console.log("H");
console.log("I");
console.log("V");
console.log("A");
console.log("M");
}

// saymyName()

// function addTwoNumbers(number1,number2) {
//    console.log(number1 + number2)
// }

function addTwoNumbers(number1,number2) {
//   let result = number1 + number2
//   return result
    return number1 + number2
 }

const result = addTwoNumbers(2,3) 
// console.log("Result: " ,  result);


// function xyx(arguments){

// }
// xyz (paraments)

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shivam"));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 600))


const user = {
    username: "Shivam",
    price: 199
}

function handleObject(anyobject){
    console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "shivam gupta",
    price: 566
})

const myNewArray = [200,100,400,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))