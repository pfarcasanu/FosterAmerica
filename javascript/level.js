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
    document.getElementsByClassName("navbar-brand1")[0].innerHTML = "Foster Care 101";
    x.style.backgroundImage = "../images/fostercare101.png";
}
    


if (level == 1) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "orange";
    }
    document.getElementsByClassName("navbar-brand1")[0].innerHTML = "Facts and Figures";
    x.style.backgroundImage = "../images/header.jpg";
}

if (level == 2) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "yellow";
    }
    document.getElementsByClassName("navbar-brand1")[0].innerHTML = "Diary of an Orphan";
    x.style.backgroundImage = "../images/header.jpg";
}

if (level == 3) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "green";
    }
    document.getElementsByClassName("navbar-brand1")[0].innerHTML = "Governments as Parents";
    x.style.backgroundImage = "../images/header.jpg";
}

if (level == 4) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "blue";
    }
    document.getElementsByClassName("navbar-brand1")[0].innerHTML = "So You Turned 18";
    x.style.backgroundImage = "../images/header.jpg";
}

if (level == 5) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "purple";
    }
    document.getElementsByClassName("navbar-brand1")[0].innerHTML = "A Problem We Can Solve";
    x.style.backgroundImage = "../images/header.jpg";
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
