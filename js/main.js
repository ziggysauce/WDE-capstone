$(document).ready(function() {
  navToggle();
  smoothScroll();
  $(document).on("scroll", highlightNav);
});

// Create separate vertical navigation tab for smaller screen view
function navToggle() {
  $('.navicon').click(function() {
    $('.navbuttons a').removeClass('activenav');
    $('.navbar').addClass(' mobile');
    $('.navbuttons').addClass(' response');
    $('.navbuttons li').addClass(' showme');
    $('.navbar p').hide();
    $('.navicon').addClass("active");
    $('a').click(function() {
      $('.navbar').removeClass(' mobile');
      $('.navbuttons').removeClass(' response');
      $('.navbuttons li').removeClass(' showme');
      $('.navbar p').show();
      $('.navicon').removeClass("active");
      navToggle();
    });
  });
};

// Smooth scoll transition when any tab is clicked
function smoothScroll() {
  $('.scroll').click(function(dest){
    dest.preventDefault();
    $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
  });
};

// Show current active tab for user
function highlightNav() {
  var scrollPosition = $(document).scrollTop();
  $('.scroll').each(function() {
    var currentId = $(this);
    var ref = $(currentId.attr('href'));
    if (ref.offset().top <= scrollPosition) {
      $('.navbuttons a').removeClass('activenav');
      currentId.addClass(' activenav');
      $('.navicon').removeClass("activenav");
    }
    else {
      currentId.removeClass('activenav');
    }
  });
};
