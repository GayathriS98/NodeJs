/* 
    ... is the spread and rest operator and 
    the functionality/name we call it depends on where we use.
    
    Spread: (Pulls/plucks elements from array)
       takes all the elements of the array after ... and puts everything in a new array.
    
    Rest: (merges multiple arguments to array)
       used in argument list of function. 
       All the parameters are after ... are grouped into an array.
*/
var person = {
    name: 'GS',
    age: '25',
    greet(){
        console.log("Hi, I am "+ this.name)
    }
}
const myHobbies = ['swimming', 'reading'];

const spreadFunc = ()=>{
    let copiedHobbies = [...myHobbies, 'programming', 'singing'];
    let copiedPerson = {...person}
    console.log(copiedHobbies, copiedPerson);
}
const restFunc = (...params)=>{
    console.log("My hobbies are " + params)
}
spreadFunc();
restFunc('PAINTING', 'WRITING');