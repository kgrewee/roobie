/**
 * Execute function on DOMContentLoaded, aka document ready.
 * 
 * @param {*} fn Function to execute
 */
function ready(fn) {
    debug("Hook [ready]");
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/**
 * Execute function on changes to the DOM.
 * 
 * @param {*} fn  Function to execute
 */
function changes(fn) {
    debug("Hook [changes]");
    // Options for the observer
    const config = { childList: true, subtree: true };

    // Create an observer
    const observer = new MutationObserver(fn);

    // Start observing the target node
    observer.observe(document, config);

    // Stop observing
    //observer.disconnect();

    // Legacy
    //document.addEventListener("DOMSubtreeModified", fn);
}