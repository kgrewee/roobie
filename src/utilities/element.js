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