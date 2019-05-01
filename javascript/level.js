window.onload = function(){
var x = document.getElementById("grid");
var y = x.getElementsByClassName("box");
var z;
var str = getCookie("array");

var level = 0;
var levelstr = getCookie("level");
if (levelstr != "") level = parseInt(levelstr);

try{
    var questions = str.split("|")[level].split(",");
    for (i = 0; i<questions.length; i++){
        if (questions[i] != 0){
        document.getElementById(i).onclick = null;
        document.getElementById(i).style.opacity = 0;
            }
        }
} catch{
    this.console.log("load failed");
}
var fanfair_sound = document.getElementById("fanFair"); 
    
    
if (level == 0) {
    ChangeBackgroundImageOfGrid("fostercare101blurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("fostercare101");
        CreateNextButton(0);
    }
    document.getElementById("category").innerHTML = "Foster Care 101";
}
        
if (level == 1) {
    ChangeBackgroundImageOfGrid("factsandfiguresblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("factsandfigures");
        CreateNextButton(1);
    }
    document.getElementById("category").innerHTML = "Diary of a Foster Kid";
}
    
if (level == 2) {
    ChangeBackgroundImageOfGrid("diaryofanorphanblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("diaryofanorphan");
        CreateNextButton(2);
    }
    document.getElementById("category").innerHTML = "So Now You're 18";
}
    
if (level == 3) {
    ChangeBackgroundImageOfGrid("governmentsasparentsblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("governmentsasparents");
        CreateNextButton(3);
    }
    document.getElementById("category").innerHTML = "Uncle Sam";
}
    
if (level == 4) {
    ChangeBackgroundImageOfGrid("soyouturned18blurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("soyouturned18");
        CreateNextButton(4);
    }
    document.getElementById("category").innerHTML = "Facts and Figures";
}
    
if (level == 5) {
    ChangeBackgroundImageOfGrid("aproblemwecansolveblurry");
    if (questions.every(x => x != 0)){
        fanfair_sound.play();
        FadeBackground("aproblemwecansolve");
    }
    document.getElementById("category").innerHTML = "We Can Fix It";
        
}
}

function CreateNextButton(level){
    var btn = document.getElementById("nxtBtn");
    btn.style.visibility = "visible";
    btn.style.color = "green";
}

function NextButtonClick(){
    var lvl = getCookie("level");
    if (lvl != ""){
        lvl = parseInt(lvl);
        var cookie = "level=" + (lvl + 1);
        console.log(cookie);
        document.cookie = cookie;
        location.reload();
    }
}
          
function setQuestionCookie(cname, new_question) {
    document.cookie = cname + "=" +  new_question + ";max-age="+(3600*24*999);
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