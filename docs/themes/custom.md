# Custom Themes
You can add more themes alongside the base light and dark, just copy `light.css` or `dark.css` as a starting point and change the CSS selector to reflect the name of your theme.  If your theme is in an external file, make sure to import the theme file.
```css
[theme="light"] {
    // Roobie light theme variables
}

[theme="dark"] {
    // Roobie dark theme variables
}

[theme="themeName"] {
    // Custom themeName variables
}

[theme="themeName2"] {
    // Custom themeName2 variables
}

//etc
```