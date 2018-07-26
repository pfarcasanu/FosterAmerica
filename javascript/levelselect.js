function setCookie(cname, levels_string, new_level) {
    if (levels_string == null || levels_string == ""){
      document.cookie = cname + "=" + new_level + ";";
    } else {
      document.cookie = cname + "=" + levels_string + "," + new_level + ";";
    }
  }
  
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      console.log("document cookie is " + document.cookie);
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          console.log("c = " + c);
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
  
  function checkCookie(level_number) {
      var cname = "level";
      var level = getCookie(cname);
      console.log("level = " + level)
      setCookie(cname, level , level_number);
  }

function bodyClicked(e) {
	var targ;
    targ=e.srcElement;
    targID = targ.id;
    console.log("targID = " + targID);
    console.log(typeof targID);
    checkCookie(targID);

    window.location = "level.html";
}

function inputEmail() {
	window.location = "email.html"
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.speaker')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  

}


function diffImage(img) 
{
   	
   if(img.src.match("images/speaker2.png")) img.src = "images/mute3.png";
   else img.src = "images/speaker2.png"; 
}

function mute() { 
  if (document.getElementById("music1").muted == false)
  document.getElementById("music1").muted = true;
  else (document.getElementById("music1").muted = false)
}

function levelSelect() {
    window.location = "levelselect.html"
}

function email() {
  window.location = "email.html"
}
