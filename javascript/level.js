window.onload = function(){
var w = document.getElementsByClassName("touchHere");
var v;
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
    for (v = 0; v < w.length; v++) {
    if (questions.every(x => x == 0)){
        w[0].innerHTML = "Touch Here!"
        w[1].innerHTML = "Or Here!"
        w[2].innerHTML = "Or Here!"
        w[3].innerHTML = "Or Even Here!"}
    else {w[v].innerHTML = ""}
    }
    ChangeBackgroundImageOfGrid("fostercare101blurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("fostercare101");
    }
    document.getElementById("category").innerHTML = "Foster Care 101";
    for (z = 0; z < y.length; z++) {
        y[z].style.backgroundColor = "black";
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

function changeClass1(){
    var a = document.getElementsByClassName("unclicked btn-3d cyan");
            a[0].className = "clicked btn-3d cyan";
            setTimeout(classBack1, 100);}

        function changeClass2(){
            var a = document.getElementsByClassName("unclicked btn-3d cyan");
                    a[1].className = "clicked btn-3d cyan";
                    setTimeout(classBack2, 100);}
    
                function changeClass3(){
                    var a = document.getElementsByClassName("unclicked btn-3d cyan");
                            a[2].className = "clicked btn-3d cyan";
                            setTimeout(classBack3, 100);}
function changeClass4(){
    var a = document.getElementsByClassName("unclicked btn-3d cyan");
            a[3].className = "clicked btn-3d cyan";
            setTimeout(classBack4, 100);}
    
function classBack1(){
    var a = document.getElementsByClassName("clicked btn-3d cyan");
        a[0].className = "unclicked btn-3d cyan";}
        

    function classBack2(){
        var a = document.getElementsByClassName("clicked btn-3d cyan");
        a[1].className = "unclicked btn-3d cyan";}
            
        function classBack3(){
            var a = document.getElementsByClassName("clicked btn-3d cyan");
            a[2].className = "unclicked btn-3d cyan";}


function classBack4(){
    var a = document.getElementsByClassName("clicked btn-3d cyan");
    a[3].className = "unclicked btn-3d cyan";}

function changeClass() {
    this.className = "clicked btn-3d cyan";
    setTimeout(classBack, 100);
}

function classBack() {
    this.className = "unclicked btn-3d cyan";
}
