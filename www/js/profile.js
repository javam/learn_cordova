  var username, name, instagram, likes, ratingView, ratingShow, saved, followers, country, city, likes, followed;

  const pathProfilePhp = server + "php/profile.php";
  const pathPhotoPhp = server + "php/photo.php";

  function getUserData() {

    $.get(
      pathProfilePhp, {
        token: token
      },
      function (data) {
        data = JSON.parse(data);

        username = data['username'];
        name = data['name'];
        instagram = data['instagram'];
        country = data['country'];
        city = data['city'];
        followers = data['followers'];
        likes = data['likes'];
        rating_photographer = data['rating_photographer'];

        $("#info").append($("<p>" + username + "</p>"));
        $("#info").append($("<p>" + name + "</p>"));
        $("#info").append($("<p>" + instagram + "</p>"));
        $("#info").append($("<p>" + country + "</p>"));
        $("#info").append($("<p>" + city + "</p>"));
        $("#info").append($("<p>" + followers + "</p>"));
        $("#info").append($("<p>" + likes + "</p>"));
        $("#info").append($("<p>" + rating_photographer + "</p>"));
      });

    $.get(
      pathPhotoPhp, {
        token: token
      },
      function (data) {
        data = JSON.parse(data);

        for (let i = 0; i < data.length; i++) {
          $("#photosProfile").append($("<img class='gallery_photo' src='" + server + "photo/" + data[i] + "'/>"));
        }
      });

  }