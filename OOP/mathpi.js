// console.log(Math.PI);
// Math.PI= 5
// console.log(Math.PI); // value cannot be changed

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor); // math.pi is hardcoded false, cannot be changed

const coffee ={
    name: 'Frappe',
    price: 300,
    isAvailable: true,
    
    orderCoffee: function(){
        console.log("Coffee not ready");
    }
}

console.log(coffee);
console.log(Object.getOwnPropertyDescriptor(coffee, "name")); //rn it is writable, enumerable and configurable

Object.defineProperty(coffee,'name',{
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(coffee, "name")); //rn it is writable, enumerable and configurable


for (let [key,value] of Object.entries(coffee)){
    if(typeof value!== 'function'){
        console.log(`${key}: ${value}`); // coffee not iterable because it is an object, we made it iterable using object.entries

    }
}