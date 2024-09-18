// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value:  ${i}`);
    
    for (let e = 1; e <= 10; e++) {
        // console.log(`Inner Loop value: ${e} and inner loop ${i}`);
        // console.log(i + '*' + e + ' = ' + i*e);
        
        
    }
    
}

let myArray = ['flash', 'batman', 'superman']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index ==5) {
//         console.log("5 is detected");
//         break
//         }
//     console.log(`Value of i is ${index}`);;
    
// }
for (let index = 1; index <= 20; index++) {
    if(index ==5) {
        console.log("5 is detected");
        continue
        }
    console.log(`Value of i is ${index}`);;
    
}