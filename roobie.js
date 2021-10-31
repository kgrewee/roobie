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
Executes a function when the document is ready
*/
function ready(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/*
Load html to id.
*/
function load(filename, id) {
    console.log("Loading " + filename + " into element with id " + id);
    var element = document.getElementById(id);
    $(element).empty();
    $(element).load(filename);
}

/*
Add class to an element.
*/
function addClass(element, className) {
    console.log("Adding class " + className + " to element " + element);
    element.classList.add(className);
}

/*
Removes a class from elements with specified tag name.
*/
function removeClassByTagName(tagName, className) {
    console.log("Removing class " + className + " by tag name " + tagName);
    var elements = document.getElementsByTagName(tagName);

    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}