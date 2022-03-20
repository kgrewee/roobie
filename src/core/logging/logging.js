class Logging {
    /**
     * Print debug message to console if Debug Mode is ON.
     * 
     * @param {string} message Text to print alonside custom date and app details
     */
    static debug(message) {
        const appName = "Roobie";
        const debugMode = true;
        if (debugMode) {
            console.log(appName + ' ' + new Date().toISOString() + '   ' + message);
        }
    }
}