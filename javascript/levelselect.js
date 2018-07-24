function setCookie(cname, questions_string, new_question) {
    if (questions_string == null || questions_string == ""){
      document.cookie = cname + "=" + new_question + ";";
    } else {
      document.cookie = cname + "=" + questions_string + "," + new_question + ";";
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
      var q = getCookie(cname);
      console.log("q = " + q)
      setCookie(cname, q , q_number);
  }

function bodyClicked() {
    window.location = "level.html";
}

function inputEmail() {
	window.location = "email.html"
}