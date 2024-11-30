function validation() {
    var username = document.FormFill.Username.value;
    var email = document.FormFill.Email.value;
    var password = document.FormFill.Password.value;
    var cpassword = document.FormFill.CPassword.value;
    var result = document.getElementById("result");

    if (username === "") {
        result.innerHTML = "Enter Username";
        return false;
    }
    if (username.length < 6) {
        result.innerHTML = "At least six letters for the username";
        return false;
    }
    if (email === "") {
        result.innerHTML = "Enter your Email";
        return false;
    }
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        result.innerHTML = "Enter a valid Email";
        return false;
    }
    if (password === "") {
        result.innerHTML = "Enter your Password";
        return false;
    }
    if (password.length < 6) {
        result.innerHTML = "Password must be at least 6 characters";
        return false;
    }
    if (cpassword === "") {
        result.innerHTML = "Enter confirm password";
        return false;
    }
    if (password !== cpassword) {
        result.innerHTML = "Passwords do not match";
        return false;
    }

    // Save to local storage
    var user = {
        username: username,
        email: email,
        password: password 
    };

    localStorage.setItem("user", JSON.stringify(user));

    result.innerHTML = ""; 
    popup.classList.add("open-slide");
    return false; // P
}

var popup = document.getElementById('popup');
function CloseSlide() {
    popup.classList.remove("open-slide");
}
