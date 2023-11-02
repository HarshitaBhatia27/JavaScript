class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    // here the constructor is also trying to set the value for password and we are using getter-setters as well. This leads to maximum call stack problem.
    get password(){
        return this._password.toUpperCase()
    }
    // use both getter and setter together
    set password(value){
        this._password= value //to solve the above problem change the name of variable for both getters and setters and nowour constructor is setting the value of email, and getter-setters for password
    }
}
const harshita = new User("h@gmail.com",'12345@a')
console.log(harshita.password);
console.log(harshita.email);