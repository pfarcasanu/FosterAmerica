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
    if (questions.every(x => x == 0)){
        document.getElementsByClassName("unclicked btn-3d cyan one")[0].innerHTML = "Click Me!"
        document.getElementsByClassName("unclicked btn-3d cyan two")[0].innerHTML = "Click Me!"
        document.getElementsByClassName("unclicked btn-3d cyan three")[0].innerHTML = "Click Me!"
        document.getElementsByClassName("unclicked btn-3d cyan four")[0].innerHTML = "Click Me!"}
    /*else {
        document.getElementsByClassName("unclicked btn-3d cyan one")[0].innerHTML = "Question 1"
        document.getElementsByClassName("unclicked btn-3d cyan two")[0].innerHTML = "Question 2"
        document.getElementsByClassName("unclicked btn-3d cyan three")[0].innerHTML = "Question 3"
        document.getElementsByClassName("unclicked btn-3d cyan four")[0].innerHTML = "Question 4"}*/
    ChangeBackgroundImageOfGrid("fostercare101blurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("fostercare101");
    }
    document.getElementById("category").innerHTML = "Foster Care 101";
}
        
if (level == 1) {
    ChangeBackgroundImageOfGrid("factsandfiguresblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("factsandfigures");
    }
    document.getElementById("category").innerHTML = "Facts and Figures";
}
    
if (level == 2) {
    ChangeBackgroundImageOfGrid("diaryofanorphanblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("diaryofanorphan");
    }
    document.getElementById("category").innerHTML = "Diary of an Orphan";
}
    
if (level == 3) {
    ChangeBackgroundImageOfGrid("governmentsasparentsblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("governmentsasparents");
    }
    document.getElementById("category").innerHTML = "Governments as Parents";
}
    
if (level == 4) {
    ChangeBackgroundImageOfGrid("soyouturned18blurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("fostercare101");
    }
    document.getElementById("soyouturned18").innerHTML = "So You Turned 18";
}
    
if (level == 5) {
    ChangeBackgroundImageOfGrid("aproblemwecansolveblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("aproblemwecansolve");
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
    var click_Sound = document.getElementById("clickSound");
    click_Sound.play();
    var targ;
    targ=e.srcElement;
    targID = targ.id;
    console.log("targID = " + targID);
    console.log(typeof targID);
    questionWasPressed(targID);
    click_Sound.onended = function(){
        window.location = 'question2.html';
}
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
    var a = document.getElementsByClassName("unclicked btn-3d cyan one");
            a[0].className = "clicked btn-3d cyan one";
            setTimeout(classBack1, 100);}

        function changeClass2(){
            var a = document.getElementsByClassName("unclicked btn-3d cyan two");
                    a[0].className = "clicked btn-3d cyan two";
                    setTimeout(classBack2, 100);}
    
                function changeClass3(){
                    var a = document.getElementsByClassName("unclicked btn-3d cyan three");
                            a[0].className = "clicked btn-3d cyan three";
                            setTimeout(classBack3, 100);}
function changeClass4(){
    var a = document.getElementsByClassName("unclicked btn-3d cyan four");
            a[0].className = "clicked btn-3d cyan four";
            setTimeout(classBack4, 100);}
    
function classBack1(){
    var a = document.getElementsByClassName("clicked btn-3d cyan one");
        a[0].className = "unclicked btn-3d cyan one";}
        

    function classBack2(){
        var a = document.getElementsByClassName("clicked btn-3d cyan two");
        a[0].className = "unclicked btn-3d cyan two";}
            
        function classBack3(){
            var a = document.getElementsByClassName("clicked btn-3d cyan three");
            a[0].className = "unclicked btn-3d cyan three";}


function classBack4(){
    var a = document.getElementsByClassName("clicked btn-3d cyan four");
    a[0].className = "unclicked btn-3d cyan four";}