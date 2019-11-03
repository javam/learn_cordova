// const server = 'https://10.0.2.2/';
var server = "http://127.0.0.1/";
const pathLogin = server + 'php/login.php';
const pathSignup = server + 'php/signup.php';
const pathPhoto = server + 'php/photo.php';
const pathToken = server + 'php/token.php';

let token = localStorage.getItem('token');

function checkToken(token) {
    // alert("check token");
    $.get(
        pathToken, {
            token: token,
        },
        function (data) {
            if (data == 'ok') {
                // alert('show page');
                showPage('main');
            } else {
                alert('need to login, token is not found');
                showPage('login');
            }
        });
}

function subscriptionPhotos() {

    if (document.querySelector(".menuIdChoosed")) {
        document.querySelector(".menuIdChoosed").classList.remove("menuIdChoosed");
        document.getElementById('subscribes').classList.add('menuIdChoosed');
    }

    $('#photosMain').empty();

    $.get(
        pathPhoto, {
            token: token,
            type: 'subscribe'
        },
        function (data) {
            // alert("get photos data = " + data);
            console.log(data);
            showBlockPhoto(data);
        });
}

function savePhoto(photo_id) {

}

function openPhoto(photo_src) {
    // alert(photo_src);
    return function () {
        src = photo_src;
        showPage('photo');
        // alert('src = ' + photo_src);
    }
}

function addLike(photo_id) {
    return function () {

        // если пользователь не ставил лайк, то плюсануть лайк

        $.get(pathPhoto, {
                token: token,
                type: 'add_like',
                photo_id: photo_id
            },
            function (data) {
                // alert(data);

                document.getElementById(photo_id).innerHTML = data;

                // alert("Data Loaded: " + data);

            });


        // alert('src = ' + i);
    }
}

function flow() {

    document.querySelector(".menuIdChoosed").classList.remove("menuIdChoosed");
    document.getElementById('flow').classList.add('menuIdChoosed');
    $('#photosMain').empty();

    $.get(
        pathPhoto, {
            token: token,
            type: 'flow'
        },
        function (data) {
            // alert("flow data = " + data);
            showBlockPhoto(data);
        });
}

function showBlockPhoto(data) {
    data = JSON.parse(data);

    for (let i = 0; i < data.length; i++) {
        let src = server + "photo/" + data[i][0];
        likes = data[i][2];
        let photo_id = data[i][3];
        let is_liked = data[i][4];
        // alert(is_liked);
        $('#photosMain').append($("<img class='gallery_photo' src='" + server + "photo/" + data[i][0] + "'/>").click(openPhoto(src)));
        // $('#photosMain').append($("<div class='gallery_photo_info'><div class='gallery_photo_info_name'>" + data[i][1] + ""));
        $('#photosMain').append($("<div class='gallery_photo_info_name'>" + data[i][1] + "</div>"));
        $('#photosMain').append($("<div class='like_make'>save</div>")).click(savePhoto(src));

        if (is_liked) {
            $('#photosMain').append($("<div class='like_make' id='" + photo_id + "'>" + likes + "</div>").click(addLike(photo_id)));
        } else {
            $('#photosMain').append($("<div class='like_make' id='" + photo_id + "'>" + "like" + "</div>").click(addLike(photo_id)));
        }
    }
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