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
 * Append HTML Element as child to all elements a specific tag name.
 * 
 * @param {string} tagName Tag of element to create
 * @param {string} appendTagName Tag to append new element
 * @param {string} innerHTML Inner HTML to add to new element
 */
function createElementByTag(tagName, appendTagName, innerHTML) {
    debug("Create element");
    let element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    let tags = getTag(appendTagName);
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
function createElementByElement(tagName, element, innerHTML) {
    debug("Create element by element");
    let newElement = document.createElement(tagName);
    newElement.innerHTML = innerHTML;
    element.appendChild(newElement);
}