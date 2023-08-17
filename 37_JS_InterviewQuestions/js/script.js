/**
 *  Sample Input :  [10,20,30,40]
 *  Sample Output:   100
 *
 * 1. Find the sum of the array.
 */



//function, anonymous function, arrow functions


const findSum = () => {
    let numbers = [10, 20, 30, 40];  //100
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(`Maximum Value: ${sum}`);
}

findSum();



/**
 *  Sample Input :  [10,20,30,40]
 *  Sample Output:  40,30,30,10;
 *
 * 2.Find the sum of the array.
 */

const reverseArray = () => {
    let numbers = [10, 20, 30, 40];  //output:40,30,30,10

    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}

reverseArray();


/**
 *  Sample Input :  [1,2,3,4]
 *  Sample Output:  [1,4,9,16]
 *
 *  3.Find sqaures of given Array.
 */

const findSqaures = () => {
    let numbers = [1, 2, 3, 4];
    let squaredArray = [];
    for (let i = 0; i < numbers.length; i++) {
        // const s = numbers[i] * numbers[i];
        const s = numbers[i] ** 2;
        squaredArray.push(s);
    }
    console.log(squaredArray);
}
//  2    2    2
// 1 ,  2   ,3
findSqaures();


/**
 *  Sample Input :  [1,2,3,4,5]
 *  Sample Output:  [1,8,27,16,125]
 *
 *  4.Find Cubes of given Array.
 */

const findCubes = () => {
    let numbers = [1, 2, 3, 4, 5];  //1*1*1  2*2*2
    let cubeArray = [];
    for (let i = 0; i < numbers.length; i++) {
        // const s = numbers[i] * numbers[i] * numbers[i];
        const s = numbers[i] ** 3;
        cubeArray.push(s);
    }
    console.log(cubeArray);
}


findCubes();



/**
 *  Sample Input :  [98,17,23,14,5,1]
 *  Sample Output:  [1,5,14,17,23,98];
 *
 *  5.Find Sort with acending;
 */

const findSort = () => {
    let numbers = [98, 17, 23, 14, 5, 1];
    let sortedNumbers = numbers.sort((a, b) => a - b);
    console.log(sortedNumbers);
}

//  98 17
//  17 98 23
//  17 23 98

findSort();