const marvel_heroes = ["thor", "Ironmman", "Spiderman"]
const dc_heroes = ["Superman", "flash", "Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// let mixHeroes = marvel_heroes.concat(dc_heroes)
// console.log(mixHeroes);

const all_new_arrays = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_arrays);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array);

// console.log(Array.isArray("Shivam"))
// console.log(Array.from("Shivam"))
// console.log(Array.from({name: "Shivam"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
