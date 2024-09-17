// const user = {
//    username: "Shivam",
//    price: 999,

//    welcomeMessage: function() {
//     console.log(`${this.username} ,welcome to website`);
    
//    }
// }




// user.welcomeMessage()
// // user.price()
// user.username = "Shivam Gupta"
// // console.log(user.username())
// user.welcomeMessage()

// function chai(){
//    let username = "Shivam"
//    console.log(this);
   
// }

// chai()

// const chai = () => {
//  let username = "Harry" 
//    console.log(this.username);
   
// }
// chai()

// const addTwo = (num1,num2) => {
//    return num1 + num2
// }

// console.log(addTwo(2, 3))

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(2, 3))

const addTwostr = (num1,num2) => ({username: "Shivam"})
console.log(addTwostr(2, 3))