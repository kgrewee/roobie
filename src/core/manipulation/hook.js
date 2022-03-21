/**
 * Execute on DOMContentLoaded, aka document ready.
 * 
 * @param {*} fn to execute
 */
function ready(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/**
 * Execute on changes to the DOM.
 * 
 * @param {*} fn  to execute
 */
function changes(fn) {
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