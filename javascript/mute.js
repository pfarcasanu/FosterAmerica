// if a mute button exists, pull that element
var mute_btn = document.getElementById("mute_btn");
addLoadEvent(LoadPageMute);

// Cookie Ops
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

// On load and On Click
function LoadPageMute(){
  var muted = getCookie("mute");
  if (muted == ""){
    document.cookie = "muted=0";
    muted = 0; 
  }
  muted = parseInt(muted);
  console.log("mute = ", muted);
  MuteOperations(muted);
  UpdateUI(muted);
}

function mutebtn_click(){
  var muted = getCookie("mute");
  console.log("mute pressed. Cookie: ", muted );
  if (muted == ""){
    document.cookie = "muted=0";
    muted = 0; 
  }
  muted = parseInt(muted);
  if (muted){
    muted = 0;
  } else {
    muted = 1;
  }
  document.cookie = "muted=" + muted;
  console.log("mute = ", muted);
  MuteOperations(muted);
  UpdateUI(muted);
}

// Muting and Unmuting
function MuteOperations(muted){
  var elems = document.querySelectorAll("video, audio");
  if (muted){
    [].forEach.call(elems, function(elem) { mute(elem); });
  } else {
    [].forEach.call(elems, function(elem) { unmute(elem); });
  }
}

function UpdateUI(muted){
  console.log("update UI called");
  if (mute_btn != null){
    if (muted){
      mute_btn.innerHTML = "Unmute";
    } else {
      mute_btn.innerHTML = "Mute";
    }
  }
}

function mute(elem) {
  elem.muted = true;
}

function unmute(elem){
  elem.muted = false;
}

// add load event handler
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}