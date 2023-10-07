/*
let score= "33"
console.log(typeof score);
let valueInNumber = Number(score) //score is converted into number
console.log(typeof valueInNumber); // as times when we will convert into number the values will be converted even tho it is not required

let age="21abc"
let new_age = Number(age)
console.log(typeof new_age) //converted into number
console.log(new_age); // but it is actually as NaN (not a number ) value.

let no = null
let new_no = Number(no)
console.log(typeof new_no) //converted into number
console.log(new_no); //converted to 0

let score_1= undefined
let score_2 = Number(score_1)
console.log(typeof score_2) //converted into number
console.log(score_2); //naN

*/

// "33" --> 33
// "33abc" ---> naN but type is number
// True-> 1, false->0
//empty string --> false
// string --> true


// let isLoggedIn = 1
// let booleanisLoggenIn = Boolean(isLoggedIn)
// console.log(typeof booleanisLoggenIn); // converted to bool
// console.log(booleanisLoggenIn); 

// let sum= 33
// let stringnum = String(sum)
// console.log(typeof stringnum); //converted to string
// console.log(stringnum); 

// **************************OPERATIONS**********************************************

// let value=3
// let negval = -value
// console.log(negval);

// console.log(2+1);
// console.log(2-1);
// console.log(2*4);
// console.log(2**8); //power


// let str1="Hello"
// let str2= " Harshita"
// let str3= str1 + str2
// console.log(str3);

// console.log(1 + "2"); //adding string and num --> 12 o/p
// console.log("1" + 2+ 2 ); // 122, it will not add 2's
// console.log(1+ 2 + "2"); // 32 here 1+2 is added

let count=100
++count; //incremented firstly
console.log(count);

let counter = 50
let count1 = counter++; //first value is assigned and then incremented
console.log(count1);
console.log(counter);

