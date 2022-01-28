/**
 * Add class to an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} className CSS class to add
 */
function addClassById(id, className, condition = true) {
    if (condition) {
        debug("Add [Class] " + className + " -> [Id]" + id);
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
        debug("Add [Class] " + className + " -> [Element]" + element);
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
}