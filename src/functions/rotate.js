/**
 * Rotate element by x amount of degrees.  
 * 
 * @param {string} id Id to select
 * @param {number} degrees Number of degress to rotate
 * @param {boolean} reset Reset the rotation if current rotation > 0.  Useful for toggles.
 */
function rotateById(id, degrees, reset) {
    var element = getId(id);
    var transform = element.style.transform;
    debug('Before cut ' + transform);
    var previousDegrees = transform.match(/-?[\d\.]+/);
    debug('After cut ' + previousDegrees);

    if (previousDegrees > 0 && reset) {
        debug("Reset rotation [Id] id " + id);
        element.style.transform = "rotate(" + 0 + "deg)";
    } else {
        debug("Rotate [Id] " + id + " -> [Degrees] " + degrees);
        element.style.transform = "rotate(" + degrees + "deg)";
    }

}