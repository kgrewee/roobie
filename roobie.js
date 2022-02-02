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
    let classList = element.classList;
    // Remove any current animation classes
    for (let c of classList) {
        if (c.startsWith("_")) {
            element.classList.remove(c);
        }
    }
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

ready(() => {
    let docs = document.getElementsByClassName("docs");
    debug("Found " + docs.length + " docs classes");
    for (let doc of docs) {
        let pre = document.createElement("xmp");
        pre.innerHTML = doc.innerHTML;
        doc.insertAdjacentElement("afterend", pre);
    }
});
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
        switchTheme(theme);
    } else {
        debug("Defaulting theme -> light");
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
}ready(() => {
    accordion();
});

function accordion() {
    let accordionHeaders = document.getElementsByClassName("accordion-header");
    debug("Found " + accordionHeaders.length + " accordion headers");
    for (let header of accordionHeaders) {
        header.addEventListener("click", function() {
            this.classList.toggle("active");

            /* Toggle panel */
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                debug("Accordion panel toggle [display=none]");
            } else {
                panel.style.display = "block";
                debug("Accordion panel toggle [display=block]");
            }
        });
    }
}ready(() => {
    let carousels = document.getElementsByClassName("carousel");
    for (let carousel of carousels) {
        let index = carousel.getAttribute("index");
        if (index == "" || index == null) {
            index = 0;
            carousel.setAttribute("index", "0");
        }
        showSlide(carousel.getAttribute("id"), index);
    }

    // Previous button click event
    let previousButtons = document.getElementsByClassName("carousel-previous");
    for (let btn of previousButtons) {
        btn.addEventListener("click", function(e) {
            showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") - 1);
        });
    }

    // Next button click event
    let nextButtons = document.getElementsByClassName("carousel-next");
    for (let btn of nextButtons) {
        btn.addEventListener("click", function(e) {
            showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") + 1);
        });
    }

    // Indicator click event
    let indicatorContainers = document.getElementsByClassName("carousel-indicators");
    for (let container of indicatorContainers) {
        for (let indicator of container.children) {
            indicator.addEventListener("click", function(e) {
                showSlide(this.closest(".carousel").getAttribute("id"), +this.getAttribute("index"));
            });
        }
    }
});

/**
 * Show carousel slide by index.
 * 
 * @param {string} id Id of carousel element
 * @param {number} index Index of slide to show
 */
function showSlide(id, index) {
    debug("Show slide [id=" + id + "] [index=" + index + "]");
    let element = document.getElementById(id);

    // Get carousel slides
    let slides = element.querySelectorAll(".carousel-slide");

    // Check if the index is out of bounds
    if (index > slides.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show slide index
    if (slides[index]) {
        slides[index].style.display = "block";
    }

    let indicators = element.querySelectorAll(".carousel-indicators")[0];
    if (indicators) {
        indicators = indicators.children;
        // Remove highlighted indicators
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove("active");
        }

        // Highlight active indicator
        if (indicators[index]) {
            indicators[index].classList.add("active");
        }
    }

    // Update index attribute
    element.setAttribute("index", index);
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
 * Checks menu media queries.
 */
function checkMenu() {
    debug("Checking menu media queries");
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
        debug('Expand Menu [class=' + className + "]");
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
            let content = menus[i].querySelector('.rsp-cnt');
            if (content) {
                if (content.classList.contains('rsp-cnt')) {
                    menus[i].innerHTML = content.innerHTML;
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
        debug('Collapse Menu [class=' + className + "]");
        var menus = getClass(className);
        for (i = 0; i < menus.length; i++) {
            items = menus[i].innerHTML;
            if (!menus[i].classList.contains('rsp-cnt')) {
                menus[i].innerHTML = '<div class="drp"> <button type="button" class="drp-btn btn btn-primary"><i class="icon icon-menu"></i></button><div class = "drp-cnt pad2 br rsp-cnt">' + items + '</div> </div>';
            }
        }
    }
}ready(() => {
    /* Look for any elements with the class "select": */
    let elements = document.getElementsByClassName("select");

    /* For each select component */
    for (let element of elements) {
        /* Get the default html select box */
        let selectBox = element.getElementsByTagName("select")[0];

        /* Create div to contain selected item */
        let selectedItem = document.createElement("div");
        selectedItem.setAttribute("class", "select-selected");
        selectedItem.innerHTML = selectBox.options[selectBox.selectedIndex].innerHTML;
        element.appendChild(selectedItem);

        /* Create div to contain select box options */
        let optionList = document.createElement("div");
        optionList.setAttribute("class", "select-items hide");
        element.appendChild(optionList);

        /* For each select box option, create a div */
        for (let option of selectBox.options) {
            let optionItem = document.createElement("div");
            optionItem.innerHTML = option.innerHTML;


            /* When an option is clicked, update the original select box,
            and the select-selected item */
            optionItem.addEventListener("click", function(e) {
                let i = 0;
                let selectBox = this.parentNode.parentNode.getElementsByTagName("select")[0];
                let selectedItem = this.parentNode.previousSibling;
                for (let option of selectBox.options) {
                    if (option.innerHTML == this.innerHTML) {
                        // Set the index and selected item
                        selectBox.selectedIndex = i;
                        selectedItem.innerHTML = this.innerHTML;

                        // Remove the previously selected item
                        let removeSelected = this.parentNode.getElementsByClassName("is-selected");
                        for (let item of removeSelected) {
                            item.removeAttribute("class");
                        }

                        // Updated the select item
                        this.setAttribute("class", "is-selected");
                        break;
                    }
                    i++;
                }
                selectedItem.click();
            });

            optionList.appendChild(optionItem);
        }

        element.appendChild(optionList);

        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        selectedItem.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("hide");
            this.classList.toggle("select-active");
        });
    }

})

/* A function that will close all select boxes in the document,
except the current select box: */
function closeAllSelect(elmnt) {
    var elements, y, i, xl, yl, arrNo = [];
    elements = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = elements.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            elements[i].classList.add("hide");
        }
    }
}


/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);ready(() => {
    // Get all elements with tooltip attributes
    let tooltips = document.querySelectorAll('[tooltip]');
    for (let tooltip of tooltips) {
        // Required to show tooltip correctly
        tooltip.style.position = 'relative';
        tooltip.style.display = 'inline-block';

        // Create tooltip text element
        let text = document.createElement("span");
        text.innerHTML = tooltip.getAttribute("tooltip");
        text.classList.add("tooltip-text");

        // Determine where to show tooltip, default to bottom
        let side = tooltip.getAttribute('side');
        switch (side) {
            case 'left':
                text.classList.add("tooltip-left");
                break;
            case 'right':
                text.classList.add("tooltip-right");
                break;
            case 'top':
                text.classList.add("tooltip-top");
                break;
            case 'bottom':
            default:
                text.classList.add("tooltip-bottom");
        }

        // Add tooltip text as a child of tooltip element
        tooltip.appendChild(text);

        // Show tooltip on mouseover
        tooltip.addEventListener("mouseover", function(e) {
            let tooltipText = this.querySelectorAll(".tooltip-text");
            tooltipText[0].style.animationName = 'fade';
            tooltipText[0].style.animationDuration = '0.5s';
            tooltipText[0].style.visibility = 'visible';
        });

        // Remove tooltip on mouseout
        tooltip.addEventListener("mouseout", function(e) {
            let tooltipText = this.querySelectorAll(".tooltip-text");
            tooltipText[0].style.visibility = 'hidden';
            tooltipText[0].style.animationName = '';
            tooltipText[0].style.animationDuration = '';
        });
    }
})