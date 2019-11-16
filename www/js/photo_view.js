getPhoto();

function getPhoto() {
    // alert(photo_id);
    $.post(pathPhoto, {
        // token: token,
        type: 'view_photo',
        photo_id: photo_id
    }, function (data) {
        data = JSON.parse(data);
        // console.log(data[0][1]);
        let photo = data[0][0];
        let user = data[0][1];
        document.querySelector(".photo").style.backgroundImage = "url(" + server + "photo/" + photo['src'] + ')';
        document.querySelector("#username").innerHTML = user['username'];
        document.querySelector("#view_likes").innerHTML = photo['likes'] + " likes";
        document.querySelector("#view_open").innerHTML = photo['open'] + " opens";
        document.querySelector("#view_views").innerHTML = photo['views'] + " views";
        document.querySelector("#view_saves").innerHTML = photo['saved'] + " saves";

        // $(".buddy").swipe({
        //   swipeLeft: leftSwipe,
        //   swipeRight: rightSwipe,
        //   swipeDown: downSwipe,
        //   threshold: 0
        // });
    });
}

function closePhoto() {
    document.getElementById('photo_view').style.display = "none";
    document.getElementById('main').style.display = "block";
    cleanCanvas();
}

function cleanCanvas() {
    document.querySelector(".photo").style.backgroundImage = "";
}