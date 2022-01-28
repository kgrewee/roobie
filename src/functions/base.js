const appName = "Roobie";
const debugMode = true;

/**
 * Print debug message to console if Debug Mode is ON.
 * 
 * @param {string} message Text to print alonside custom date and app details
 */
function debug(message) {
    var ts = new Date();
    if (debugMode) {
        console.log(ts.toISOString() + ' ' + appName + ' | ' + message);
    }
}

/**
 * Execute function on DOMContentLoaded, aka document ready.
 * 
 * @param {*} fn function to execute
 */
function ready(fn) {
    debug("Document ready");
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}