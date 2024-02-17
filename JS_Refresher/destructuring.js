/*
Destructuring : Allows us to access a property of an object or an array element
                QUICKLY by their name or position; 
                and drop some unnecessary data that we don't require for that 
                code snippet/function we are working on.
*/

var person = {
    name: 'GS',
    age: '25',
    greet(){
        console.log("Hi, I am "+ this.name)
    }
}
const myHobbies = ['swimming', 'reading'];

const {name, age} = person;
const [hobby1, hobby2] = myHobbies;

const printPersonName = ({name})=>{
    console.log(name);
}
printPersonName(person);