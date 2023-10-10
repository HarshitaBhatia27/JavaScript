//This keyword and arrow function

//this is used to refer the current context
const user={
    username: "Sammy",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMsg()
// user.username="Harshita"
// user.welcomeMsg()
//console.log(this); //now current context is empty so it will print empty object

//Note: browser ke andr jo object h that is window object to jb log browser mei js run krte hai to vha "this" keyword windows ko refer karta hai.



// function chai(){
    //console.log(this); //function ke andr run karte hai to different type of values aati hai

    // let username ="Harhita"
    // console.log(this.username); //this only works for objects and not in functions. o/p is undefined
//}
// chai()

// ****************** ARROW Functions *****************
const chai = () => 
{
     let username ="Harhita"
    console.log(this);  //here this will be empty
}

// () => {}    basic syntax
// const addtwo = (num1,num2) =>{
//     return num1+num2   //explicit return
// }

//const addtwo = (num1,num2) => (num1+num2) //another way. {} mei wrap kia to return keyword likhna pdega and () kia to nhi. Implicit return

const addtwo = (num1,num2) => ({username: "Harshita"}) //object return krne ke liye () mei wrap krna hi pdega

console.log(addtwo(3,8));