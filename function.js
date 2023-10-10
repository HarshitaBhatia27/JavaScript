//function and parameter

function printName(){
    console.log("D");
    console.log("E");
    console.log("V");
}

//printName()  //executing function

//add two numbers
function add(num1, num2) // here we have parameters of function
{
    console.log(num1+num2);
}

// add(1,23) //jab pass karate h to hum arguments bolte h
// add("3",1) //it will consider bith as strings
// add("a",1)
// add(10,null)

function addNum(num1, num2)
{
    let result= num1 + num2;
    return result
    console.log("Sum"); //return statement ke baad kuch bhi kaam nhi krega function
}

const result= addNum(2,3)
// console.log("Result: ", result);


function loginUserMessage(username){ //(username = "sam") to is case mei kbhi if block mei jaynge hi nhi, if kuch value nhi h to it will use sam
    if(username === undefined) //(!username)
    {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harshita"));
// console.log(loginUserMessage());



//issi ko rest and spread dono bolte h. It depends on our use case that what we call it at that particular time
//rest operator => ...
function calculateCartPrice(...num1)
{
     return num1
}

//console.log(calculateCartPrice(200,400,300));

function calculatePrice(val1,val2, ...num1){
    return num1
}

//onsole.log(calculatePrice(200,400,500,2000)); // 200 is val1, 400 is val2 and remaining goes in num1


//objects and functions
const user={
    username:"Harshita",
    price: 199
}

function handleObj(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);    
}

// handleObj(user)
// handleObj({
//     username:"Dev",
//     price: 2000
// })

//arrays and functions
const myArray=[200,300,1000]

function secondValue(myArr){
       console.log(myArr[1]);
}

secondValue(myArray)
secondValue([1000,2000,5000])