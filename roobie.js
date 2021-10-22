$(document).ready(function() {
    load("nav.html", "nav");
    load("home.html", "main");
});

/*
Loads html from a file
*/
function load(filename, id) {
    console.log("Loading " + filename);
    $('#' + id).load(filename);
}