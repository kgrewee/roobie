ready(() => {
    Theme.defaultTheme();
});
class Theme {
    static defaultTheme() {
        const theme = localStorage.getItem('theme');
        if (theme != null) {
            Theme.switchTheme(theme);
        } else {
            Theme.switchTheme('light');
        }

    }

    /**
     * Switch the CSS theme.  Updates local storage and body tag with theme attribute.
     * 
     * @param {string} themeName Name of the theme
     */
    static switchTheme(themeName) {
        console.log("Switch theme [theme=" + themeName + "]");
        localStorage.setItem('theme', themeName);
        document.body.setAttribute('theme', themeName);
    }
}