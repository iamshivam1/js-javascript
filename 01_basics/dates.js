// Dates

let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDate);

let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString());

let myCreateDate1 = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date("01-14-2023")
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myCreateDate2.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})