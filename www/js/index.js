// const server = 'https://10.0.2.2/';
const server = "http://127.0.0.1/";
const pathLogin = server + 'php/login.php';
const pathSignup = server + "php/signup.php";
const pathPhoto = server + "php/photo.php";
const pathToken = server + "php/token.php";
const pathLoad = server + "php/upload.php";
const pathProfilePhp = server + "php/profile.php";
const pathSwipe = server + "php/swipe.php";

const maxFileSize = 10000000;

let token = localStorage.getItem("token");

let firstPhoto;

function checkToken(token) {
    $.post(
        pathToken, {
            token: token
        },
        function (data) {
            if (data == "ok") {
                showPage("main");
            } else {
                console.log("need to login, token is not found");
                showPage("login");
            }
        }
    );
}

$(document).ready(function () {
    // app.initialize();
    // alert('On device ready \n token =' + token);
    checkToken(token);
});

// var app = {
//     // Application Constructor
//     initialize() {
//         document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//     },
//     // deviceready Event Handler
//     //
//     // Bind any cordova events here. Common events are:
//     // 'pause', 'resume', etc.
//     onDeviceReady() {

//         // localStorage.setItem('token', 'token');
//         // localStorage.clear();

//         // alert('On device ready \n token =' + token);
//     }
// }