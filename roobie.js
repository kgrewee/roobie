$(document).ready(function() {
    loadHtml("nav.html", "nav");
    loadHtml("home.html", "main");
});

/*
Loads html from a file
*/
function loadHtml(filename, id) {
    console.log("Loading " + filename);
    $("#" + id).empty();
    $('#' + id).load(filename);
}