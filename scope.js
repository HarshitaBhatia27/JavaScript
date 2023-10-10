let a= 200
if(true){
    let a=10
    const b=20
    //var c=30
    //console.log("Inner:", a);
}

//console.log(a); // a and b print nhi hoga because vo scope se bhar h
// console.log(b);
//console.log(c); // it will be printed because var is a global variable. therefore, var is avoided in many cases 


// ********** NESTED SCOPE ************
function one()
{
    const username="Harshita"

    function two(){
        const website= "youtube"
        console.log(username);
    }
    //console.log(webiste); //cannot be accessed outside of function two. scope ends

    two()
}

// one()



if(true){
    const username="Harshi"

    if(username=="Harshi")
    {
        const website=" youtube"
        //console.log(username + website);
    }
    //console.log(website); //out of scope
}

//console.log(username);  //out of scope

console.log(addone(5)); //function ki declaration se pehel call krskte h
function addone(num){
       return num+1
}


// another method of functions
//addTwo(5); //here we cannot call function before declaration
const addTwo = function(num){
    return num+2;
}
