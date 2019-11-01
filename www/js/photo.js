function getPhoto() {
    src = "url(" + src + ')';
    // alert(src);

    $.get(pathSwipe, {
        token: token,
    }, function (data) {
        // alert('swipe = ' + data);
        data = JSON.parse(data);
        rating = data[3];

        document.querySelector(".buddy").style.backgroundImage = src;

        // $(".buddy").swipe({
        //   swipeLeft: leftSwipe,
        //   swipeRight: rightSwipe,
        //   swipeDown: downSwipe,
        //   threshold: 0
        // });
    });

    // document.querySelector(".buddy1").style.backgroundImage = src;
}