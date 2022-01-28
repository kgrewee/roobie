ready(() => {
    const theme = getLocalStorage('theme');
    if (theme != null) {
        switchTheme(theme);
    } else {
        switchTheme('light');
    }
})

/**
 * Switch the CSS theme.  Updates local storage and body tag.
 * 
 * @param {string} themeName Name of the theme
 */
function switchTheme(themeName) {
    console.log("Switching theme to " + themeName);
    setLocalStorage('theme', themeName);
    addAttributeByTag('body', 'theme', themeName);
}