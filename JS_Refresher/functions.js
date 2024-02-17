const name = "GS";
let age = 29;
const hasHobbies = true;
//anonymous function is assigned to a variable/name
//named function
/*
const summarizeUser = function (userName, userAge, userHasHobbies){
    console.log('Name is ' + userName + '. Age is ' + userAge + ' and has hobbies : ' + userHasHobbies);
}
*/

//arrow Function
const summarizeUser = (userName, userAge, userHasHobbies)=> console.log('Name is ' + userName + '. Age is ' + userAge + ' and has hobbies : ' + userHasHobbies);
summarizeUser(name, age, hasHobbies);
