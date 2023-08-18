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


/***
 * 1.  Sample Input  : [90,890,30,40,50]
 *   Sample Output :  890
 *   Find the Maximum Value in the array
 * 
 * 
 */


findMax = () => {
    let numbers = [90, 890, 30, 40, 50];
    let max = 0;
    numbers.forEach((number) => {
        if (number > max) {
            max = number;
        }
    })

    console.log(`Maximum Number :${max}`);
}

findMax();

/***
 * 2.  Sample Input  : [90,890,30,40,50]
 *   Sample Output :  30
 *   Find the Maximum Value in the array
 * 
 * 
 */

findMin = () => {
    let numbers = [90, 890, 30, 40, 50];
    let min = numbers[0];
    numbers.forEach((number) => {
        if (number < min) {
            min = number;
        }
    })

    console.log(`Minimum Number :${min}`);
}

findMin();
/**
 * Reverse String
 * 
 */

reverseString = () => {
    let myName = "Virat Kholi Cricketer";
    let str = "";
    for (let i = myName.length - 1; i >= 0; i--) {
        str = str + myName[i];

    }
    console.log(str);
    console.log(myName.length);

}

reverseString();

/***
 *  4. Sample Input: [10, 3, 5, 6, 7, 12, 14];
 *   Sample Output:[4,3]
 *   SampleOutput:{ odd:3,even:4}
 */
countEvenNumbersAndOddNumbers = () => {
    let numbers = [10, 3, 5, 6, 7, 12, 14];
    let eventCount = 0;
    let oddCount = 0;
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            //  eventCount = eventCount + 1;
            console.log(numbers[i]);
            evenNumbers.push(numbers[i]);
        } else {
            //oddCount = oddCount + 1;
            //console.log(numbers[i])
            oddNumbers.push(numbers[i]);
        }
    }

    // console.log(`Even Count:${eventCount}`);
    // console.log(`Odd Count:${oddCount}`);
    let myNumbers = {
        even: evenNumbers,
        odd: oddNumbers
    }
    console.log(myNumbers);



}

countEvenNumbersAndOddNumbers();



/***
 *  5. Sample Input: [10, 10, 3, 3, 4, 5, 14,7,10];
 *   Sample Output:[10,3,4,5,14,7]
 *
 */

removeDuplicates = () => {
    let numbers = [10, 10, 3, 3, 4, 5, 14, 7, 10];
    let uniqueNumbers = new Set([...numbers]);
    console.log(uniqueNumbers);
}

removeDuplicates();