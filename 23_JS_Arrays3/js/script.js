console.log("Array Methods 3");


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


//filter() method

const filterdMobiles = mobiles.filter((mobile) => mobile.price > 12000);
//console.log(filterdMobiles);


const workingMobiles = mobiles.filter((mobile) => mobile.isWorking == true);
//console.log(workingMobiles);


const onlyAppleMobiles = mobiles.filter((mobile) => mobile.mobileName == "apple");
//console.log(onlyAppleMobiles);


const romGreaterthan128 = mobiles.filter((mobile) => mobile.rom >= 128);
//console.log(romGreaterthan128);


const oppoAndRealme = mobiles.filter((mobile) => mobile.mobileName == 'oppo' || mobile.mobileName == 'realme');
//console.log(oppoAndRealme);


//map()   method

const uppercaseMobiles = mobiles.map((mobile) => mobile.mobileName.toUpperCase());

console.log(uppercaseMobiles);


const ramAndMobilesUppercase = mobiles.filter((mobile) => mobile.ram > 8).map((mobile) => mobile.mobileName.toUpperCase());

//console.log(ramAndMobilesUppercase);

const numbers = [10, 10, 5, 7, 11, 13, 19, 4, 20, -1, 30, 59, 90, 12, 45, 78];


const removeDuplicates = new Set(numbers);
//console.log(removeDuplicates);

let max = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
//console.log(max);//90


let min = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(min)


function findPrimeNumbers() {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 1; j < i; j++) {
            if (numbers[i] % j == 0) {

            }
        }
    }
}
