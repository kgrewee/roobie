ready(() => {
    const theme = getLocalStorage('theme');
    if (theme != null) {
        switchTheme(theme);
    } else {
        debug("Defaulting theme -> light");
        switchTheme('light');
    }
})

/**
 * Switch the CSS theme.  Updates local storage and body tag.
 * 
 * @param {string} themeName Name of the theme
 */
function switchTheme(themeName) {
    debug("Switch theme -> " + themeName);
    setLocalStorage('theme', themeName);
    addAttributeByTag('body', 'theme', themeName);
}