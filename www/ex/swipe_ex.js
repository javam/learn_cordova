  $(function () {
    $('.buddy').swipe({
      swipeLeft: leftSwipe,
      swipeRight: rightSwipe,
      threshold: 0
    });

    function leftSwipe(event) {
      $(this).addClass('rotate-right').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(this).append('<div class="status dislike">Dislike!</div>');

      if ($(this).is(':last-child')) {
        $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
        alert('OUPS');
      } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
      }
    }

    function rightSwipe(event) {
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(this).append('<div class="status like">Like!</div>');

      if ($(this).is(':last-child')) {
        $('.buddy:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(300);
      } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
      }
    }


  });