// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // automatically convert from string to number thats why error nhi milta
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // return true . 
// why == and comparison work deffrently 
// comparison convert null to a number ,treating it as 0.
// thats why 3rd one will return true and other one will false 




console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
// strikly check krta hai 

console.log("2" === 2);
// nhi hoga isme data type change kyuji hum strict equal use kr rhe hai 
// or error ayehga isme 