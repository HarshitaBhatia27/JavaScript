function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this,username) // .call ne explicitly jakr call kia h and this will set it
    
    this.email=email
    this.password=password
}

const Harshita= new createUser("harshita","h@gmail.com","1234")
console.log(Harshita); //username set nhi hua without using .call