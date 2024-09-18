// const userEmail = "shivamm@gmail"

// if(userEmail){
//     console.log("got user Email");  
// }else{
//     console.log("Don't havev user email");
// }

const userEmail = []

if(userEmail){
    console.log("got user Email");  
}else{
    console.log("Don't havev user email");
}

// falsy email

// false 0, -0, bigInt 0n, "" , null , undefined , NaN

// truthy value 
// "0", "false", " ", [] , {}, function() {}

// if(userEmail.length === 0){
//     console.log('Array is empty');
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log('Object is empty');
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

