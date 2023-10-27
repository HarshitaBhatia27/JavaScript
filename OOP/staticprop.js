class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }

    static createId(){ //if we dont want to give access of a method, static keyword is used
        return `123`
    }
}
const riya = new User('Riya')
console.log(riya.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const tech = new Teacher('tech','t@gmail.com')
tech.logme()
console.log(Teacher.createId());