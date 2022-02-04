const appName = "Roobie";
const debugMode = true;

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