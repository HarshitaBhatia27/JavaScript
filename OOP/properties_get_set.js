// how getters and setters were used with properties
function User(email,password){
    this._email= email;
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email= value
        }
    })
}
const u = new User('hb@gmail.com','kaffee')
console.log(u.email);
