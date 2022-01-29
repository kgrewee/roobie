/**
 * Get a value from local storage.
 * 
 * @param {string} key Key to search for
 * @returns Value String from local storage
 */
function getLocalStorage(key) {
    debug("Local Storage [Get] " + key);
    return localStorage.getItem(key);
}

/**
 * Set a key value pair to local storage.
 * 
 * @param {string} key Unqiue identifier
 * @param {string} value Value to store
 */
function setLocalStorage(key, value) {
    debug("Local Storage [Set] " + key + "=" + value);
    localStorage.setItem(key, value);
}