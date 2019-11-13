// превратить в let
var rating;
var points = inRow = 0;

firstPhoto();

function firstPhoto() {

  $.get(pathSwipe, {
    token: token,
  }, function (data) {
    // alert('swipe = ' + data);
    data = JSON.parse(data);
    rating = data[3];

    let src = "url(" + server + "photo/" + data[0].split('"').join("") + ')';
    document.querySelector(".buddy").style.backgroundImage = src;
    document.querySelector("#instagramLink").innerHTML = '<a href="http://instagram.com/' + data[1] + '"}>' + data[1] + ' </a>';
    document.querySelector("#trenderLink").innerHTML = data[2];

    $(".buddy").swipe({
      swipeLeft: leftSwipe,
      swipeRight: rightSwipe,
      swipeDown: downSwipe,
      threshold: 0
    });
  });
}

function nextPhoto(liked) {
  $.get(pathSwipe, {
    token: token,
    liked: liked,
    vote: voting(liked)
  }, function (data) {
    // alert('swipe = ' + data);

    data = JSON.parse(data);
    rating = data[3];

    let src = "url(" + server + "photo/" + data[0].split('"').join("") + ')';
    document.querySelector(".buddy").style.backgroundImage = src;
    document.querySelector("#instagramLink").innerHTML = '<a href="http://instagram.com/' + data[1] + '">' + data[1] + ' </a>';
    document.querySelector("#trenderLink").innerHTML = data[2];
  });
}

function leftSwipe(event) {
  $(this).find('.status').remove();
  $(this).append('<div class="status dislike">Dislike!</div>');
  // alert("left");
  nextPhoto("");
}

function rightSwipe(event) {
  $(this).find('.status').remove();
  $(this).append('<div class="status like">Like!</div>');

  nextPhoto("like");
}

function downSwipe(event) {
  alert("save");
  // nextPhoto("");
}

function voting(vote) {
  if ((vote == "like" && rating >= 0.6) || (vote == "" && rating < 0.6) || rating == 0) {
    document.querySelector("#points").innerHTML = ++points + " points";
    document.querySelector("#strike").innerHTML = ++inRow + " in row";
    return 1;
  } else {
    inRow = 0;
    document.querySelector("#strike").innerHTML = inRow + " in row";
    return 0;
  }
}