console.log("JS Methods");

/**
 * 1. Function With Parameters
 */
function displayFullName(firstName, lastName) {
    console.log(firstName + lastName);
}

displayFullName("Sai", "Kumar");

function transferAmount(amount) {
    console.log("Amount Received Succssfully:" + amount);
}

transferAmount(1000);

/**
 * 2 . Function Without Parameters
 */

function displayBikeName() {
    var bikeName = "ROYAL";
    console.log("Bike Name:" + bikeName);
}

displayBikeName();

/**
 *  3.Function with return type with parameters
 * 
 */

function addProduct(productName) {
    return productName;
}

console.log(addProduct("T SHIRT"));



/**
 * 4 . Function Without return type
 */

function displayCarName() { //method signature
    var carName = "BMW";
    console.log("Car Name:" + carName);
}

displayCarName();//function call or method call

/***
 *       1.Go to sources tab
 *       2.type  cntr+p
 *       3. search for js   (script.js)
 *       4. select debug pointers
 *       5. Start debugging
 * 
 * 
 */