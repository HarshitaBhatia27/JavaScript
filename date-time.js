// // dates are calculated from jan 1 1970

// let mydate = new Date()
// console.log(mydate);

// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString()); //local method of writing date
// console.log(mydate.toDateString()); //string form with day
// console.log(mydate.toISOString()); // the default method. not readible
// console.log(mydate.toLocaleString()); //date and time
// console.log(typeof(mydate));


// let newcreated_date = new Date(2023,1,23) // year, month, day... month starts with 0
// console.log(newcreated_date.toDateString());

// let newcreated_date1 = new Date(2023,1,23,5,30)// specifying time
// console.log(newcreated_date1.toLocaleString());

// let newcreated_date2 = new Date("2023-08-27") //in this format month will start from 1
// console.log(newcreated_date2.toDateString());

// let myCreatedDate = new Date("01-08-2023") // MM-DD-YY
// console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); //because here month starts with 0

console.log(newDate.toLocaleString('default',{
    weekday: "short", 
}));
