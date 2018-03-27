function verifyInput(param, spanId) {
    if (param == "") {
        console.log("intra in if");

        document.getElementById(spanId).innerHTML = "This field is required";
        document.getElementById(spanId).style.color = "red";
    }else{
        document.getElementById(spanId).innerHTML = "ok";
        
    }
}



function verifyPassword(pass, spanId) {
    var pattern1 = /[0-9]/;
    var pattern2 = /[a-z]/;
    var pattern3 = /[A-Z]/;
    var pattern4 = /.*[!@#$%^&*() =+_-]/;

    if (pass == "") {
        document.getElementById(spanId).innerHTML = "You forgot the password";
    }
    else if (pass.length < 8) {
        document.getElementById(spanId).innerHTML = "Password must have minimum 8 characters";
        // The test() method tests for a match in a string.
    } else if (pattern1.test(pass) != true) {
        document.getElementById(spanId).innerHTML = "Password must have at least one number";
    } else if (pattern1.test(pass) != true) {
        document.getElementById(spanId).innerHTML = "Password must have at least one number";
    } else if (pattern3.test(pass) != true) {
        document.getElementById(spanId).innerHTML = "Password must have at least one uppercase letter";
    } else if (pattern2.test(pass) != true) {
        document.getElementById(spanId).innerHTML = "Password must have at least one uppercase letter";
    } else if (pattern4.test(pass) != true) {
        document.getElementById(spanId).innerHTML = "Password must have at least one special character";
    }else{
        document.getElementById(spanId).innerHTML = "ok";
        
    }
    if(document.getElementById(spanId).innerHTML !="" ){
        document.getElementById(spanId).style.color = "red";
        
    }
}
// function verifyMail(mail,spanId ){

// }


function formValidation() {
    var nameField = document.myForm.name;
    var usernameField = document.myForm.username;
    var mailField = document.myForm.mail;
    var descriptionField = document.myForm.description;
    var pwd1 = document.getElementById('pwd1');
    var pwd2 = document.getElementById('pwd2');


    verifyInput(nameField.value, 'error_name');
    verifyInput(usernameField.value, 'error_username');
    verifyInput(mailField.value, 'error_mail');
    verifyInput(descriptionField.value, 'error_description');
    verifyPassword(pwd1.value, 'error_pwd1');
    verifyInput(pwd2.value, 'error_pwd2');

    if(pwd1.value!==pwd2.value) {
		document.getElementById("error_pwd2").innerHTML="Passwords Do Not Match"
	}else{
		document.getElementById("error_pwd2").innerHTML="ok"

    }
}

var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', formValidation)