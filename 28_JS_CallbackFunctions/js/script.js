console.log("Call Back Functions");


let companyNames = ["tcs", "wipro", "infosys", "ibm", "virtusa"];

companyNames.forEach(function (companyName, index) {
    if (companyName.length > 3) {
        // console.log(companyName);
    }
});



companyNames.forEach((companyName, index) => {
    //   if (companyName.length > 3) console.log(companyName);
})


companyNames.filter(function (companyName, index) {
    // if (companyName.length > 3) console.log(companyName);
})

let company = companyNames.filter((companyName, index) => companyName.length > 3);

//console.log(company);



/**
 *   function   add() { }
 *  
 *   let add=function() {}
 * 
 *   let add=()=> 
 * 
 */


let str = '';
setInterval(function () {
    str = `${str} Hello`
    // console.log(str);
}, 1000)

setInterval(() => {
    //console.log(`${new Date()} Hello`);
    //this.remeberToPractice();
}, 2000)




setTimeout(function () {
    remeberToPractice();
}, 10000)



function remeberToPractice() {
    //  console.log("Do Practice No time" + new Date());
}




setTimeout(function () { console.log("Hello World"); }, 10000);

setInterval(() => {
    //  console.log("Hello World" + new Date());
}, 5000);

clearTimeout();

clearInterval();






//setTimeout(callBack, timout);
//etInterval(callBack, timeout);



/**
 * 
 *  let add=function() { }
 * 
 */