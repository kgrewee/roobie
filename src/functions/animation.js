/**
 * Triggers an animation on an element.
 * 
 * @param {HTMLElement} element Element to animate
 * @param {string} className Class name of animation
 */
function animationByElement(element, className) {
    debug("[Animation] " + className + " -> [Element] " + element);
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
function animationById(id, className) {
    debug("[Animation] " + className + " -> [Id] " + id);
    let element = getId(id);
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
}