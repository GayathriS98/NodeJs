// Objects & Array

//objects
var person = {
    name: 'GS',
    age: '25',
    greet(){
        console.log("Hi, I am "+ this.name)
    }
    
    //or
    // greet: function(){
    //     console.log("Hi, I am "+ this.name)
    // }

    //arrow function doesnot work 
    //'this' points to global scope here, so this.name is undefined
    // greet: () => console.log("Hi, I am "+ this.name)
}

console.log(person);
person.greet();

//arrays

var hobbies = ['reading', 'cooking'];
for(let hobby of hobbies){
    console.log(hobby);
}
//inbuilt method 'map' creates a new array and performs the operation
//it doesnot manipulate the original array
console.log(hobbies.map((hobby, i) => (i+1)+': ' + hobby));
console.log(hobbies);