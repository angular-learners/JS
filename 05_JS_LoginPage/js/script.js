
var dbEmail = "rajkumar@gmail.com";
var dbPassword = "raj123"
var message = "Login success";


function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email == dbEmail && password == dbPassword) {
        alert("Login success")
    } else {
        alert("Login Failed");
    }
}