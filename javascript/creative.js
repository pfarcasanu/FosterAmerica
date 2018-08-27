var button_sound = document.getElementById("buttonSound"); 

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


