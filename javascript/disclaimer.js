var button_sound = document.getElementById("buttonSound"); 
var button_sound2 = document.getElementById("buttonSound2");

function buttonClick() {
  button_sound.play();

  button_sound.onended = function(){
    document.cookie = "disclaimer=0";
    window.location.href = "disclaimer.html";
  }  
}

function buttonClick2() {
  button_sound.play();

  button_sound.onended = function(){
    window.location.href = "levelnew.html";
  }  
}

function testSound() {
    button_sound2.play();
}

window.onload = function(){
  var disclaimer = getCookie("disclaimer");
  if (disclaimer != ""){
    document.getElementById("mybutton").onmousedown = buttonClick2();
  }
}


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}