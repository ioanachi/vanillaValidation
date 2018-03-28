function verifyInput(param, spanId) {
    if (param == "") {
        document.getElementById(spanId).innerHTML = "This field is required";
        return false;
    } else {
        document.getElementById(spanId).innerHTML = " ";
        return true;
    }
}
function verifyPassword(pass, pass2, spanId, spanId2) {
    var pattern = /(?=(.*[A-Z]){3,})(?=(.*[a-z]){1,})(?=(.*[0-9]){2,})(?=(.*[``!@#$%^&*\-_=+'\/.,]){2}){8,}/;
    if (pass == "") {
        document.getElementById(spanId).innerHTML = "You forgot the password";
    } else if (pattern.test(pass) != true) {
        document.getElementById(spanId).innerHTML = "Password must have a minimum of 8 characters 3 uppercase,1 lowercase, 2 numbers and 3 special characters";
        // The test() method tests for a match in a string.
    } else {
        document.getElementById(spanId).innerHTML = " ";
    };
    if (pass !== pass2) {
        document.getElementById(spanId2).innerHTML = "Passwords Do Not Match"
    } else if ((pass != "") && (pass === pass2)) {
        document.getElementById(spanId2).innerHTML = " "
        return true;
    };
}
function verifyMail(mail, spanId) {
    var patternMail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (mail == "") {
        document.getElementById(spanId).innerHTML = "Email adress is necesarry";
    } else if (patternMail.test(mail) != true) {
        document.getElementById(spanId).innerHTML = "Email adress must have a @ and .";
        return false
    } else {
        document.getElementById(spanId).innerHTML = " ";
        return true;
    }
}
function verifyStatus(statusReference, spanId) {
    var arr = statusReference['status'];
    var flag = 0;
    for (var i = 0; i < arr.length; i++) {
        if (statusReference['status'][i].checked) {
            flag++;
        }
    }
    if (flag != 1) {
        document.getElementById(spanId).innerHTML = "You must check one and only one status!";
        return false;
    }
    document.getElementById(spanId).innerHTML = " ";
    return true;
};
function verifyGender(genderBox, spanId) {
    var arr = genderBox["gender"];
    var flag = 0;
    for (var i = 0; i < arr.length; i++) {
        if (genderBox["gender"][i].checked) {
            flag++;
        }
    }
    if (flag != 1) {
        document.getElementById(spanId).innerHTML = "You must check one and only one gender!";
        return false;
    }
    document.getElementById(spanId).innerHTML = "";
    return true;
};
function formValidation(e) {
    e.preventDefault();
    var nameField = document.myForm.name;
    var usernameField = document.myForm.username;
    var mailField = document.myForm.mail;
    var descriptionField = document.myForm.description;
    var pwd1 = document.getElementById('pwd1');
    var pwd2 = document.getElementById('pwd2');
    verifyInput(nameField.value, 'error_name');
    verifyInput(usernameField.value, 'error_username');
    verifyInput(descriptionField.value, 'error_description');
    verifyPassword(pwd1.value, pwd2.value, 'error_pwd1', 'error_pwd2');
    verifyMail(mailField.value, 'error_mail');
    verifyStatus(document.myForm, "error_status");
    verifyGender(document.myForm, "error_gender");
}
var submitBtn = document.getElementById('submitBtn');
document.myForm.addEventListener('submit', formValidation);
submitBtn.addEventListener('click', formValidation);