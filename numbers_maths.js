// const balance = new Number(10000) //explicitly defining data type
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof(balance)); //converted to string
// console.log(balance.toString().length); //it will all properties that are in strings
// console.log(balance.toFixed(2)); //adding precision value

// const Num2= 123.7824
// console.log(Num2.toPrecision(3)); 

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //covert values acc to indian standard

// ******************************* MATHS ***************************************************************

// --> library in js

console.log(Math);
console.log(Math.abs(-27));
console.log(Math.round(2.7));
console.log(Math.ceil(2.3)); // it will always choose upper value. means generally for 2.3 ans should be 2 but it choose upper value 3
console.log(Math.floor(6.9)); //always choose lower value
console.log(Math.min(-1,34,-23));
console.log(Math.max(100,23,45));
console.log(Math.random()); // always keep changing. range 0-1
console.log((Math.random()*10) + 1);

const min= 10
const max=20
 
console.log(Math.floor(Math.random() * (max-min + 1))+min); //value will be b/w 10 and 20 only