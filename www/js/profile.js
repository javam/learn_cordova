// const pathPhotoPhp = server + "php/photo.php";
// if (typeof pathProfilePhp !== undefined) {
//   console.log(typeof (pathProfilePhp));

//   // const pathProfilePhp = server + "php/profile.php";
// }
console.log("profile.js; token = " + token);

getUserData();

function getUserData() {
  let username, name, instagram, likes, ratingView, ratingShow, saved, followers, country, city, followed;

  console.log(pathProfilePhp);

  $.post(
    pathProfilePhp, {
      token: token
    },
    function (data) {
      console.log(likes);


      data = JSON.parse(data);
      console.log(data);

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

  // $.get(
  //   pathPhotoPhp, {
  //     token: token
  //   },
  //   function (data) {
  //     data = JSON.parse(data);

  //     for (let i = 0; i < data.length; i++) {
  //       $("#photosProfile").append($("<img class='gallery_photo' src='" + server + "photo/" + data[i] + "'/>"));
  //     }
  //   });

}