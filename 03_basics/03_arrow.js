const user = {
   username: "Shivam",
   price: 999,

   welcomeMessage: function(){
    console.log(`${this.username} ,welcome to website`);
    
   }


}

user.welcomeMessage()
// user.price()
// user.username = "Shivam Gupta"
// console.log(user.username())