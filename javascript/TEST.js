var a = document.getElementsByClassName("cyan");
var b;

function changeClass(){
    document.getElementById("hi").className = "clicked btn-3d cyan";
    setTimeout(classBack, 100)}

function classBack(){
    document.getElementById("hi").className = "unclicked btn-3d cyan";
}