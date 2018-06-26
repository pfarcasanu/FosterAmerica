function bodyClicked(e) {
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ=e.target;
    } else if (e.srcElement) {
        targ=e.srcElement;
    }
    var tname;
    tname = targ.tagName;
    alert("You clicked on a " + tname + " element.");
}