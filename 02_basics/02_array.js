const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)  // ye array ke andr array le leta hai naki merge krta hia 
// yani ki arary ke andr array but as a data koi 

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // concate to merge 2 array 
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spred operator spred kr deta hai ye
// hr ek element ko


 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//convert into string 
console.log(Array.from({name: "hitesh"})) // interesting 
// empty case kyui hme explain krna pdta haui key ya value
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // in sbko array  me  convert krta hai 