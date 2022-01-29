/**
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
}