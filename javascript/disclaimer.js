var button_sound = document.getElementById("buttonSound"); 
var button_sound2 = document.getElementById("buttonSound2");

    function buttonClick() {
      button_sound.play();

    button_sound.onended = function(){
      window.location.href = "levelselect_new.html";
    }  
  }

function testSound() {
    button_sound2.play();
}

document.body.addEventListener('touchmove', function(event) {
  console.log(event.source);
  //if (event.source == document.body)
    event.preventDefault();
}, false);

window.onresize = function() {
  $(document.body).width(window.innerWidth).height(window.innerHeight);
}

$(function() {
  window.onresize();
});