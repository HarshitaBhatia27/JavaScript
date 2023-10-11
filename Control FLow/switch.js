const month =3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break; //by default jo bhi case true hota hai uske neeche ka sara code execute hota hai except default, to avoid that we use break statement
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid");
        break;
}