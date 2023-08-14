console.log("events");



/***
 * 
 *  click
 *  change
 *  mouseover
 *  mouseleave
 *  mouseout
 *  select
 *  input
 *  keyup
 *  keydown
 *  dblclick
 *  
 */

function selectCountryChange(event) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    if (selectedValue.toUpperCase() == "AUS") {
        document.getElementById('countryName').innerHTML = `You selectd  ${selectedValue}`;
    }
}

let sum = 0;
let num1 = 0
let num2 = 0

let person = {
    id: 1,
    name: "sai",
}


function calculate(event, selectedNum) {
    const selectedValue = event.target.value;
    if (selectedNum == 'num1') {
        num1 = selectedValue;
        console.log(num1);
    } else if (selectedNum == 'num2') {
        num2 = selectedValue;
        console.log(num2);
    }
    sum = parseInt(num1) * parseInt(num2);
    console.log(sum);
    document.getElementById('output').value = sum;
}