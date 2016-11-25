$(function () {
//------------------------------------------------------------------------
// Full Screen Image
  $(window).on('load resize', function () {
    $('.hero__fullscreen-image-container, .about, .portfolio').css('min-height', window.innerHeight);
  });

//------------------------------------------------------------------------
// Scrolling
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
