class Rotate {
    /**
     * Rotate element by x amount of degrees.  
     * 
     * @param {string} id Id to select
     * @param {number} degrees Number of degress to rotate
     * @param {boolean} reset Reset the rotation if current rotation > 0.  Useful for toggles.
     */
    static rotateById(id, degrees, reset) {
        var element = document.getElementById(id);
        var transform = element.style.transform;
        console.log('Before cut ' + transform);
        var previousDegrees = transform.match(/-?[\d\.]+/);
        console.log('After cut ' + previousDegrees);

        if (previousDegrees > 0 && reset) {
            console.log("Reset rotation [Id] " + id);
            element.style.transform = "rotate(" + 0 + "deg)";
        } else {
            console.log("Rotate [Degrees] " + degrees + " -> [Id] " + id);
            element.style.transform = "rotate(" + degrees + "deg)";
        }
    }

}