/**
 * Triggers an animation on an element.
 * 
 * @param {HTMLElement} element Element to animate
 * @param {string} className Class name of animation
 */
function animationByElement(element, className) {
    debug("[Animation] " + className + " -> [Element] " + element);
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
}

/**
 * Triggers an animation on an element by id.
 * 
 * @param {string} id Id of element to animate
 * @param {string} className Class name of animation
 */
function animationById(id, className) {
    debug("[Animation] " + className + " -> [Id] " + id);
    let element = getId(id);
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
}/**
 * Add atrribute to an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} attribute Attribute to add
 * @param {string} value Value of attribute
 */
function addAttributeById(id, attribute, value) {
    debug("Add [Attribute] " + attribute + '=' + value + " -> [Id] " + id);
    getId(id).setAttribute(attribute, value);
}

/**
 * Add attribute to an element.
 * 
 * @param {HTMLElement} element HTML element to select
 * @param {string} attribute Attribute to add
 * @param {string} value Value of attribute
 */
function addAttributeByElement(element, attribute, value) {
    debug("Add [Attribute] " + attribute + '=' + value + " -> [Element] " + element);
    element.setAttribute(attribute, value);
}

/**
 * Add atrribute by tag name.
 * 
 * @param {string} tagName Tag name to select
 * @param {string} attribute Attribute to add
 * @param {string} value Value of attribute
 */
function addAttributeByTag(tagName, attribute, value) {
    debug("Add [Attribute] " + attribute + '=' + value + " -> [Tag] " + tagName);
    var elements = getTag(tagName);
    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute(attribute, value);
    }
}const appName = "Roobie";
const debugMode = true;

/**
 * Print debug message to console if Debug Mode is ON.
 * 
 * @param {string} message Text to print alonside custom date and app details
 */
function debug(message) {
    if (debugMode) {
        console.log(appName + ' ' + new Date().toISOString() + '   ' + message);
    }
}

/**
 * Execute function on DOMContentLoaded, aka document ready.
 * 
 * @param {*} fn function to execute
 */
function ready(fn) {
    debug("Document ready");
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}/**
 * Add class to an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} className CSS class to add
 */
function addClassById(id, className, condition = true) {
    if (condition) {
        debug("Add [Class] " + className + " -> [Id] " + id);
        getId(id).classList.add(className);
    }
}

/**
 * Add class to an element.
 * 
 * @param {HTMLElement} element HTML element to select
 * @param {string} className CSS class to add
 */
function addClassByElement(element, className, condition = true) {
    if (condition) {
        debug("Add [Class] " + className + " -> [Element] " + element);
        element.classList.add(className);
    }
}

/**
 * Remove CSS class by tag name.
 * 
 * @param {string} tagName Tag name to select
 * @param {string} className CSS class to remove
 */
function removeClassByTag(tagName, className, condition = true) {
    if (condition) {
        debug("Remove [Class] " + className + " -> [Tag] " + tagName);
        var elements = getTag(tagName);
        for (i = 0; i < elements.length; i++) {
            elements[i].classList.remove(className);
        }
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
}/**
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
}/**
 * Load file content into an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} file Path to file to load
 */
function loadById(id, file) {
    debug("Load [File] " + file + " -> [Id] " + id);
    var element = getId(id);
    var request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            element.innerHTML = resp;
        }
    };
    request.send();
}// Media Queries
const MEDIAEXPANDS = window.matchMedia('(min-width: 600px)');
const MEDIACOLLAPSES = window.matchMedia('(max-width: 600px)');
const MEDIAEXPANDM = window.matchMedia('(min-width: 1000px)');
const MEDIACOLLAPSEM = window.matchMedia('(max-width: 1000px)');
const MEDIAEXPANDL = window.matchMedia('(min-width: 1200px)');
const MEDIACOLLAPSEL = window.matchMedia('(max-width: 1200px)');
const MEDIAEXPANDXL = window.matchMedia('(min-width: 1400px)');
const MEDIACOLLAPSEXL = window.matchMedia('(max-width: 1400px)');

ready(() => {
    MEDIAEXPANDS.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-s'));
    MEDIACOLLAPSES.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-s'));
    MEDIAEXPANDM.addEventListener("change", (event) => expandMenu(event, 'rsp-menu'));
    MEDIACOLLAPSEM.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu'));
    MEDIAEXPANDM.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-m'));
    MEDIACOLLAPSEM.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-m'));
    MEDIAEXPANDL.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-l'));
    MEDIACOLLAPSEL.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-l'));
    MEDIAEXPANDXL.addEventListener("change", (event) => expandMenu(event, 'rsp-menu-xl'));
    MEDIACOLLAPSEXL.addEventListener("change", (event) => collapseMenu(event, 'rsp-menu-xl'));
    checkMenu();
})


