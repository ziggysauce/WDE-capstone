$(document).ready(function() {
  navToggle();
  iconToggle();
});

function navToggle() {
  $('.navicon').click(function() {
    $('.navbar').addClass(' mobile');
    $('.navbuttons').addClass(' response');
    $('.navbuttons a').addClass(' showme');
    $('.navbar p').hide();
    $('a').click(function() {
      $('.navbar').removeClass(' mobile');
      $('.navbuttons').removeClass(' response');
      $('.navbuttons a').removeClass(' showme');
      $('.navbar p').show();
      navToggle();
    });
  });
};

function iconToggle() {
  $('.navicon').click(function() {
    $(this).toggleClass("active");
  });
};
