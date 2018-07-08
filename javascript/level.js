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

function zero_opacity(e){
	var targ;
    targ=e.srcElement;
    targID = targ.id;
    document.getElementById(targID).style.opacity = 0;
    window.open('question.html', '_blank');
    /*
    opac = document.getElementById(targID).style.opacity
    if()  opac;
      return
    else;
      document.getElementById(targID).style.opacity = 0;
      window.open('question.html', '_blank');
      */
}
