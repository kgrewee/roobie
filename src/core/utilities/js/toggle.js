class Toggle {
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