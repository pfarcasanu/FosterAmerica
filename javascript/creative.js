var button_sound = document.getElementById("buttonSound"); 

function buttonClick() {
  button_sound.play();

  button_sound.onended = function(){
    var disclaimer = getCookie("disclaimer");
    if (disclaimer != ""){
      window.location.href = "levelselect_new.html";
      }
    else{
    document.cookie = "disclaimer=0";
    window.location.href = "disclaimer.html";
    }
  }  
}

function buttonClick2() {
  button_sound.play();

  button_sound.onended = function(){
    window.location.href = "testlevel.html";
  }  
}

function readmore() {
  button_sound.play();

  button_sound.onended = function(){
    window.location.href = "readmore.html";
  }  
}

function buttonClick3() {
    var disclaimer = getCookie("disclaimer");
    if (disclaimer != ""){
      window.location.href = "levelselect_new.html";
      }
    else{
    document.cookie = "disclaimer=0";
    window.location.href = "disclaimer.html";
    }
  
}

function homePage() {
  button_sound.play();

  button_sound.onended = function(){
    window.location.href = "index.html";
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
