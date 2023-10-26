function multipleBy5(num){
    return num*5;
}

multipleBy5.power=2; //function is an object. Everything in js is an object
// console.log(multipleBy5( 5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(username,score){
    this.username = username
    this.score= score
}

createUser.prototype.increment = function(){
    this.score++ // jisne bulaya hai uski value inc krega
}

createUser.prototype.printMe= function(){
    console.log(`Price is ${this.score}`);
}

const chai= new createUser("Chai",25)
const coffee = new createUser("Coffee",250)

// chai.printMe() // jab is function ko access krte hai tb ye error dega because we have injected the properties but variable per transfer kri tab usse nhi bataya ki ye additional prop aay h, therefore, we have to use new keyword
// chai.increment()
// chai.printMe()




/*

****************************** functionality behind new keyword *********************************************

A new object is created: The new keyword initiates the creation of a new js object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to the properties and methods defined
on the constructor's prototype

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor. Js assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn,t return a non primitive value (object, array, function etc.), the newly created object
is returned

*/


// *************************** prototype *****************************************8

let myName = "harshita    "
//console.log(myName.trim().length);
 

let myHeros= ["thor","spiderman"]
let heroPower ={
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Coffee = function(){ // sabke pass ye property chli gyi because js mei sb cheez hi object hai
    console.log(`Coffee is present in all objects`);
}

//heroPower.Coffee() //object 
//myHeros.Coffee() //array also has the prototype

Array.prototype.Tea = function(){
    console.log('Lets have tea');
}

//heroPower.Tea() // it will not have access to array prototype kyuki lower level (array) ka access higher level (object) per nhi hota hai
//myHeros.Tea() //only array will have the access


// ******************************************* Inheritance ******************************************

const user={
    name:"Harshita",
    email:"harshita@gmail.com"
}
const teacher = {
    makeVideo : true
}
const TeachingSupport ={
    isAvailable: false
}
const TASupport ={
    makeAssignment: 'Js Assignment',
    fullTime: true,
 //   __proto__: TeachingSupport   // TASupport will access prop of Teaching support
}

//teacher.__proto__=user //teacher will access all prop. of user

//modern syntax
//Object.setPrototypeOf(TeachingSupport, teacher) //teaching support access prop of teacher



let anotherUsername = "Coffee    "
String.prototype.truelength=function(){ //property injected in all strings
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.truelength()
myName.truelength()