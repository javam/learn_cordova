// var id = 1;
const path = server + "php/swipe.php";
let i = 2;
let rating;
let points = inRow = 0;

alert("swipe");

$(function () {

  if (document.querySelector(".buddy").style.backgroundImage == "") {
    $.get(path, {
      user_id: id,
    }, function (data) {
      data = JSON.parse(data);
      rating = data[3];

      let src = "url(https://10.0.2.2/photo/" + data[0].split('"').join("") + ')';
      document.querySelector(".buddy").style.backgroundImage = src;
      document.querySelector("#instagramLink").innerHTML = data[1];
      document.querySelector("#trenderLink").innerHTML = data[2];
    });
  }

  $(".buddy").swipe({
    swipeLeft: leftSwipe,
    swipeRight: rightSwipe,
    threshold: 0
  });

  function leftSwipe(event) {
    $(this).find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    nextPhoto("");
  }

  function rightSwipe(event) {
    $(this).find('.status').remove();
    $(this).append('<div class="status like">Like!</div>');

    nextPhoto("like");
  }
});

function nextPhoto(liked) {


  $.get(path, {
    user_id: id,
    liked: liked,
    vote: voting(liked)
  }, function (data) {
    data = JSON.parse(data);
    rating = data[3];

    let src = "url(https://10.0.2.2/photo/" + data[0].split('"').join("") + ')';
    document.querySelector(".buddy").style.backgroundImage = src;
    document.querySelector("#instagramLink").innerHTML = '<a href="http://instagram.com/' + data[1] + '"}>' + data[1] + ' </a>';
    document.querySelector("#trenderLink").innerHTML = data[2];
  });
}

function voting(vote) {
  if ((vote == "like" && rating >= 0.6) || (vote == "" && rating < 0.6)) {
    document.querySelector("#points").innerHTML = ++points + "points";
    document.querySelector("#strike").innerHTML = ++inRow + "in row";
    return 1;
  } else {
    inRow = 0;
    document.querySelector("#strike").innerHTML = inRow + "in row";
    return 0;
  }
}


// $(document).ready(function () {
//   alert("swipe");
// });