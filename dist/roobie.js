class Animation {
    /**
     * Triggers an animation on an element.
     * 
     * @param {HTMLElement} element Element to animate
     * @param {string} className Class name of animation
     */
    static animationByElement(element, className) {
        console.log("Animation [class=" + className + "] -> [element=" + element + "]");
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
    static animationById(id, className) {
        console.log("Animation [class=" + className + "] -> [id=" + id + "]");
        let element = document.getElementById(id);
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
    }

    /**
     * Triggers an animation on an element by class.
     * 
     * @param {string} className CSS class to select
     * @param {string} animationClass Class name of animation
     */
    static animationByClass(className, animationClass) {
        console.log("Animation [class=" + animationClass + "] -> [class=" + className + "]");
        let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let classList = element.classList;
            // Remove any current animation classes
            for (let c of classList) {
                if (c.startsWith("_")) {
                    element.classList.remove(c);
                }
            }
            element.classList.remove(animationClass);
            void element.offsetWidth;
            element.classList.add(animationClass);
        }
    }
}ready(() => {
    Accordion.check();
});
class Accordion {
    static check() {
        let accordionHeaders = document.getElementsByClassName("accordion-header");
        console.log("Found " + accordionHeaders.length + " accordion headers");
        for (let header of accordionHeaders) {
            header.removeEventListener("click", Accordion.toggleNextSibling);
            header.addEventListener("click", Accordion.toggleNextSibling)
        }
    }

    static toggleNextSibling() {
        this.classList.toggle("accordion-active");

        /* Toggle panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            console.log("Accordion panel toggle [display=none]");
        } else {
            panel.style.display = "block";
            console.log("Accordion panel toggle [display=block]");
        }
    }
}ready(() => {
    Carousel.check();
});
class Carousel {
    static check() {
        let carousels = document.getElementsByClassName("carousel");
        for (let carousel of carousels) {
            let index = carousel.getAttribute("index");
            if (index == "" || index == null) {
                index = 0;
                carousel.setAttribute("index", "0");
            }
            Carousel.showSlide(carousel.getAttribute("id"), index);
        }

        // Previous button click event
        let previousButtons = document.getElementsByClassName("carousel-previous");
        for (let btn of previousButtons) {
            btn.removeEventListener("click", Carousel.showPrevious);
            btn.addEventListener("click", Carousel.showPrevious);
        }

        // Next button click event
        let nextButtons = document.getElementsByClassName("carousel-next");
        for (let btn of nextButtons) {
            btn.removeEventListener("click", Carousel.showNext);
            btn.addEventListener("click", Carousel.showNext);
        }

        // Indicator click event
        let indicatorContainers = document.getElementsByClassName("carousel-indicators");
        for (let container of indicatorContainers) {
            for (let indicator of container.children) {
                indicator.removeEventListener("click", Carousel.showIndicator);
                indicator.addEventListener("click", Carousel.showIndicator);
            }
        }
    }
    static showPrevious() {
        Carousel.showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") - 1);
    }

    static showNext() {
        Carousel.showSlide(this.closest(".carousel").getAttribute("id"), +this.closest(".carousel").getAttribute("index") + 1);
    }

    static showIndicator() {
        Carousel.showSlide(this.closest(".carousel").getAttribute("id"), +this.getAttribute("index"));
    }

    /**
     * Show carousel slide by index.
     * 
     * @param {string} id Id of carousel element
     * @param {number} index Index of slide to show
     */
    static showSlide(id, index) {
        console.log("Show slide [index=" + index + "] => [id=" + id + "]");
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
                indicators[i].classList.remove("carousel-active");
            }

            // Highlight active indicator
            if (indicators[index]) {
                indicators[index].classList.add("carousel-active");
            }
        }

