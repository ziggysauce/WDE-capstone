$(document).ready(function() {
  navToggle();
  scroll();
});

function navToggle() {
  $('.navicon').click(function() {
    $('.navbar').addClass(' mobile');
    $('.navbuttons').addClass(' response');
    $('.navbuttons a').addClass(' showme');
    $('.navbar p').hide();
    $('.navicon').addClass("active");
    $('a').click(function() {
      $('.navbar').removeClass(' mobile');
      $('.navbuttons').removeClass(' response');
      $('.navbuttons a').removeClass(' showme');
      $('.navbar p').show();
      $('.navicon').removeClass("active");
      navToggle();
    });
  });
};

function scroll() {
  $('.scroll').click(function(dest){
    dest.preventDefault();
    $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
  });
};
