$(document).ready(function() {
  navToggle();
});

function navToggle() {
  $('.navicon').click(function() {
    $('.navbar').addClass(' mobile');
    $('.navbuttons').addClass(' mobile');
    $('.navbuttons a').addClass(' showme');
    $('.navicon').addClass(' hideme');
    $('.navbar p').hide();
    $('a').click(function() {
      $('.navbar').removeClass(' mobile');
      $('.navbuttons').removeClass(' mobile')
      $('.navbuttons a').removeClass(' showme').addClass(' hideme');
      $('.navicon')removeClass(' hideme').addClass(' showme');
      $('.navbar p').show();
      navToggle();
    });
  });
};

function checkSize() {
  if ($(window).width() >= 400) {
    $('.navbuttons a').show();
    $('.navicon').hide();
  }
}
