function signup() {
    let email = document.getElementById("email_reg").value;
    let username = document.getElementById("username_reg").value;
    let pass = document.getElementById("pass_reg").value;
    let pass2 = document.getElementById("pass2_reg").value;


    if (email != '' && pass != '' && pass === pass2) {
        $.get(
            pathSignup, {
                email: email,
                pass: pass,
                username: username
            },
            function (data) {
                alert("signup success! token = " + data);
                if (data) {
                    localStorage.setItem('token', data);
                    showPage('profile'); // Поменять на profile_edit
                }
            });
    }
}