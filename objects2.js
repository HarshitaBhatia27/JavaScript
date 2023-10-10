//destructuring of objects
const course ={
    coursenme: "Javascript",
    price: "999",
    instructor: "Hitesh"
}
//console.log(course.instructor);

const {instructor: Inst} = course
console.log(Inst); //short way, ismei hume hmesha pura (course.instructor) likhne ki need nhi h. This is known as destructuring of objects

//react
// const navbar = ({company}) =>{  //to avoid writing props.company. (props is used by default)

// }
// navbar(company = "Uber")

// **************** API ***************************
//backend se values aati h n we have to write them. ab values aati h in JSON format pehle XML mei aati thi

// {  // keys and values both are string
//     "name": "Harshita",
//     "coursename": "Javascript",
//     "price": "free"
// }

//sometimes we get api in format of array also

[
    {},
    {},
    {}
]
