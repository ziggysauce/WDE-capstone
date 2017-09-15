$(document).ready(function() {
  navToggle();
  iconToggle();
  scroll();
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
  $('.navbuttons').click(function() {
    $(this).toggleClass("active");
  });
};

function scroll() {
  $('.scroll').click(function(dest){
    dest.preventDefault();
    $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
  });
};
