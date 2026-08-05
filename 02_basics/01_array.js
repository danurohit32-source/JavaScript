// array

const myArr = [0, 1, 2, 3, 4, 5]// array declare
const myHeors = ["shaktiman", "naagraj"]// another method to declare

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6) // adding 6 value into array 
myArr.push(7) //  adding 7  to  array 
myArr.pop()//  last value ko remove krta hai array se 

myArr.unshift(9)// unshift array ke starting me value add k rta hia 
// pr ese  me sari values ko shift krna pdega is liye km use krte hai 
myArr.shift() // starting value ko remove kr deta hai jo shift krke add kiya tha

console.log(myArr.includes(9)); // checking ki array me 9 hai ki nhi 
console.log(myArr.indexOf(3)); // ofcurese index check krne ke liye 

const newArr = myArr.join() // . join  array  ko string me  change kr deta hia 
// fir value array se string me change ho jati .

console.log(myArr);
console.log( newArr);


slice, splice


// slice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //ye array ko manupulate nhi krta hai srf return krta hai 
// orignal aray me ched chad nhi krta 

console.log(myn1);
console.log("B ", myArr);

//splice
const myn2 = myArr.splice(1, 3) // pr splice orinal array ko ched deta hai i mean usme change kr deta hai 
console.log("C ", myArr);
console.log(myn2);