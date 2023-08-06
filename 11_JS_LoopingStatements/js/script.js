console.log("Looping Statements");


var films = ["BAHUBALI", "PROJECTK", "KGF", "RRR"];


for (var i = 0; i <= 10; i++) {
    // console.log(i);
}


for (var i = 10; i >= 1; i--) {
    // console.log(i)
}

for (var i = 0; i < films.length; i++) {
    if (films[i].toLowerCase() == "rrr" || films[i].toLowerCase() == "bahubali") {
        // console.log(films[i]);
    }
}


//input  5

// 5 iterate
//
//    // enter 1  10           10+20+30+40+50=150
//       enter 2 20

//       enter 3  30

//       enter 4  40'

//       enter 50

// var size = parseInt(prompt("Enter size"));
// var sum = 0;
// for (var i = 1; i <= size; i++) {
//     var enterNumber = parseInt(prompt("Enter" + i + " Number"));
//     // // if (enterNumber % 2 == 0) {
//     // sum = sum + enterNumber;
//     // // }

// }
// console.log("Sum:" + sum);
/***
 *
 *       size=5
 *       1<=5
 *       prompt <10>
 *        10=0+10;
 *        i++ ==>   i+1=>1+1=>
 *
 *        2<=5
 *        prompt <20>
 *           30=10+20;
  *
  *
  *
 */





// console.log("Sum:" + sum);

/**
 *  
 *
 */



/**
 *        var i=0;
 *        0<=4 true
 *        films[0]
 *        RRR
 *        0+1
 *        i=1
 *        1<=4
 *        true
 *        films[1]
 *        BAHUBALI
 *  
 * 
 * 
 */


/**
 *    while-loop                 1-5                var i = 1; i <= size; i++
 */

var i = 5;

while (i >= 1) {
    // console.log(i);
    i--;
}
// 5*1=5  5=>static, *=>static ,1=dynamic = =>static, 5=>dynamic
var i = 1;
while (i <= 10) {
    // console.log("5*" + i + "=" + (i * 5));
    i++;
}
console.log("=============================================================")
var i = 1;
while (i <= 10) {
    // console.log("10+" + i + "=" + (i + 10));
    i++;
}
/**
*  10+1=10
*  10+2=12
*  10+3=13
* 
*  10+10=20
*/


/**
 *            
 *      5*1=5
 *      5*2=10 
 * 
 * 
 * 
 * 
       5*10=50
 * 
 * 
 */


/**
 * 
 *  create an array
 *  insert 5 numbers
 *  i need to find avg of these five numbers
 * 
 * 
 */

/**
 * 
 *      1,2,3,4,5
 *          3
 */

var numbers = [10, 20, 30];

var i = 0;

var sum = 0;


while (i < numbers.length) { //afroz
    sum = sum + numbers[i];
    i++;
}
console.log(sum / numbers.length);//narender ,naresh,akshay


//3.0

/**
 *   AF=false,
 *   RAJ=>true,
 *   narender=>false,
 *   NARES=>false,
 *   AN=true,
 *   mani=>true,
 *   srikanth=true;
 * 
 */


/**
 *     do{
 *       statemnts
 *         incriment / decriment
 * 
 *    }while(codition);
 * 
 * 
 */