window.onload = function(){
var x = document.getElementById("grid");
var y = x.getElementsByClassName("box");
var z;
var str = getCookie("array");
var level = parseInt(getCookie("level"));
var questions = str.split("|")[level].split(",");
var fanfair_sound = document.getElementById("fanFair"); 
this.console.log(questions);
    
for (i = 0; i<questions.length; i++){
    if (questions[i] != 0){
    document.getElementById(i).onclick = null;
    document.getElementById(i).style.opacity = 0;
        }
    }
    
    
    
if (level == 0) {
    ChangeBackgroundImageOfGrid("fostercare101blurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("fostercare101");
    }
    document.getElementById("category").innerHTML = "Foster Care 101";
    document.getElementsByClassName("touchHere").innerHTML = "Touch Here!";
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "red";
     }
}
        
if (level == 1) {
    for (z = 0; z < y.length; z++) {
    y[z].style.backgroundColor = "orange";
    }
    ChangeBackgroundImageOfGrid("header");
    document.getElementById("category").innerHTML = "Facts and Figures";
}
    
if (level == 2) {
    ChangeBackgroundImageOfGrid("header");
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "yellow";
    }
    document.getElementById("category").innerHTML = "Diary of an Orphan";
}
    
if (level == 3) {
    ChangeBackgroundImageOfGrid("header");
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "green";
    }
    document.getElementById("category").innerHTML = "Governments as Parents";
}
    
if (level == 4) {
    ChangeBackgroundImageOfGrid("header");
    for (z = 0; z < y.length; z++) {
    y[z].style.backgroundColor = "blue";
}
    document.getElementById("category").innerHTML = "So You Turned 18";
}
    
if (level == 5) {
    ChangeBackgroundImageOfGrid("header");
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "purple";
    }
    document.getElementById("category").innerHTML = "A Problem We Can Solve";
        
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
    
function ChangeBackgroundImageOfGrid(imagePrefix){
    $('#grid').css('background-image','url(images/' + imagePrefix + '.png)');
}
    
function FadeBackground(imagePrefix){
    $('#grid').delay(1000).fadeTo('slow', 0.3, function(){
    $(this).css('background-image', 'url(images/' + imagePrefix + '.png)');
}).fadeTo('slow', 1)
}
    