const name = 'Harshita '
const repoCount = 30

// console.log(name + repoCount);
console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`); //better way and we use `` these inveretd commas for strings

const gameName = new String('harshita-bhatia') //string is an object
console.log(typeof(gameName)); //strings for a key value pair
console.log(gameName);
console.log(gameName[9]); // access value through key
console.log(gameName.__proto__); //prototype

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2)); //char at a given position
console.log(gameName.indexOf('i')); //index of given char

const newstr = gameName.substring(0,5); //last index is not included
console.log(newstr);

const anotherstr = gameName.slice(-12,6);
console.log(anotherstr);

const newStr1= "   Computer   "; //too many extra spaces
console.log(newStr1);
console.log(newStr1.trim()); //removes starting an ending spaces


const url= "https://hitesh.com/hitesh%20choudhary" //sometimes the space in url is replaced with %20. to remove this we will use replace fun
console.log(url.replace('%20','-'));

// keyword present in str or not
console.log(url.includes('comp'));

//convert str to array
console.log(gameName.split('-')); //split on basis of -