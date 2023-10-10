// Immediately Invoked Function Expressions
// calling functions immediately

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   
})();
// first parantheis mei function ki defination, () second me call. ; used to end the function. if we dont do it to iske baad jo fun call hoga usmei error aaskta hai.


//using arrow fun
((name) => { //unnamed IIFE (without name of function)
    console.log(`Connected ${name}`);
})("charger"); 

//global scope ke pollution se problem hoti h sometimes, thats y we used IIFE