var appName = "Roobie";
var debugMode = true;

/* 
Load index content on browser refresh
*/
ready(function() {
    index();
});

/* 
Loads all content
*/
function index() {
    load("nav.html", "nav");
    load("home.html", "main");
    load("footer.html", "footer");
}

/* 
Prints a debug message if debug mode is active
*/
function debug(message) {
    var ts = new Date();
    if (debugMode) {
        console.log(ts.toISOString() + ' ' + appName + ' | ' + message);
    }
}

/* 
Executes a function when the document is ready
*/
function ready(fn) {
    debug("Executing document ready");
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/*
Load html to id.
*/
function load(fileName, id) {
    debug("Loading " + fileName + " into element with id " + id);
    var element = document.getElementById(id);
    $(element).empty();
    $(element).load(fileName);
}

/*
Add class to an element.
*/
function addClass(element, className) {
    debug("Adding class " + className + " to element " + element);
    element.classList.add(className);
}

/*
Removes a class from elements with specified tag name.
*/
function removeClassByTagName(tagName, className) {
    debug("Removing class " + className + " by tag name " + tagName);
    var elements = document.getElementsByTagName(tagName);

    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}

/*
Toggles hide or show element with specified id.
*/
function toggleById(id) {
    debug("Hiding element by id " + id);
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}

/*
Hides elements with specified id.
*/
function hideById(id) {
    debug("Hiding element by id " + id);
    var element = document.getElementById(id);
    element.style.display = "none";
}

/*
Show elements with specified id.
*/
function showById(id) {
    debug("Showing element by id " + id);
    var element = document.getElementById(id);
    element.style.display = "flex";
}

/*
Toggles hide or show elements with specified tag name.
*/
function toggleByTagName(tagName) {
    debug("Toggle elements by tag name " + tagName);
    var elements = document.getElementsByTagName(tagName);

    for (i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none") {
            elements[i].style.display = "flex";
        } else {
            elements[i].style.display = "none";
        }
    }
}


/*
Hides elements with specified tag name.
*/
function hideByTagName(tagName) {
    debug("Hiding elements by tag name " + tagName);
    var elements = document.getElementsByTagName(tagName);

    for (i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

/*
Show elements with specified tag name.
*/
function showByTagName(tagName) {
    debug("Showing elements by tag name " + tagName);
    var elements = document.getElementsByTagName(tagName);

    for (i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
    }
}

/** 
 * Rotate element by x amount of degrees.  If the previous rotation is positive,
 * it will reset the rotation to 0.
 */
function rotateById(degrees, id) {
    var element = document.getElementById(id);
    var transform = element.style.transform;
    debug('Previous rotation before cut ' + transform);

    var previous = transform.match(/-?[\d\.]+/);
    debug('Previous rotation after cut ' + previous);

    if (previous > 0) {
        debug("Rotating " + 0 + " degrees by id " + id);
        element.style.transform = "rotate(" + 0 + "deg)";
    } else {
        debug("Rotating " + degrees + " degrees by id " + id);
        element.style.transform = "rotate(" + degrees + "deg)";
    }

}