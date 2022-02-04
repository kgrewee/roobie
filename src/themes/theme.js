/* On document ready get the theme from local storage, default if its null. */
ready(() => {
    const theme = localStorage.getItem('theme');
    if (theme != null) {
        switchTheme(theme);
    } else {
        console.log("Defaulting to light theme");
        switchTheme('light');
    }
})

/**
 * Switch the CSS theme.  Updates local storage and body tag with theme attribute.
 * 
 * @param {string} themeName Name of the theme
 */
function switchTheme(themeName) {
    console.log("Switching to " + themeName + " theme");
    localStorage.setItem('theme', themeName);
    document.body.setAttribute('theme', themeName);
}