        // Update index attribute
        element.setAttribute("index", index);
    }
}ready(() => {
    Navbar.check();
});
class Navbar {
    /**
     * Checks menu media queries.
     */
    static check() {
        // Media Queries
        const MEDIA_EXPAND_1 = window.matchMedia('(min-width: 600px)');
        const MEDIA_COLLAPSE_1 = window.matchMedia('(max-width: 600px)');
        const MEDIA_EXPAND_2 = window.matchMedia('(min-width: 1000px)');
        const MEDIA_COLLAPSE_2 = window.matchMedia('(max-width: 1000px)');
        const MEDIA_EXPAND_3 = window.matchMedia('(min-width: 1200px)');
        const MEDIA_COLLAPSE_3 = window.matchMedia('(max-width: 1200px)');
        const MEDIA_EXPAND_4 = window.matchMedia('(min-width: 1400px)');
        const MEDIA_COLLAPSE_4 = window.matchMedia('(max-width: 1400px)');

        MEDIA_EXPAND_1.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-s'));
        MEDIA_COLLAPSE_1.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-s'));
        MEDIA_EXPAND_2.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu'));
        MEDIA_COLLAPSE_2.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu'));
        MEDIA_EXPAND_2.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-m'));
        MEDIA_COLLAPSE_2.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-m'));
        MEDIA_EXPAND_3.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-l'));
        MEDIA_COLLAPSE_3.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-l'));
        MEDIA_EXPAND_4.removeEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-xl'));
        MEDIA_COLLAPSE_4.removeEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-xl'));

        MEDIA_EXPAND_1.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-s'));
        MEDIA_COLLAPSE_1.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-s'));
        MEDIA_EXPAND_2.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu'));
        MEDIA_COLLAPSE_2.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu'));
        MEDIA_EXPAND_2.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-m'));
        MEDIA_COLLAPSE_2.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-m'));
        MEDIA_EXPAND_3.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-l'));
        MEDIA_COLLAPSE_3.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-l'));
        MEDIA_EXPAND_4.addEventListener("change", (event) => Navbar.expand(event, 'rsp-menu-xl'));
        MEDIA_COLLAPSE_4.addEventListener("change", (event) => Navbar.collapse(event, 'rsp-menu-xl'));
        console.log("Checking menu media queries");
        Navbar.collapse(MEDIA_COLLAPSE_1, 'rsp-menu-s');
        Navbar.expand(MEDIA_EXPAND_1, 'rsp-menu-s');
        Navbar.collapse(MEDIA_COLLAPSE_2, 'rsp-menu');
        Navbar.expand(MEDIA_EXPAND_2, 'rsp-menu');
        Navbar.collapse(MEDIA_COLLAPSE_2, 'rsp-menu-m');
        Navbar.expand(MEDIA_EXPAND_2, 'rsp-menu-m');
        Navbar.collapse(MEDIA_COLLAPSE_3, 'rsp-menu-l');
        Navbar.expand(MEDIA_EXPAND_3, 'rsp-menu-l');
        Navbar.collapse(MEDIA_COLLAPSE_4, 'rsp-menu-xl');
        Navbar.expand(MEDIA_EXPAND_4, 'rsp-menu-xl');
    }

    /**
     * Expands a menu by CSS class name if an event is found to be true.
     * 
     * @param {MediaQueryListEvent} event Event to check for
     * @param {string} className Class name of menu to expand
     */
    static expand(event, className) {
        if (event.matches) {
            console.log('Expand Menu [class=' + className + "]");
            var menus = document.getElementsByClassName(className);
            for (let i = 0; i < menus.length; i++) {
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
    static collapse(event, className) {
        if (event.matches) {
            console.log('Collapse Menu [class=' + className + "]");
            var menus = document.getElementsByClassName(className);
            for (let i = 0; i < menus.length; i++) {
                let items = menus[i].innerHTML;
                if (!menus[i].classList.contains('rsp-cnt')) {
                    menus[i].innerHTML = '<div class="drp"> <button type="button" class="drp-btn btn btn-primary"><i class="icon icon-menu"></i></button><div class = "drp-cnt pad2 br rsp-cnt">' + items + '</div> </div>';
                }
            }
        }
    }
}/* If the user clicks anywhere outside the select box,
then close all select boxes: */
ready(() => {
    Select.check();
    document.addEventListener("click", Select.closeAllSelect());
});
class Select {
    static check() {
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
                Select.closeAllSelect(this);
                this.nextSibling.classList.toggle("hide");
                this.classList.toggle("select-active");
            });
        }
    }


