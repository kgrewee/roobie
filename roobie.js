/**
 * Global variables.
 */
const appName = "Roobie";
const debugMode = true;

// Media Queries
const MEDIA_EXPAND_S = window.matchMedia('(max-width: 600px)');
const MEDIA_COLLAPSE_S = window.matchMedia('(min-width: 600px)');
const MEDIA_EXPAND_M = window.matchMedia('(max-width: 1000px)');
const MEDIA_COLLAPSE_M = window.matchMedia('(min-width: 1000px)');
const MEDIA_COLLAPSE_L = window.matchMedia('(max-width: 1200px)');
const MEDIA_EXPAND_L = window.matchMedia('(min-width: 1200px)');
const MEDIA_COLLAPSE_XL = window.matchMedia('(max-width: 1400px)');
const MEDIA_EXPAND_XL = window.matchMedia('(min-width: 1400px)');

ready(function() {
    MEDIA_EXPAND_S.addEventListener("change", collapseMenu);
    MEDIA_COLLAPSE_S.addEventListener("change", expandMenu);
    MEDIA_EXPAND_M.addEventListener("change", collapseMenu);
    MEDIA_COLLAPSE_M.addEventListener("change", expandMenu);
    MEDIA_COLLAPSE_L.addEventListener("change", collapseMenu);
    MEDIA_EXPAND_L.addEventListener("change", expandMenu);
    MEDIA_COLLAPSE_XL.addEventListener("change", collapseMenu);
    MEDIA_EXPAND_XL.addEventListener("change", expandMenu);
    MEDIA_EXPAND_S.menuClass = 'rsp-menu-s';
    MEDIA_COLLAPSE_S.menuClass = 'rsp-menu-s';
    MEDIA_EXPAND_M.menuClass = 'rsp-menu';
    MEDIA_COLLAPSE_M.menuClass = 'rsp-menu';
    MEDIA_EXPAND_L.menuClass = 'rsp-menu-l';
    MEDIA_COLLAPSE_L.menuClass = 'rsp-menu-l';
    MEDIA_EXPAND_XL.menuClass = 'rsp-menu-xl';
    MEDIA_COLLAPSE_XL.menuClass = 'rsp-menu-xl';
    checkMedia();
})

/**
 * Check all media queries.
 */
function checkMedia() {
    debug("Checking media queries");
    collapseMenu(MEDIA_EXPAND_S);
    expandMenu(MEDIA_COLLAPSE_S);
    collapseMenu(MEDIA_EXPAND_M);
    expandMenu(MEDIA_COLLAPSE_M);
    collapseMenu(MEDIA_EXPAND_M);
    expandMenu(MEDIA_COLLAPSE_M);
    collapseMenu(MEDIA_COLLAPSE_L);
    expandMenu(MEDIA_EXPAND_L);
    collapseMenu(MEDIA_COLLAPSE_XL);
    expandMenu(MEDIA_EXPAND_XL);
}

/**
 * Collapse responsive menus.
 * 
 * @param {Event} event Change event
 */
function collapseMenu(event) {
    debug('Collapse Menu Event');
    if (event.matches) {
        debug('Collapse Menu [Class] ' + event.currentTarget.menuClass);
        var menus = getClass(event.currentTarget.menuClass);
        for (i = 0; i < menus.length; i++) {
            items = menus[i].innerHTML;
            if (!$(menus[i]).find(".rsp-cnt").hasClass("rsp-cnt")) {
                menus[i].innerHTML = '<div class="drp"> <button class="drp-btn"> <img width="25" height="25" src="icons/fontawesome-menu-black.svg"> </button> <div class = "drp-cnt pad br rsp-cnt">' + items + '</div> </div>';
            }
        }
    }
}

/**
 * Expand responsive menus.
 * 
 * @param {Event} event Change event
 */
function expandMenu(event) {
    debug('Expand Menu Event');
    if (event.matches) {
        debug('Expand Menu [Class] ' + event.currentTarget.menuClass);
        var menus = getClass(event.currentTarget.menuClass);
        for (i = 0; i < menus.length; i++) {
            previousHtml = menus[i].innerHTML;
            if ($(menus[i]).find(".rsp-cnt").hasClass("rsp-cnt")) {
                menus[i].innerHTML = $(menus[i]).find(".rsp-cnt").html();
            }
        }
    }
}

/**
 * Get HTML element with id.
 * 
 * @param {string} id id to select
 * @returns HTMLElement
 */
function getId(id) {
    return document.getElementById(id);
}

/**
 * Get HTML elements with CSS class.
 * 
 * @param {string} className CSS class to select
 * @returns List of HTMLElement
 */
function getClass(className) {
    return document.getElementsByClassName(className);
}

/**
 * Get HTML elements with tag name.
 * 
 * @param {string} tagName Tag name to select
 * @returns List of HTMLElement
 */
function getTag(tagName) {
    return document.getElementsByTagName(tagName);
}

/**
 * Print debug message to console if Debug Mode is ON.
 * 
 * @param {string} message Text to print alonside custom date and app details
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
 * @param {*} fn Function to execute
 */
function ready(fn) {
    debug("Execute document ready");
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/**
 * Load file content into an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} file Path to file to load
 */
function loadById(id, file) {
    debug("Load [File] " + file + " -> [Id] " + id);
    var element = getId(id);
    $(element).load(file);
}

/**
 * Add class to an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} className CSS class to add
 */
function addClassById(id, className) {
    debug("Add [Class] " + className + " -> [Id]" + id);
    getId(id).classList.add(className);
}

/**
 * Add class to an element.
 * 
 * @param {HTMLElement} element HTML element to select
 * @param {string} className CSS class to add
 */
function addClassByElement(element, className) {
    debug("Add [Class] " + className + " -> [Element]" + element);
    element.classList.add(className);
}

/**
 * Remove CSS class by tag name.
 * 
 * @param {string} tagName Tag name to select
 * @param {string} className CSS class to remove
 */
function removeClassByTag(tagName, className) {
    debug("Remove [Class] " + className + " -> [Tag] " + tagName);
    var elements = getTag(tagName);
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}

/**
 * Remove CSS class from an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} className CSS class to remove
 */
function removeClassById(id, className) {
    debug("Remove [Class] " + className + " -> [Id] " + id);
    getId(id).classList.remove(className);
}

/**
 * Remove CSS class from an element by class name.
 * 
 * @param {string} className CSS class to select
 * @param {string} removeClassName CSS class to remove
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
 * @param {string} id Id to select
 */
function toggleById(id) {
    debug("Toggle [Id] " + id);
    var element = getId(id);
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}

/**
 * Toggle display of an element by tag name.
 * 
 * @param {string} tagName Tag name to select
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
 * Rotate element by x amount of degrees.  
 * 
 * @param {string} id Id to select
 * @param {number} degrees Number of degress to rotate
 * @param {boolean} reset Reset the rotation if current rotation > 0.  Useful for toggles.
 */
function rotateById(id, degrees, reset) {
    var element = getId(id);
    var transform = element.style.transform;
    debug('Before cut ' + transform);
    var previousDegrees = transform.match(/-?[\d\.]+/);
    debug('After cut ' + previousDegrees);

    if (previousDegrees > 0 && reset) {
        debug("Reset rotation [Id] id " + id);
        element.style.transform = "rotate(" + 0 + "deg)";
    } else {
        debug("Rotate [Id] " + id + " -> [Degrees] " + degrees);
        element.style.transform = "rotate(" + degrees + "deg)";
    }

}