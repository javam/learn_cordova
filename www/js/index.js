const server = "https://10.0.2.2/";
// var server="https://127.0.0.1/";
const pathLogin = server + "php/login.php";
const pathPhoto = server + "php/photo.php";
let email = "mail";
let pass = "pass";

var app = {
    // Application Constructor
    initialize() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady() {

        $.get(
            pathLogin, {
                email: email,
                pass: pass
            },
            function (data) {
                id = data.split('"').join(""); // Определение id пользователя
                getID(id);
            });

        function getID(user_id) {
            $.get(
                pathPhoto, {
                    id: user_id
                },
                function (data) {
                    data = JSON.parse(data);
                    for (let i = 0; i < data.length; i++) {
                        $("#photosMain").append($("<img class='gallery_photo' src='" + server + "photo/" + data[i] + "'/>"));
                    }
                });
        }
    }
}

$(document).ready(function () {
    app.initialize();
});

function flow() {
    document.getElementById("flow").style.fontWeight = "bold";
    document.getElementById("flow").style.color = "blue";
    $("#photosMain").empty();

    $.get(
        pathPhoto, {
            type: "flow"
        },
        function (data) {
            data = JSON.parse(data);
            for (let i = 0; i < data.length; i++) {
                $("#photosMain").append($("<img class='gallery_photo' src='" + server + "photo/" + data[i] + "'/>"));
            }
        });
}