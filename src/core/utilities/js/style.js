class Style {
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
}