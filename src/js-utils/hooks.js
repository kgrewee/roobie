/**
 * Execute function on DOMContentLoaded, aka document ready.
 * 
 * @param {*} fn function to execute
 */
function ready(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}