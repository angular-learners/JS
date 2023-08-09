console.log("JS RECAP2");

/*** simple if */

var username = "sai";

function simpleIf() {
    if (username == "sai") {
        console.log("Am Sai");
    }
}
//simpleIf();

//if else example

var age = 18;

function ifElseExample() {
    if (age >= 18) {
        console.log("You are Eligible For Marriage");
    } else {
        console.log("Not Eligible");
    }
}

//ifElseExample();



//ternary operator
var color = "RED";

//Red===>red
function ternaryOperator() {
    (color.toLowerCase() == "red") ? console.log("Color:" + color) : console.log("AM NOT:" + color);
}

//ternaryOperator();


var marks = 80;

function ifElseifElseExample() {                              //true       false//45<=39
    //45>35  
    if (marks > 35 && marks <= 39) {                      //marks > 35 && marks <= 39
        console.log("You are just pass");                      //true && true
    } else if (marks >= 40 && marks <= 49) {              //marks >= 40 && marks <= 49
        console.log("D Grade");
    } else if (marks >= 80 && marks <= 100) {
        console.log("Distinction");
    }
    else {
        console.log("Fail");
    }
}

//ifElseifElseExample();


function forExample() {
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
}


forExample();





//80-100  distiction

