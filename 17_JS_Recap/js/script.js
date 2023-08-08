console.log("JS Recap");

// To open Developer tools    cntrl+shift+i    ==>inspect mode ==> console tab
//   right click on brower   ==>select inspect==>go to console tab


/** Variables IN JS */

var firstName; //declartaion

firstName = "raj";

var amount = 125.67;

var isPermitted = true;

// console.log("FirstName:" + firstName);
// console.log("Amount:" + amount);
// console.log("IsPermitted:" + isPermitted);



/**================================================================================================ */

// console.log("LOG");
// console.warn("WARN");
// console.error("ERROR");
// console.info("INFO");


/***
 *        function without paramters
 * 
 */

function displayNames() { //function declaration
    console.log("Raj");
    console.log("Sai");
}

displayNames(); //function call or method call


/***
 *      Function with Paramters
 */

function displayCarNames(car1, car2, car3) {
    // console.log("CAR1:" + car1);
    // console.log("CAR2:" + car2);
    // console.log("CAR3:" + car3);

}

displayCarNames("TATA", "SKODA", "SUZIKI");



function add(num1, num2) {
    return num1 + num2;
}

var sum = add(10, 20);
// console.log(sum)




//alert("Hello World"); OK
//confirm("Do you wanna delete?");      OK   CANCEL
var myName = prompt("Enter Your Name");
console.log(myName);