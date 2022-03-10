class Element {
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
}