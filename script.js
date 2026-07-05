document.getElementById("myForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("success").innerText = "";

    let valid = true;

    // Name Validation
    if(name === ""){
        document.getElementById("nameError").innerText =
        "Name is required";
        valid = false;
    }

    // Email Validation
    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText =
        "Enter a valid email";
        valid = false;
    }

    // Password Validation
    let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(!passwordPattern.test(password)){
        document.getElementById("passwordError").innerText =
        "Password must contain uppercase, lowercase, number and special character";
        valid = false;
    }

    if(valid){
        document.getElementById("success").innerText =
        "Form Submitted Successfully!";
    }

});
