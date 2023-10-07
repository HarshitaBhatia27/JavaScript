// ****************************** Primitive datatypes ****************************
//String, number, boolean, null, undefined, bigInt,symbol 

/* JavaScript is a dynamically typed language, which means that data types of variables are determined by 
the value they hold at runtime and can change throughout the program as we assign different values to them. */

// *****************Reference/ non premitive **************************
//arrays, objects, functions

const id = Symbol('27')
const id2 = Symbol('27') //both are unique
console.log(id== id2);

const bigNum = 3645643576654356754n //bigint


const heros = ["shaktiman", "Naagraj" ,"doga"];
let myObj = {

    name: "Harshita",
    age: 21,
}

const myFun = function() {
        console.log("Hello world");
}


// Primitive_dt(STACK), Non-primitive(HEAP)
// stack mei copy milta hai, heap mei reference any changes in heap is visible in original value


let user={
    email: "hb@gmail.com",
    upi: "hb2@ybl",
}

let user2 = user  // user ka refernce milega user2 ko

user2.email = "hb27@gmail.com"

console.log(user.email)
console.log(user2.email) // object is a non primitive dt, hence it is passed by reference