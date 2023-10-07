console.log(2>4);
console.log(2!=0);

console.log("4">1); // 4 is converted into num automatically

/* Always make sure that while comparing , datatypes of the values must be same */


console.log(null >0);
console.log( null == 0); //false
console.log( null >=0); //true

/* equity check == and comparisons > < >= <= works differently. Comparisions convert null to a num, treating it as 0, thats y null >=0 is true*/


// strict check === --> this not only comapres the values but data types also
console.log("2"===2); //false
