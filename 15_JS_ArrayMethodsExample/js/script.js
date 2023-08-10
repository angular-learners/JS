

function calculate(operationName) {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    if (operationName == 'add') {
        const sum = parseInt(number1) + parseInt(number2);
        document.getElementById('output').innerHTML = sum;
    } else if (operationName == 'sub') {
        const sub = parseInt(number1) - parseInt(number2);
        document.getElementById('output').innerHTML = sub;
    } else if (operationName == 'mul') {
        const mul = parseInt(number1) * parseInt(number2);
        document.getElementById('output').innerHTML = mul;
    } else if (operationName == 'div') {
        const div = parseInt(number1) / parseInt(number2);
        document.getElementById('output').innerHTML = div;
    }
}


