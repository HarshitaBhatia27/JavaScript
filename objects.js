//*************************** singleton --> jab constructor se object banate hai to singleton banta hai and dusre tarah se banate hai to vo singleton nhi hota
//Object.create --> constructor method
const tinderUser = new Object()


tinderUser.id = "123abc"
tinderUser.name="Dev"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser={
    email:"sandy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harshita",
            lastname: "Bhatia"
        }
    }
} //we can do nesting in objects
//console.log(regularUser.fullname.userfullname);

//combining objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3 ={obj1,obj2} //in this case, two objects are inside obj3. Not a correct method
// console.log(obj3);
const obj3=Object.assign({},obj1,obj2) //values will be combined. Correct way. {} is optional but a good choice means that it is a target while other objects passed are taken as sources
//console.log(obj3);

const obj4= {...obj1,...obj2} //another method of combining
//console.log(obj4);

//jab database se value aaygi to vo array of objects aaynge
const users=[
    {
        id:  1,
        email: "yoyo@gmail.com"
    },
    {
        id:2,
        email:"Sammy@gmail.com"
    }

]

//console.log(users[1].email); //accessing values 


console.log(tinderUser);
console.log(Object.keys(tinderUser)); //returned as array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('email')); //tells if an object has a property or not






// *********************** object literals --> not singleton*****************************

// const mySym = Symbol("key1") //-> symbol
// const JsUser = {
//     name: "Harshita",
//     "full name": "Harshita Bhatia",
//     age: 21,
//     location: "Faridabad",
//     //mySym: "myKey1", //not correct way
//     [mySym]:"mykey1", //correct way
//     email: "harshita@gmail.com",
//     isLoggedIn: false,
//     LastloginDays:["Monday, Wednesday"]
// }
// console.log(JsUser.email); //accessing objects
// console.log(JsUser["email"]); 
// console.log(JsUser["full name"]); //cannot be accessed through dot
// // console.log(JsUser.mySym);
// // console.log(typeof JsUser.mySym); // it is taken as string and not as a symbol

// console.log(JsUser[mySym]);

// JsUser.email ="harshi@gmail.com"
// console.log(JsUser.email); //changing an object element
// //Object.freeze(JsUser) //now it cannot be changed
// //JsUser.age = 20
// //console.log(JsUser); // changes are not reflected

// JsUser.greeting = function(){
//     console.log("Hello JS");
// }
// JsUser.greeting2=function(){
//     console.log(`Hello Js User, ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());