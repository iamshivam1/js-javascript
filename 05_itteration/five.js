const coding =  ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function(item){
    // console.log(item);
    
})

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
    
// } )


const myCoding = [
    {
    languageName: "Javascript",
    languageFile: "Js"
    },
    {
    languageName: "Java",
    languageFile: "java"
    },
    {
    languageName: "python",
    languageFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})