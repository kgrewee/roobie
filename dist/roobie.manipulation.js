class Attribute {
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