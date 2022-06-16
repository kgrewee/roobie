# Custom Themes
You can add more themes alongside the pre-built themes, just copy a theme CSS file as a starting point and change the CSS selector to reflect the name of your theme. You can add more themes inside one of the existing theme files. This can be useful for variations of a theme.  If your theme is in an external file, make sure to import it.

## Adding more themes
Example of adding 2 additional themes to `light.css`.
```css
[theme="light"] {
    // Roobie light theme variables
}

[theme="themeName"] {
    // Custom themeName variables
}

[theme="themeName2"] {
    // Custom themeName2 variables
}

//etc
```

## Custom theme example
The following code creates 2 themes, commander and base. Not all the theme variables are shown. It is ideal to separate themes into different files under a common folder.
```css
/* Ideally found in themes/commander.css */
[theme="commander"] {
    /*Base*/
    --primary: var(--blue2);
    --secondary: var(--bg4);
    /*Status*/
    --success: rgba(81, 190, 73, 0.7);
    --warning: rgba(235, 119, 42, .7);
    --danger: rgba(248, 62, 52, .7);
    --info: rgba(152, 217, 243, .7);
    /* Remaining theme variables omitted */
}

/* Ideally found in themes/base.css */
[theme="base"] {
    /*Base*/
    --primary: orange;
    --secondary: purple;
    /*Status*/
    --success: green;
    --warning: orange;
    --danger: red;
    --info: blue;
    /* Remaining theme variables omitted */
}
```