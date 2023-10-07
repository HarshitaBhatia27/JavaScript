const accountID = 144553
let accountEmail = "harshitaaaa.b27@gmail.com"
var accountPassword = "12345"
/*var is not used now becoz of  issues in block scope and functional scope*/ 
accountCity = "Jaipur" /*not a good way of declaring variable*/

// accountID = 4 --> constant cannot be changed
accountEmail="hb@gmail.com"
accountPassword= "12345678"
accountCity="Faridabad"

let accountState
// console.log(accountID);


//table to print all values together
console.table([accountEmail,accountPassword,accountCity, accountState])  
