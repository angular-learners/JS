console.log("Arrays");

let numbers = [10, 20, 8, 9];
//[10,20,8,9]
//[5,10,20,8,9]
numbers.unshift(5);
numbers.push(21);//[5,10,20,8,9,21]
numbers.shift(); //[10,20,8,9,21]
numbers.pop(); //[10,20,8,9]


for (let i = 0; i < numbers.length; i++) {
    // if (numbers[i] % 2 == 0) {
    //     console.log(numbers[i]);
    // }
    console.log(numbers[i]);  //5 10 20 8 9
}
 /**
*       unshift()   we can add element to the first
* 
* 
*/




/***
 *         let i=0;
 *         0
 *         0<=10 =>true
 *         numbers[i] % 2            numbers[0]%2==0
 *                                         10 %2 ==0             9%2   1==0
 *                                           0==0 ==>true
 *                                          numbers[i]===>numbers[0]==>10
 *                                                                     20
 *                                                                      8
 *                                                                      6
 *                                                                      12
 *                                                                      
 */
