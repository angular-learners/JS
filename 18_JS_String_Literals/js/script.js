console.log('String Literals');



function displayTableWithoutStringLiterals(tableNumber) {

    for (var i = 1; i <= 10; i++) {
        console.log(tableNumber + "*" + i + "=" + (i * 10));
    }

}
//displayTableWithoutStringLiterals(10);


function displayTableWithStringLiterals(tableNumber) {      /* 12*1=12 */
    for (var i = 1; i <= 10; i++) {
        console.log(`${tableNumber} + ${i} = ${i + tableNumber}`)
    }
}

displayTableWithStringLiterals(12);


let firstName = "Kumar";
let lastName = "sai";


function displayFullName() {
    return firstName + " " + lastName;
}

function displayFullNameWithStringLiterals() {
    return `${firstName} ${lastName}`;
}

//console.log(displayFullName());

//console.log(displayFullNameWithStringLiterals());



