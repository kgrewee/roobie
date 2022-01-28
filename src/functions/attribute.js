/**
 * Add atrribute to an element by id.
 * 
 * @param {string} id Id to select
 * @param {string} attribute Attribute to add
 * @param {string} value Value of attribute
 */
function addAttributeById(id, attribute, value) {
    debug("Add [Attribute] " + attribute + '=' + value + " -> [Id]" + id);
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
    debug("Add [Attribute] " + attribute + '=' + value + " -> [Element]" + element);
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
    debug("Add [Attribute] " + attribute + '=' + value + " -> [Tag]" + tagName);
    var elements = getTag(tagName);
    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute(attribute, value);
    }
}