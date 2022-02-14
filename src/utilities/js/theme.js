/* On document ready get the theme from local storage, default to light if its null. */
ready(() => {
    const theme = localStorage.getItem('theme');
    if (theme != null) {
        switchTheme(theme);
    } else {
        switchTheme('light');
    }
})

/**
 * Switch the CSS theme.  Updates local storage and body tag with theme attribute.
 * 
 * @param {string} themeName Name of the theme
 */
function switchTheme(themeName) {
    debug("Switch theme [theme=" + themeName + "]");
    localStorage.setItem('theme', themeName);
    document.body.setAttribute('theme', themeName);
}