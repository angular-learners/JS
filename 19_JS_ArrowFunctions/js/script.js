

/**
 *         Normal Function        5   N A AR
 */

function displaySalary() {
    let salary = 1000;
    return salary;
}

function addHike() {
    let hike = 20;
    let hikeSalary = hike + displaySalary();
    return hikeSalary;
}

//console.log(addHike());


/***
 *        anonymous function
 * 
 */

const course = function () {
    console.log("JAVA");
}





//course();
const table = function (tableName) {                       // 10*1=10      10*10=100
    for (i = 1; i <= 10; i++) {
        console.log(tableName + "*" + i + "=" + (i * tableName));   //  65*1=65
    }
}

//table(65)


/***
 * 
 * arrow function
 */

const evenNumbers = function (selectNumber) {
    for (var i = 1; i <= selectNumber; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

const even = (selectNumber) => {
    for (var i = 1; i <= selectNumber; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

even(30);

//evenNumbers(100);              // 2 4         



const divideBy5 = function (selectNumber) {
    for (var i = 1; i <= selectNumber; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}
//divideBy5(100);

const divide = (selectNumber) => {
    for (var i = 1; i <= selectNumber; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}
divide(100);


