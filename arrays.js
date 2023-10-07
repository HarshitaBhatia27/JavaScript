// //const myArr= [0,1,2,10,20,"Harshita"] //in js arrays, elements of arrays can be of any type.

// // js arrays are resizeable.
// // Shallow copy 

// const myArr=[0,1,10,20,100]
// console.log(myArr[2]);

// //string array
// const Heros= ["Naagraj","Shaktiman"]

// //another way of declaring an array
// const myArr1= new Array(1,2,3,4)


// // **************** ARRAY METHODS ***************

// myArr.push(27)
// myArr.push(6)
// console.log(myArr);

// myArr.pop() //removes last element
// console.log(myArr);

// myArr.unshift(9) //inserted at start of array. Not a good practice because we have to shift all the elements. SO in case of large array it is very time consuming
// console.log(myArr);

// myArr.shift() //removes the element at index 0
// console.log(myArr);

// console.log(myArr.includes(9)); 
// console.log(myArr.indexOf(100));

// const newArr= myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr); // data type changed

// // slice , splice
// console.log("A: ", myArr);
// const newArr1 = myArr.slice(1,3) //second index not included

// console.log(newArr1);
// console.log("B: ", myArr);

// const newArr2= myArr.splice(1,3) //includes both indexes
// console.log(newArr2);
// console.log("C: ", myArr); //the elements that came in newArr2 are removed from original arr


const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros= ["Superman","flash","batman"]
// marvel_heros.push(dc_heros) //array ke andr dusra array aajayga. not a good way of merging
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const combineArr = marvel_heros.concat(dc_heros) //merges two arrays and returns a new array
// console.log(combineArr);

const AllnewHeros = [... marvel_heros, ...dc_heros] //recommended method, spread method
console.log(AllnewHeros);

const another_array= [1,2,3,4,[5,6,7],[10,7,[4,5]]]
const realArr = another_array.flat(Infinity) //pass the depth. in case of infinity it checks itself ki kitni depth h but we should always pass the depth and not this
console.log(realArr);

console.log(Array.isArray("Harshita"));
console.log(Array.from("Harshi")); //converts into array
console.log(Array.from({name:"Harshi"})); // we need to pass ki keys ka array banana hai ya values ka else it will give empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

console.log(Array.from([1, 2, 3], (x) => x + x)); //arrow function in arrays
