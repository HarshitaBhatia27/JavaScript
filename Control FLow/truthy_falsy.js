const userEmail = []

// here we have assumed ki value true hi hoga chahe jo value aay. this is truthy statement
if(userEmail){
    console.log("Got email");
} else{
    console.log("No email"); //if empty string hai to assumedhai ki vo false hi hoga. falsy value
}

// falsy values -->  false,0, "", -0, BigInt 0n, null, undefined, NaN
//truthy values --->  true, [], "0", 'false' (string ke andr likha h to vo value true hi h), " ", {}, function(){}

if(userEmail.length===0)
{
    console.log('Empty array');
}

const emptyobj = {}
if(Object.keys(emptyobj).length===0){
     console.log("empty object");
}




// false == 0 is true, false== '' is true, 0=='' is true


// Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
// var1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1); 
// at times jb DB se value extract karte hai tb null ya undefined aati hai to us case me we use this operator.

// Terniary operator
//condition ? true: false

const iceTea = 100
iceTea> 80 ? console.log("more than 80"): console.log("less than 80");