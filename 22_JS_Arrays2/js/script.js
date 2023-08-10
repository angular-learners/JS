console.log("JS Arrays2");


let numbers = [10, 5, 7, 8, 10, 45, 7, 9];


// unshift  add elements to first

numbers.unshift(1);
console.log("====================unshift()==================")
console.log(numbers);

//push()  add elemenst to last
console.log("====================push()==================")
numbers.push(23);
console.log(numbers);

//pop() removes element from last

console.log("====================pop()==================")
numbers.pop();
console.log(numbers);

//shift() removes element from first

console.log("====================shift()==================")
numbers.shift();
console.log(numbers);


let fruit1 = ["banana", "apple"];

let fruits2 = ["grapes", "strawberry"];

let fruits = fruit1.concat(fruits2);
console.log(fruits);

//fruits.splice(1, 1); ["banana", "apple","grapes", "strawberry"]
fruits.splice(1, 2)
console.log(fruits);