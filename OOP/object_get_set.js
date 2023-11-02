// objects
// not used much
const User= {
    _email: 'h@gmail.com',
    _password: 'abc',

    get email(){
         return this._email
    },

    set email(value){
        this._email= value
    }
}

const coffee = Object.create(User)// user ke base per object create kro  and usse coffee mei refer krdo
console.log(coffee.email); // we dont have a property named email, we have _email but still we can access it. reason is that when we use getters and setters the value of _ is not much meaningful and it will consider it same
