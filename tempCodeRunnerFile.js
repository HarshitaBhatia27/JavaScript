console.log(JsUser.email); //accessing objects
console.log(JsUser["email"]); 
console.log(JsUser["full name"]); //cannot be accessed through dot
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); // it is taken as string and not as a symbol

console.log(JsUser[mySym]);

JsUser.email ="harshi@gmail.com"
console.log(JsUser.email);