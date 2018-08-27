window.onload = function(){
var x = document.getElementById("grid");
var y = x.getElementsByClassName("box");
var z;
var str = getCookie("array");
var level = parseInt(getCookie("level"));
var questions = str.split("|")[level].split(",");
if (level == 0) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "red";
    }
    x.style.backgroundImage = "url(levelselect.png)";
    document.getElementsByClassName("navbar-brand1")[0].innerHTML = "Foster Care 101";
}
for (i = 0; i<questions.length; i++){
    if (questions[i] != 0){
    document.getElementById(i).onclick = null;
    document.getElementById(i).style.opacity = 0;
        }
    }
}
      
function setQuestionCookie(cname, new_question) {
    document.cookie = cname + "=" +  new_question + ";";
}

function questionWasPressed(q_number) {
    var cname = "question";
    setQuestionCookie(cname, q_number);
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

function questionClick(e){
	var targ;
    targ=e.srcElement;
    targID = targ.id;
    console.log("targID = " + targID);
    console.log(typeof targID);
    questionWasPressed(targID);
    window.location = 'question2.html';
}
