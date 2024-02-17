/*
primitive values:-
 dataTypes: string, number, boolean, undefined, null, symbols (ES6);
 stored in "STACK" (faster to access and limited by space hence short living)
*/
var name = "GS";
console.log(name);

var secondName = name;
console.log(secondName);

name = "Gayathri";
//secondname will be unaltered since secondName is of type:string and its a primitive value
//primitive values are copy by value.
console.log(name, secondName);
/*
Reference values:-
 dataTypes: object, array
 stored in "HEAP" (little longer to access but can hold bigger info which changes dynamically)
*/
var person = {
    name: "GS",
    age: 25,
    hobbies : ["reading", "singing"]
}

console.log("\nfirst person = ", person);

var secondPerson = person;
console.log("second person (shallow copy) = ", secondPerson);

var thirdPerson={
    name: "G3",
    age: 23,
    hobbies : ["drawing" ,"reading", "singing"]
}

//deep copying an object - using "Object.assign"
thirdPerson = Object.assign(thirdPerson, person);
console.log("third person (deep copy) = ", thirdPerson);

person.name = "Gayathri";

//secondPerson is altered since its a object which is of referenceType
console.log("shallow copied second person is altered= ", secondPerson);

//eventhough the third person is deep copied, the array inside the object is shallow copied.
//so if we alter person.hobbies, all the other person's hobbies are also altered
console.log("deep copied third person is unaltered= ", thirdPerson);

//Deep copying an array - using "slice"
let shallowCopiedMyHobbies = person.hobbies;
let deepCopiedMyHobbies = person.hobbies.slice();
console.log("\noriginal myHobby array: ", person.hobbies);
person.hobbies.push('dancing');
console.log("shallow copied myHobby", shallowCopiedMyHobbies);
console.log("deep copied myHobby", deepCopiedMyHobbies);

