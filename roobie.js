/**
 * Global variables.
 */
var appName = "Roobie";
var debugMode = true;

function getId(id) {
    return document.getElementById(id);
}

function getClass(className) {
    return document.getElementsByClassName(className);
}

function getTag(tagName) {
    return document.getElementsByTagName(tagName);
}
/**
 * Print debug message to console if Debug Mode is ON.
 * @param {string} message Text to print alonside custom date and app details configured in roobie.js.
 */
function debug(message) {
    var ts = new Date();
    if (debugMode) {
        console.log(ts.toISOString() + ' ' + appName + ' | ' + message);
    }
}

/**
 * Execute function on DOMContentLoaded, aka document ready.
 * 
 * @param {*} fn Function to execute upon document ready.
 */
function ready(fn) {
    debug("Executing document ready");
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/**
 * Load file content into an element by id.
 * 
 * @param {string} id Id of HTML element.
 * @param {string} file Path to file.
 */
function loadById(id, file) {
    debug("Load [File] " + file + " -> [Id] " + id);
    var element = getId(id);
    $(element).load(file);
}

/**
 * Add class to an element by id.
 * 
 * @param {string} id Id of HTML element
 * @param {string} className CSS class
 */
function addClassById(id, className) {
    debug("Add [Class] " + className + " -> [Id]" + id);
    getId(id).classList.add(className);
}

/**
 * Add class to an element.
 * 
 * @param {HTMLElement} element HTML element
 * @param {string} className CSS class
 */
function addClassByElement(element, className) {
    debug("Add [Class] " + className + " -> [Element]" + element);
    element.classList.add(className);
}

/**
 * Remove CSS class by tag.
 * 
 * @param {string} tagName HTML tag name
 * @param {string} className CSS class
 */
function removeClassByTag(tagName, className) {
    debug("Remove [Class] " + className + " -> [Tag] " + tagName);
    var elements = getTag(tagName);
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}

/**
Removes a class from element by id.
*/
function removeClassById(id, className) {
    debug("Remove [Class] " + className + " -> [Id] " + id);
    getId(id).classList.remove(className);
}

/**
Removes a class from elements by class name.
*/
function removeClassByClass(className, removeClassName) {
    debug("Remove [Class] " + removeClassName + " -> [Class] " + className);
    var elements = getClass(className);
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove(removeClassName);
    }
}

/**
 * Toggle the display of an element based on the current state.
 * 
 * @param {string} id Id of element.
 */
function toggleById(id) {
    debug("Toggle [Id]" + id);
    var element = getId(id);
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}

/**
 * Toggle display of an element by tagName name.
 * 
 * @param {string} tagName tagName name of elements.
 */
function toggleByTag(tagName) {
    debug("Toggle [Tag] " + tagName);
    var elements = getTag(tagName);
    for (i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none") {
            elements[i].style.display = "flex";
        } else {
            elements[i].style.display = "none";
        }
    }
}

/** 
 * Rotate element by x amount of degrees.  If the previous rotation is positive,
 * it will reset the rotation to 0.
 */
function rotateById(id, degrees) {
    var element = getId(id);
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