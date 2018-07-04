(function($){
  $(function(){
    $('.button-collapse').sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

var el = document.getElementById("section-one");
//pic = dmLib.selectBackground("random", 3, "../img/rnd/", "jpg");
pic = dmLib.selectImage("dayOfWeek", 3, "../img/dow/", "svg");
console.log(pic);
el.style.backgroundImage = pic;