    /* A function that will close all select boxes in the document,
    except the current select box: */
    static closeAllSelect(elmnt) {
        var elements, y, i, xl, yl, arrNo = [];
        elements = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = elements.length;
        yl = y.length;
        for (let i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-active");
            }
        }
        for (let i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                elements[i].classList.add("hide");
            }
        }
    }
}ready(() => {
    Tooltip.check();
});
class Tooltip {
    static check() {
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
    }
}class Attribute {
    /**
     * Add atrribute to an element by id.
     * 
     * @param {string} id Id to select
     * @param {string} attribute Attribute to add
     * @param {string} value Value of attribute
     */
    static addById(id, attribute, value) {
        console.log("Add Attribute [" + attribute + '=' + value + "] -> [Id] " + id);
        document.getElementById(id).setAttribute(attribute, value);
    }

    /**
     * Add attribute to an element.
     * 
     * @param {HTMLElement} element HTML element to select
     * @param {string} attribute Attribute to add
     * @param {string} value Value of attribute
     */
    static addByElement(element, attribute, value) {
        console.log("Add Attribute [" + attribute + '=' + value + "] -> [Element] " + element);
        element.setAttribute(attribute, value);
    }

    /**
     * Add atrribute by tag name.
     * 
     * @param {string} tagName Tag name to select
     * @param {string} attribute Attribute to add
     * @param {string} value Value of attribute
     */
    static addByTag(tagName, attribute, value) {
        console.log("Add Attribute [" + attribute + '=' + value + "] -> [Tag] " + tagName);
        var elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute(attribute, value);
        }
    }
}class Class {
    /**
     * Add class to an element by id.
     * 
     * @param {string} id Id to select
     * @param {string} className CSS class to add
     */
    static addById(id, className, condition = true) {
        if (condition) {
            console.log("Add [Class] " + className + " -> [Id] " + id);
            document.getElementById(id).classList.add(className);
        }
    }

    /**
     * Add class to an element.
     * 
     * @param {HTMLElement} element HTML element to select
     * @param {string} className CSS class to add
     */
    static addByElement(element, className, condition = true) {
        if (condition) {
            console.log("Add [Class] " + className + " -> [Element] " + element);
            element.classList.add(className);
        }
    }

    /**
     * Remove CSS class by tag name.
     * 
     * @param {string} tagName Tag name to select
     * @param {string} className CSS class to remove
     */
    static removeByTag(tagName, className, condition = true) {
        if (condition) {
            console.log("Remove [Class] " + className + " -> [Tag] " + tagName);
            var elements = document.getElementsByTagName(tagName);
            for (let i = 0; i < elements.length; i++) {
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
    static removeById(id, className) {
        console.log("Remove [Class] " + className + " -> [Id] " + id);
        document.getElementById(id).classList.remove(className);
    }

    /**
     * Remove CSS class from an element by class name.
     * 
     * @param {string} className CSS class to select
     * @param {string} removeName CSS class to remove
     */
    static removeByClass(className, removeName) {
        console.log("Remove [Class] " + removeName + " -> [Class] " + className);
        var elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(removeName);
        }
    }
}class Element {
    /**
     * Append HTML Element as child to all elements a specific tag name.
     * 
     * @param {string} tagName Tag of element to create
     * @param {string} appendTagName Tag to append new element
     * @param {string} innerHTML Inner HTML to add to new element
     */
    static createElementByTag(tagName, appendTagName, innerHTML) {
        console.log("Create element");
        let element = document.createElement(tagName);
        element.innerHTML = innerHTML;
        let tags = document.getElementsByTagName(appendTagName);
        for (let tag of tags) {
            tag.appendChild(element);
        }
    }

    /**
     * Append HTML Element as child to a specific element.
     * 
     * @param {string} tagName Tag of element to create
     * @param {HTMLElement} element Element to append new element as child
     * @param {string} innerHTML Inner HTML to add to new element
     */
    static createElementByElement(tagName, element, innerHTML) {
        console.log("Create element by element");
        let newElement = document.createElement(tagName);
        newElement.innerHTML = innerHTML;
        element.appendChild(newElement);
    }
}/**
 * Execute on DOMContentLoaded, aka document ready.
 * 
 * @param {*} fn to execute
 */
function ready(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/**
 * Execute on changes to the DOM.
 * 
 * @param {*} fn  to execute
 */
function changes(fn) {
    // Options for the observer
    const config = { childList: true, subtree: true };

    // Create an observer
    const observer = new MutationObserver(fn);

    // Start observing the target node
    observer.observe(document, config);

    // Stop observing
    //observer.disconnect();

    // Legacy
    //document.addEventListener("DOMSubtreeModified", fn);
}class Load {
    /**
     * Load file content into an element by id.
     * 
     * @param {string} id Id to select
     * @param {string} file Path to file to load
     */
    static loadById(id, file) {
        console.log("Load [File] " + file + " -> [Id] " + id);
        var element = document.getElementById(id);
        var request = new XMLHttpRequest();
        request.open('GET', file, true);
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                var resp = request.responseText;
                element.innerHTML = resp;
            }
        };
        request.send();
    }
}class Logging {
    /**
     * Print debug message to console if Debug Mode is ON.
     * 
     * @param {string} message Text to print alonside custom date and app details
     */
    static debug(message) {
        const appName = "Roobie";
        const debugMode = true;
        if (debugMode) {
            console.log(appName + ' ' + new Date().toISOString() + '   ' + message);
        }
    }
}class Rotate {
    /**
     * Rotate element by x amount of degrees.  
     * 
     * @param {string} id Id to select
     * @param {number} degrees Number of degress to rotate
     * @param {boolean} reset Reset the rotation if current rotation > 0.  Useful for toggles.
     */
    static rotateById(id, degrees, reset) {
        var element = document.getElementById(id);
        var transform = element.style.transform;
        console.log('Before cut ' + transform);
        var previousDegrees = transform.match(/-?[\d\.]+/);
        console.log('After cut ' + previousDegrees);

        if (previousDegrees > 0 && reset) {
            console.log("Reset rotation [Id] " + id);
            element.style.transform = "rotate(" + 0 + "deg)";
        } else {
            console.log("Rotate [Degrees] " + degrees + " -> [Id] " + id);
            element.style.transform = "rotate(" + degrees + "deg)";
        }
    }

}class Style {
    /**
     * Set a CSS property by tag name.
     * 
     * @param {string} tagName Tag name to select
     * @param {string} property Property to set
     * @param {string} value Value of property
     */
    static styleByTag(tagName, property, value) {
        console.log("Set [Style] " + property + " = " + value + " -> [Tag] " + tagName);
        var elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.setProperty(property, value);
        }
    }
}ready(() => {
    Theme.defaultTheme();
});
class Theme {
    static defaultTheme() {
        const theme = localStorage.getItem('theme');
        if (theme != null) {
            Theme.switchTheme(theme);
        } else {
            Theme.switchTheme('light');
        }

    }

    /**
     * Switch the CSS theme.  Updates local storage and body tag with theme attribute.
     * 
     * @param {string} themeName Name of the theme
     */
    static switchTheme(themeName) {
        console.log("Switch theme [theme=" + themeName + "]");
        localStorage.setItem('theme', themeName);
        document.body.setAttribute('theme', themeName);
    }
}class Toggle {
    /**
     * Toggle the display of an element based on the current state.
     * 
     * @param {string} id Id to select
     */
    static toggleById(id) {
        console.log("Toggle [Id] " + id);
        var element = document.getElementById(id);
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
    static toggleByTag(tagName) {
        console.log("Toggle [Tag] " + tagName);
        var elements = document.getElementsByTagName(tagName);
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].style.display === "none") {
                elements[i].style.display = "flex";
            } else {
                elements[i].style.display = "none";
            }
        }
    }
}