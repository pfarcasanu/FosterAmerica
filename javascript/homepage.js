function bodyClicked() {
    window.location = "levelselect.html"
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.matches('.dropdown-content')) or (event.target.matches('.dropbtn')){
    openDropdown.classList.contains('show')
  }
  /*if (!event.target.matches('.dropbtn'))*/ else {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  

}

function diffImage(img) 
{
   	
   if(img.src.match("images/speaker2.png")) img.src = "images/mute3.png";
   else img.src = "images/speaker2.png"; 
}

<<<<<<< HEAD
function mute() { 
  if (document.getElementById("music1").muted == false)
  document.getElementById("music1").muted = true;
  else (document.getElementById("music1").muted = false)
}
=======
function mute() {
	if (document.getElementById('music/bensound-straight.ogg').muted == false) 
	{
    document.getElementById('music/bensound-straight.ogg').muted = true;
	}
	else 
	{
	    document.getElementById('music/bensound-straight.ogg').muted = false;
	}
	}

>>>>>>> 561bfab89bbbb1b10120323c2db8d5fc3fa421f9
