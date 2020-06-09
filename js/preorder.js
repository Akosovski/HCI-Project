function checkUsername(){
    var username = document.getElementById("username-fill").value;
    var warning = document.getElementById("username-warning");

    if (username.length < 8){
        warning.innerHTML = "username too short!";
    }else if (username.length > 20) {
        warning.innerHTML = "username too long!";
    }else {
        warning.innerHTML = "";
    }
}

function checkEmail(){
    var emailValue = document.getElementById("email-fill").value;
    var warning = document.getElementById("email-warning");
    
    var value = emailValue.split("@");
    if (value.length <= 1){
        warning.innerHTML = "incorrect email input";
    }else {
        warning.innerHTML ="";
    }
    value = value[1].split(".");
    if (value.length <= 1) {
        warning.innerHTML = "incorrect email input";
    }else {
        warning.innerHTML ="";
    }
}

function checkpassword(){
    var password = document.getElementById("password-fill").value;
    var warning = document.getElementById("password-warning");

    if (password.length < 8){
        warning.innerHTML = "password is too short!";
    }else if (password.length > 20) {
        warning.innerHTML = "password is too long!";
    }else {
        warning.innerHTML = "";
    }
}

function checkCopy(){
    var copy = document.getElementById("copy-fill").value;
    var warning = document.getElementById("copy-warning");

    if (copy <= 0){
        warning.innerHTML = "numper of copies is too low!";
    }else if (copy > 10) {
        warning.innerHTML = "number of copies is too many";
    }else {
        warning.innerHTML = "";
    }
}