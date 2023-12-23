let passConfirm = function () {
    if (document.getElementById("password").value ==
        document.getElementById("ConfirmPassword").value) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Passwords match!"
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "*Passwords do NOT match!"
    }
}

passConfirm()