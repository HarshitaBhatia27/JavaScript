const user={   //Object literal
    username:"Harshita",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        console.log("Got user details");
        //console.log(`Username: ${this.username}`); //this keyword is used to refer to the current instance
        //console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this); // empty because abhi global context mei kuch nhi h but it keeps on changing. Browser per if run hoga to vha per global context mei bhut cheeze rkhi gyi hai to vo empty nhi hota

//**************************Constructor Function ************************************/

//const promiseOne= new Promise() //new keyword is the constructor function used to create new multiple instances from 1 object literal

function User(username,isLoggedin){
    this.username=username;
    this.isLoggedin= isLoggedin;
    
    this.greetings= function() {
        console.log(`Welcome ${this.username}`);
        
    }
    //return this --> impicitly define hota hai to likhe ya nhi doesnt matter
}
const userone= new User('Harshita',true)
const user2= new User("Dev",false)
//console.log(userone); //userone hi print karvarhe hai but values user2 ki aajaygi because values overwrite horhi hai, thats y we use new keyword (without new keyword)
console.log(userone.constructor); // reference to the function

