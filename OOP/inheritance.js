class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email,password){
        super(username) //through inheritance jo class extend kri hai ye keyword usse refer krega
        this.email=email,
        this.password=password
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const Riya = new teacher('riya','riya@gmail.com','1@2')
Riya.addCourse()

const neha= new User("Neha")
neha.logme()
//neha.addCourse() // this function of teacher class is not accessible to the user class
console.log(neha instanceof User);
console.log(neha instanceof User);