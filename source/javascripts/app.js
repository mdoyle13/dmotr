//= require jquery
//= require_tree ./vendor

$(function() {
  
  $(document).pjax('a', '#page-outlet', {
    fragment: '.page-fragment',
    container: '#page-outlet'
  })
  
  $("a").hover(function(e) {
    console.log('hi')
    var randomClass = getRandomClass();
    $(e.target).css("color", randomClass);
  });
});

function getRandomClass() {
    //Store available css classes
    var classes = new Array("red", "orange", "yellow", "green", "RoyalBlue", "pink", "plum");
    var randomNumber = Math.floor(Math.random()*7);
    return classes[randomNumber];
}
