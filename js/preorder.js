function checkUsername(){
    var emailValue = document.getElementById("username-fill").value;
    var warning = document.getElementById("username-warning");

    if (emailValue.length < 8){
        warning.innerHTML = "username too short!";
    }else if (emailValue.length > 20) {
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

function checkPhone(){

}

function checkCopy(){

}