/**
 * Checks menu for media queries.
 */
function checkMenu() {
    debug("Checking media queries");
    collapseMenu(MEDIACOLLAPSES, 'rsp-menu-s');
    expandMenu(MEDIAEXPANDS, 'rsp-menu-s');
    collapseMenu(MEDIACOLLAPSEM, 'rsp-menu');
    expandMenu(MEDIAEXPANDM, 'rsp-menu');
    collapseMenu(MEDIACOLLAPSEM, 'rsp-menu-m');
    expandMenu(MEDIAEXPANDM, 'rsp-menu-m');
    collapseMenu(MEDIACOLLAPSEL, 'rsp-menu-l');
    expandMenu(MEDIAEXPANDL, 'rsp-menu-l');
    collapseMenu(MEDIACOLLAPSEXL, 'rsp-menu-xl');
    expandMenu(MEDIAEXPANDXL, 'rsp-menu-xl');
}

/**
 * Expands a menu by CSS class name if an event is found to be true.
 * 
 * @param {MediaQueryListEvent} event Event to check for
 * @param {string} className Class name of menu to expand
 */
function expandMenu(event, className) {
    if (event.matches) {
        debug('Expand Menu [Class] ' + className);
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
            let cnt = menus[i].querySelector('.rsp-cnt');
            if (cnt) {
                if (cnt.classList.contains('rsp-cnt')) {
                    menus[i].innerHTML = cnt.innerHTML;
                }
            }
        }
    }
}

/**
 * Collapses a menu by CSS class name if an event is found to be true.
 * 
 * @param {MediaQueryListEvent} event Event to check for
 * @param {string} className Class name of menu to collapse
 */
function collapseMenu(event, className) {
    if (event.matches) {
        debug('Collapse Menu [Class] ' + className);
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
            items = menus[i].innerHTML;
            if (!menus[i].classList.contains('rsp-cnt')) {
                menus[i].innerHTML = '<div class="drp"> <button class="drp-btn flx-row aln-center bdr0"> <img width="25" height="25" src="../icons/menu.svg"> </button> <div class = "drp-cnt pad2 br rsp-cnt">' + items + '</div> </div>';
            }
        }
    }
}/**
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
        debug("Reset rotation [Id] " + id);
        element.style.transform = "rotate(" + 0 + "deg)";
    } else {
        debug("Rotate [Degrees] " + degrees + " -> [Id] " + id);
        element.style.transform = "rotate(" + degrees + "deg)";
    }

}/**
 * Get a value from local storage.
 * 
 * @param {string} key Key to search for
 * @returns Value String from local storage
 */
function getLocalStorage(key) {
    debug("Local Storage [Get] " + key);
    return localStorage.getItem(key);
}

/**
 * Set a key value pair to local storage.
 * 
 * @param {string} key Unqiue identifier
 * @param {string} value Value to store
 */
function setLocalStorage(key, value) {
    debug("Local Storage [Set] " + key + "=" + value);
    localStorage.setItem(key, value);
}/**
 * Set a CSS property by tag name.
 * 
 * @param {string} tagName Tag name to select
 * @param {string} property Property to set
 * @param {string} value Value of property
 */
function setStyleByTag(tagName, property, value) {
    debug("Set [Style] " + property + " = " + value + " -> [Tag] " + tagName);
    var elements = getTag(tagName);
    for (i = 0; i < elements.length; i++) {
        elements[i].style.setProperty(property, value);
    }
}ready(() => {
    const theme = getLocalStorage('theme');
    if (theme != null) {
        debug("Setting theme from local storage -> " + theme);
        switchTheme(theme);
    } else {
        debug("Defaulting to light theme");
        switchTheme('light');
    }
})

/**
 * Switch the CSS theme.  Updates local storage and body tag.
 * 
 * @param {string} themeName Name of the theme
 */
function switchTheme(themeName) {
    debug("Switch theme -> " + themeName);
    setLocalStorage('theme', themeName);
    addAttributeByTag('body', 'theme', themeName);
}/**
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
}var slideIndex = 1;
ready(() => {
    showSlides(slideIndex);
})

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("car-slide");
    var dots = document.getElementsByClassName("car-dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

}