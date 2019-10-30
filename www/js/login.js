function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let error_password = "Пароль неверный";
    let error_user_not_found = "Пользователь с таким email не найден";

    alert("login.js " + " email = " + email + " pass = " + pass);
    $.get(
        pathLogin, {
            email: email,
            pass: pass
        },
        function (data) {
            alert("login data = " + data);
            if (data == error_user_not_found) {
                alert(error_user_not_found);
                document.getElementById("email").appendChild(error_user_not_found);
            } else if (data == error_password) {
                alert(error_password);
                document.getElementById("pass").appendChild(error_password);
            } else {
                alert("token = " + data);
                localStorage.setItem('token', data);
                showPage('main');
            }
        }
    );
}