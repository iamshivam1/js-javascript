// if
// const isUserLoggedIn = true
// const temp = 51

// if(temp < 50) {
// console.log("less than 50");

// } else {console.log("greater than 50");

// }



// <,>,<=,>=,==,!=,=== , 2! = 3

// const score = 200
// if (score > 100){
//    let power = "fly"
//     console.log(`User Power ${power}`);
    
// }

// const balance = 700

// if(balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1100");
// }


const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy Courses");
} 

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log('user logged in');
    
}