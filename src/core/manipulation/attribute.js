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
}