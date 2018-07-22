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

function checkCookie(q_number) {
    var cname = "question";
    var q = getCookie(cname);
    console.log("q = " + q)
    setCookie(cname, q , q_number);
}

function zero_opacity(e){
	var targ;
    targ=e.srcElement;
    targID = targ.id;
    document.getElementById(targID).style.opacity = 0;
    console.log("targID = " + targID);
    console.log(typeof targID);
    checkCookie(targID);
    window.open('question.html', '_blank');
}
