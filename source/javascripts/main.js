$(function() {
  $("a").hover(function(e) {
    console.log('hi')
    var randomClass = getRandomClass();
    $(e.target).css("color", randomClass);
  });
});

function getRandomClass() {
    //Store available css classes
    var classes = new Array("red", "orange", "yellow", "green", "blue", "indigo", "violet");
    var randomNumber = Math.floor(Math.random()*7);
    return classes[randomNumber];
}
