class Animation {
    /**
     * Triggers an animation on an element.
     * 
     * @param {HTMLElement} element Element to animate
     * @param {string} className Class name of animation
     */
    static animationByElement(element, className) {
        console.log("Animation [class=" + className + "] -> [element=" + element + "]");
        element.classList.remove(className);
        void element.offsetWidth;
        element.classList.add(className);
    }

    /**
     * Triggers an animation on an element by id.
     * 
     * @param {string} id Id of element to animate
     * @param {string} className Class name of animation
     */
    static animationById(id, className) {
        console.log("Animation [class=" + className + "] -> [id=" + id + "]");
        let element = document.getElementById(id);
        let classList = element.classList;
        // Remove any current animation classes
        for (let c of classList) {
            if (c.startsWith("_")) {
                element.classList.remove(c);
            }
        }
        element.classList.remove(className);
        void element.offsetWidth;
        element.classList.add(className);
    }

    /**
     * Triggers an animation on an element by class.
     * 
     * @param {string} className CSS class to select
     * @param {string} animationClass Class name of animation
     */
    static animationByClass(className, animationClass) {
        console.log("Animation [class=" + animationClass + "] -> [class=" + className + "]");
        let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let classList = element.classList;
            // Remove any current animation classes
            for (let c of classList) {
                if (c.startsWith("_")) {
                    element.classList.remove(c);
                }
            }
            element.classList.remove(animationClass);
            void element.offsetWidth;
            element.classList.add(animationClass);
        }
    }
}