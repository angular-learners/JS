console.log("Conditional Statements");

/**
 *    Step1 : dynamic input
 *    Step2:  Example
 */

//Example:1
//var workTime = parseInt(prompt("Enter WorkTime"));

// if (workTime >= 8) {
//     //  console.log("OT to be paid");
// }

//Example:2

//   500     transfer successfully
//   501     sorry not able to tarnsfer more than 500


//cntr+shift+i 
// var amount = parseInt(prompt("Enter amount"));

// if (amount <= 500) {
//     console.log("Transfer Successfully");
// } else {
//     console.log("sorry not able to tarnsfer more than 500");
// }

//if else if

/***
 *     0-1  yr   system Engineer
 * 
 *     1-3  yr   software Engineer
 *    
 *     4-5  yr   senior SE
 * 
 *     6-7 yr  Lead
 * 
 *     7-15    MANAGER   
 *     
 *     NOT VALID 
 * 
 */

var exp = parseInt(prompt("Enter exp"));


if (exp <= 1) {
    console.log("System Engineer");
} else if (exp <= 3 && exp > 1) {
    console.log("Software Engineer");
} else if (exp <= 5 && exp >= 4) {
    console.log("Senior Software Engineer");
} else if (exp <= 7 && exp > 5) {
    console.log("Lead");
} else if (exp > 7 && exp <= 15) {
    console.log("Manager");
} else {
    console.log("Not valid Experience");
}



