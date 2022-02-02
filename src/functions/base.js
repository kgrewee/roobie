const appName = "Roobie";
const debugMode = true;

ready(() => {
    let docs = document.getElementsByClassName("docs");
    debug("Found " + docs.length + " docs classes");
    for (let doc of docs) {
        let pre = document.createElement("xmp");
        pre.innerHTML = doc.innerHTML;
        doc.insertAdjacentElement("afterend", pre);
    }
});
/**
 * Print debug message to console if Debug Mode is ON.
 * 
 * @param {string} message Text to print alonside custom date and app details
 */
function debug(message) {
    if (debugMode) {
        console.log(appName + ' ' + new Date().toISOString() + '   ' + message);
    }
}

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