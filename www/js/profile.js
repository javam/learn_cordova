  // var id = 1;
  var nickName, name, instagram, likes, ratingView, ratingShow, saved, followers, country, city, likes, followed;

  const pathProfilePhp = server + "php/profile.php";
  const pathPhotoPhp = server + "php/photo.php";

  $.get(
    pathProfilePhp, {
      id: id
    },
    function (data) {
      data = JSON.parse(data);

      nickName = data.nickname;
      name = data.name;
      instagram = data.instagram;
      country = data.country;
      city = data.city;
      followers = data.followers;
      likes = data.likes;
      ratingShow = data.ratingPhotographer;

      $("#info").append($("<p>" + nickName + "</p>"));
      $("#info").append($("<p>" + name + "</p>"));
      $("#info").append($("<p>" + instagram + "</p>"));
      $("#info").append($("<p>" + country + "</p>"));
      $("#info").append($("<p>" + city + "</p>"));
      $("#info").append($("<p>" + followers + "</p>"));
      $("#info").append($("<p>" + likes + "</p>"));
      $("#info").append($("<p>" + ratingShow + "</p>"));

    });

  $.get(
    pathPhotoPhp, {
      id: id
    },
    function (data) {
      data = JSON.parse(data);

      for (let i = 0; i < data.length; i++) {
        $("#photosProfile").append($("<img class='gallery_photo' src='" + server + "photo/" + data[i] + "'/>"));
      }
    });