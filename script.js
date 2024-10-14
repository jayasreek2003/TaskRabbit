function validateForm() {
    const name = document.getElementById("name").value;
   
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm password").value;
    
    const nameError = document.getElementById("name-error");
    
   
    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    

    nameError.textContent = "";
   
    emailError.textContent = "";
    passwordError.textContent = "";
    
   

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }
    
        if(confirm_password != password)  
        {   
            passwordError.textContent =
            "The password doesn't match.";
        isValid = false;
        }  
       
    

    return isValid;
}
function fileValidation() {
    var fileInput = 
        document.getElementById('file');
    
    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions = 
            /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    } 
    else 
    {
    
        // Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(
                    'imagePreview').innerHTML = 
                    '<img src="' + e.target.result
                    + '"/>';
            };
            
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}