// class User{
//     constructor(username, email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }

//     encryptPass(){
//         return `${this.password}abc`
//     }

//     UpperUsername(){
//         return `${this.username.toUpperCase()}` 
//     }

// }

// const coffee= new User("Coffee","coffee@ymail.com","123@")
// console.log(coffee.encryptPass());
// console.log(coffee.UpperUsername());


// Behind the scene
/*
1. function is created
2. .proptotype se methods create honge
3. use
*/
function user1(username, email,password){
    this.username=username;
    this.email=email;
    this.password=password
}
user1.prototype.encryptPass= function(){
    return `${this.password}abc`
}
const caf = new user1('caf','c@gmail.com','124')
console.log(caf.encryptPass());