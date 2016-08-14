//= require jquery
//= require_tree ./vendor

$(function() {
  
  $(document).pjax('a', '#page-outlet', {
    fragment: '.page-fragment',
    container: '#page-outlet'
  });
  
  $(document).on('pjax:success', function() {
    $('nav').removeClass('expanded')
  });
  
  $("a").hover(function(e) {
    var randomClass = getRandomClass();
    $(e.target).css("color", randomClass);
  });
  
  $('.menu-open').click(function(e) {
    e.preventDefault();
    $('nav').addClass('expanded');
  });
  
  $('.menu-close').click(function(e) {
    e.preventDefault();
    $('nav').removeClass('expanded');
  });
});

function getRandomClass() {
    //Store available css classes
    var classes = new Array("red", "orange", "yellow", "green", "RoyalBlue", "pink", "plum");
    var randomNumber = Math.floor(Math.random()*7);
    return classes[randomNumber];
}
