// const promise1= new Promise(function (resolve,reject){
//     //do an async task
//     // db calls, cryptography, network related
//     console.log("Hello");
//     setTimeout(function(){
//         console.log('Async task is complete');
//      resolve() //connecting with .then().It will always run after the print statement
//     },2000)
    
// }) //promise creation

//********************************************************************************

// promise1.then(function(){  //.then() is connected with resolve
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })
//********************************************************************************
// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Harshita", email:"Harshita@gmail.com"})
        
//     }, 1000);
// })

// promise3.then(function(user){
//     console.log(user); //the resolve() sends data to .then()
// })

// ********************************************************************************

// const promise4= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"Harshita", password:"12345@"})
//         }
//         else{
//             reject('something went wrong') //gives error
//         }
//     },1000)
// })
//promise4.then().catch() // .catch() connects with reject 

// const username=promise4.then((user)=>{
//     console.log(user);
//     return user.username
// })
//console.log(username); // gives error. not a correct method

// promise4
// .then((user)=>{
//     //console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);  //chaining of .then(). Jo uper wale then ne return kia h vo new chain mei aaygi
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })// end mei bata do ki kaam hogya ya nhi. default. executes always

//*************************************************************************************************** 
const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Harshita", password:"12345@"})
        }
        else{
            reject('something went wrong') //gives error
        }
    },1000)
})

  //exactly like .then() and .catch(). wait for the work to be done.It stops in case of error. does not handle catch() so properly
async function consumePromiseFive(){
    try{
    const response= await promise5 // promise is an object so () is not used
    console.log(response);
    }
    catch(error){
        console.log("Error"); //with this error is handled gracefully
    }
}

consumePromiseFive() // error h to hume automatically suggest krrha h without using try catch block

// ************************************************************************************************************************************

// async function getllusers() {
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data);
//     } catch{
//         console.log(error);
//     }
// } // the above code is working but some things take time, thats y it is not printing
// getllusers() 

// *********************************************************** FETCH() **************************************************
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error");
}) // considered as a priority task. Will be executed firstly. It is a global method, fetches a resource from network and returns a promise.Priority/ micro task queue banti hai for fetch which is quite fast