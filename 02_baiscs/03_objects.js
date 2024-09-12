// singleton constructor k through 
// objects.create

// jab hum litreal ki trah declare krte hy singeton nhi 

// Objects literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Shivam",
    [mySym]: "mykey1",
    age: 18,
    location: "jammu",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]

}

// console.log(JsUser.age);
// console.log(JsUser["lastLoggedIn"]);
// console.log(JsUser[mySym]);

JsUser.name = "Shivam Gupta";
// console.log(JsUser["name"]);

// Object.freeze(JsUser)
JsUser.name = "Shivam Guptas";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
