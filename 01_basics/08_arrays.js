// array

const myArr = [0,7,2,3,4,5]

// console.log(myArr[1]);

// Javascript array-copy-operations create shallow copies
// shallow copes - same reference point

const myHeroes = ["shaktiman", "nagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// join humare array ko bind bhi krta hy aur uska type bhi string kar deta hy

// slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

// splice 
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);




