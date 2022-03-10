class Class {
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
}