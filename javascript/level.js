/*function zeroopacity1(){
  document.getElementById("button1").style.opacity = 0;
}

function zeroopacity2(){
  document.getElementById("button2").style.opacity = 0;
}

function zeroopacity3(){
  document.getElementById("button3").style.opacity = 0;
}
function zeroopacity4(){
  document.getElementById("button4").style.opacity = 0;
}
function zeroopacity5(){
  document.getElementById("button5").style.opacity = 0;
}
function zeroopacity6(){
  document.getElementById("button6").style.opacity = 0;
}*/

function setCookie(cname, questions_string, new_question) {
    document.cookie = cname + "=" + questions_string + "," + new_question + ";";
}

function getCookie() {
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

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function zero_opacity(e){
	var targ;
    targ=e.srcElement;
    targID = targ.id;
    document.getElementById(targID).style.opacity = 0;
    window.open('question.html', '_blank');
}
