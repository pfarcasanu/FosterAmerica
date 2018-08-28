window.onload = function(){
	var str = getCookie("array");
	var num_correct = 0;
	if (str == ""){
    str = "array=" + empty_str;
    document.cookie = str;
  } else {
    // calculate num answered questions
    var array = str.split("|").join().split(",");
    array.forEach(element => {
      if (parseInt(element) == 2) num_correct++;
    });
	}
	str = "You Answered:</br>" + num_correct.toString() + "/24" + " (" + Math.floor(num_correct*100/24).toString()+ ")";
	document.getElementById("quesAnsLabel").innerHTML = str;
	this.console.log(str);
	this.console.log(Math.floor(num_correct/24).toString());
}

// region: base cookie functions
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

// control events
function continueButtonClick(){
  button_sound.play();

  button_sound.onended = function(){
    window.location.href = "index.html";
  }  
}