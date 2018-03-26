function formValidation(){
    var nameField = document.myForm.name;
    var usernameField  = document.myForm.username;
    var mailField  = document.myForm.mail;
    var descriptionField = document.myForm.description;
    
    function verifyInput(param, spanId) {
        if (param == "") {
            document.getElementById(spanId).style.visibility = "visible";
            document.getElementById(spanId).style.color = "red";
        }
    }
    
    
        console.log( document.myForm.mail);
    
        verifyInput (nameField.value, 'error_name');
        verifyInput (usernameField.value, 'error_username');
        verifyInput (mailField.value, 'error_mail');
        verifyInput (descriptionField.value, 'error_description');
        
      
    // if (nameField.value == "") {
    //     nameErrTxt.innerHTML = "This field is required";
    //         }




    }

    var submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click',formValidation())