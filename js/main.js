$(document).ready(function() {
  navToggle();
});

function navToggle() {
  $('.navicon').click(function() {
    $('.navbar').addClass(' mobile');
    $('.navbuttons').addClass(' mobile');
    $('.navbuttons a').addClass(' showme');
    $('a').click(function() {
      $('.navbar').removeClass(' mobile');
      $('.navbuttons').removeClass(' mobile');
      $('.navbuttons a').removeClass(' showme');
      navToggle();
    });
  });
};
