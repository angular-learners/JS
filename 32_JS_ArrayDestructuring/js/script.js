console.log("Array or Object Destructuring");



let person = {
    id: 1,
    firstName: "sai",
    lastName: "kumar",
    age: 12
}
/** Object Destrcuturing */

let { id, firstName, lastName, age } = person;

console.log(`${firstName} ${lastName}`);


let numbers = [1, 2, 3, 4];

let [firstValue, secoundValue, thirdValue, fourthValue] = numbers;

console.log(`${firstValue}`);