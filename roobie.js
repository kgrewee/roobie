$(document).ready(function() {
    index();
});

/* 
Loads index and navbar
*/
function index() {
    load("nav.html", "nav");
    load("home.html", "main");
}

/*
Loads html from a file into an element with provided id
*/
function load(filename, id) {
    console.log("Loading " + filename);
    $('#' + id).load(filename);
}

/*
Adds the active class to a clicked link
*/
function active(elem) {
    console.log("Setting active link");
    var links = document.getElementsByTagName("a");

    // Remove active classes
    for (i = 0; i < links.length; i++) {
        links[i].classList.remove('active')
    }

    elem.classList.add('active');
}