// const server = 'https://10.0.2.2/';
var server = "http://127.0.0.1/";
const pathLogin = server + 'php/login.php';
const pathSignup = server + 'php/signup.php';
const pathPhoto = server + 'php/photo.php';
const pathToken = server + 'php/token.php';
// let email = "mail@mail.ru";
// let pass = "pass";
let token = localStorage.getItem('token');

function checkToken(token) {
    alert("check token");
    $.get(
        pathToken, {
            token: token,
        },
        function (data) {
            if (data == 'ok') {
                alert('show page');
                showPage('main');
            } else {
                alert('need login, token is not found');
                showPage('login');
            }
        });
}

function getPhotos(token) {
    alert("get photo token" + token);
    $.get(
        pathPhoto, {
            token: token,
            type: 'subscribe'
        },
        function (data) {
            // alert("get photos data = " + data);
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                $('#photosMain').append($("<img class='gallery_photo' src='" + server + "photo/" + data[i][0] + "'/>"));
                $('#photosMain').append($("<div class='gallery_photo_info'><div class='gallery_photo_info_name'>" + data[i][1] + "</div></div>"));
            }
        });
}

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

$(document).ready(function () {
    // app.initialize();
    alert('On device ready \n token =' + token);
    checkToken(token);
});

function flow() {
    document.getElementById('flow').style.fontWeight = 'bold';
    document.getElementById('flow').style.color = 'blue';
    $('#photosMain').empty();

    $.get(
        pathPhoto, {
            type: 'flow'
        },
        function (data) {
            alert("flow data = " + data);
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                $('#photosMain').append($("<img class='gallery_photo' src='" + server + "photo/" + data[i][0] + "'/>"));
                $('#photosMain').append($("<div class='gallery_photo_info'><div class='gallery_photo_info_name'>" + data[i][1] + "</div></div>"));
            }
        });
}