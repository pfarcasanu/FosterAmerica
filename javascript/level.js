window.onload = function(){
var x = document.getElementById("grid");
var y = x.getElementsByClassName("box");
var z;
var str = getCookie("array");
var level = parseInt(getCookie("level"));
var questions = str.split("|")[level].split(",");
this.console.log(questions);

for (i = 0; i<questions.length; i++){
    if (questions[i] != 0){
    document.getElementById(i).onclick = null;
    document.getElementById(i).style.opacity = 0;
        }
    }

if (level == 0) {
    document.getElementById("grid").style.backgroundImage = "url('../images/header.jpg')";
    document.getElementById("category").innerHTML = "Foster Care 101";
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "red";
    }
}
    


if (level == 1) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "orange";
    }
    document.getElementById("category").innerHTML = "Facts and Figures";
    /*x.style.backgroundImage = "url('fostercare101.png')";*/
}

if (level == 2) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "yellow";
    }
    document.getElementById("category").innerHTML = "Diary of an Orphan";
    /*x.style.backgroundImage = "url('fostercare101.png')";*/
}

if (level == 3) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "green";
    }
    document.getElementById("category").innerHTML = "Governments as Parents";
    /*x.style.backgroundImage = "url('fostercare101.png')";*/
}

if (level == 4) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "blue";
    }
    document.getElementById("category").innerHTML = "So You Turned 18";
    /*x.style.backgroundImage = "url('fostercare101.png')";*/
}

if (level == 5) {
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "purple";
    }
    document.getElementById("category").innerHTML = "A Problem We Can Solve";
    /*x.style.backgroundImage = "url('fostercare101.png')";*/
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
