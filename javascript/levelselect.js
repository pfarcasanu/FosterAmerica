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