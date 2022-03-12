# Themes
Themes are required for Roobie to function properly.  Create copies of the theme files and include them in your project instead of using the defaults in the `node_modules/` directory to persist your themes through npm installs.  If you want to use the defaults, use the bundle distribution.

## Root
`root.css` classes and variables in are theme independent.  Modify them to change all themes.  Themes will not function properly without these variables.

## Pre-built Themes
`light.css` & `dark.css` are pre-built themes.  Copy them to create new themes and expand them with new variables.

## Custom Themes
You can add more themes alongside the base light and dark, just copy light.css or dark.css and change selector `[theme="themeName"]` in the top of the file to reflect the name of your theme.  Make sure to import this new theme file to use it.

## Activate Theme
Activate a theme by setting local storage and body HTML attribute.  Replace `themeName` with the name of your theme.
```js
localStorage.setItem('theme', themeName);
document.body.setAttribute('theme', themeName);
```

Result
```html
<body theme="themeName">
```

The active theme is saved in the local storage so it can be loaded later.  Roobie sets the default theme to `light` on load if the local storage variable is null aka not set.  If the local storage variable is not null, the body HTML attribute theme is set to its value on load.  Make sure to include the theme files in your project, or **things won't work correctly**.  Every CSS class in Roobie is based on a theme variable.