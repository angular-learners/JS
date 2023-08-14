console.log("Spread Or Rest Operator");



let employeeNames = ["Sai", "Kumar", "Raj", "Naresh"];

let empNames = [...employeeNames];

let itEmpNames = ["Virat", "Surat"];

//let allEmps = empNames.concat(itEmpNames);

let allEmps = [...empNames, ...itEmpNames];
//console.log(allEmps);



function restOperatorExample(num1, num2, ...nums) {
    console.log(num1);
    console.log(num2);
    console.log(nums);
}

//restOperatorExample(10, 20, 30, 40, 50, 70, 90)



let numbers = [50, 90, 80, 20, 10];

let fruits = ["apple", "banana", "custard", "Mango", "Pine apple"];


let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

let sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
console.log(sortedFruits);



let mobiles = [
    {
        id: 1,
        mobileName: "oppo",
        isWorking: false,
        ram: 4,
        rom: 256,
        price: 12000
    },
    {
        id: 2,
        mobileName: "realme",
        isWorking: true,
        ram: 4,
        rom: 128,
        price: 17000
    }, {
        id: 3,
        mobileName: "nothing phone",
        isWorking: false,
        ram: 4,
        rom: 128,
        price: 24000
    },
    {
        id: 4,
        mobileName: "samsung",
        isWorking: true,
        ram: 4,
        rom: 256,
        price: 18000
    },
    {
        id: 5,
        mobileName: "poco",
        isWorking: false,
        ram: 4,
        rom: 64,
        price: 15000
    },
    {
        id: 6,
        mobileName: "NOKIA",
        isWorking: false,
        ram: 2,
        rom: 4,
        price: 8000
    },
    {
        id: 7,
        mobileName: "apple",
        isWorking: true,
        ram: 8,
        rom: 256,
        price: 52000
    },
    {
        id: 8,
        mobileName: "one plus",
        isWorking: true,
        ram: 8,
        rom: 256,
        price: 25000
    },
    {
        id: 9,
        mobileName: "MOTO",
        isWorking: true,
        ram: 6,
        rom: 128,
        price: 15000
    },
    {
        id: 10,
        mobileName: "MI",
        isWorking: false,
        ram: 2,
        rom: 4,
        price: 7000
    }
];

let sortedMobiles = mobiles.sort((a, b) => a.price - b.price);
//console.log(sortedMobiles);

let sortedMobileNames = mobiles.sort((a, b) => a.mobileName.localeCompare(b.mobileName));
console.log(sortedMobileNames)