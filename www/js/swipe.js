// превратить в let
var rating;
var points = inRow = 0;

var prev_id;

nextPhoto('first');

function nextPhoto(liked) {
  $.post(pathSwipe, {
    token: token,
    liked: liked,
    prev_id: prev_id
  }, function (data) {
    // alert('swipe = ' + data);
    console.log(data);
    data = JSON.parse(data);
    guess = data[3];
    prev_id = data[4];

    let src = "url(" + server + "photo/" + data[0].split('"').join("") + ')';
    document.querySelector(".buddy").style.backgroundImage = src;
    document.querySelector("#instagramLink").innerHTML = '<a href="http://instagram.com/' + data[1] + '">' + data[1] + ' </a>';
    document.querySelector("#trenderLink").innerHTML = data[2];

    // проверка на то, угадал ли на прошлом фото 
    if (guess == 'yes') {
      document.querySelector("#points").innerHTML = ++points + " points";
      document.querySelector("#strike").innerHTML = ++inRow + " in row";
    } else {
      inRow = 0;
      document.querySelector("#strike").innerHTML = inRow + " in row";
    }

    $(".buddy").swipe({
      swipeLeft: leftSwipe,
      swipeRight: rightSwipe,
      swipeDown: downSwipe,
      swipeUp: upSwipe,
      threshold: 0
    });
  });
}

function leftSwipe(event) {
  $(this).find('.status').remove();
  $(this).append('<div class="status dislike">Dislike!</div>');

  nextPhoto("dislike");
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

function upSwipe(event) {
  alert("user profile");
  // nextPhoto("");
}

// function voting(vote) {
//   if ((vote == "like" && rating >= 0.6) || (vote == "" && rating < 0.6) || rating == 0) {
//     document.querySelector("#points").innerHTML = ++points + " points";
//     document.querySelector("#strike").innerHTML = ++inRow + " in row";
//     return 1;
//   } else {
//     inRow = 0;
//     document.querySelector("#strike").innerHTML = inRow + " in row";
//     return 0;
//   }
// }