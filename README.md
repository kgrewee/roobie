# Roobie
![Build](https://github.com/kgrewee/roobie/actions/workflows/npm.yml/badge.svg)
[![npm version](https://badge.fury.io/js/roobie.svg)](https://badge.fury.io/js/roobie)

**No official release yet.**

A minimalistic approach to web development.  Roobie makes web development **easier**.  Centralized CSS, JavaScript, themes, animations & more. Reuse core CSS classes and JavaScript functions instead of writing custom code.  Always build from a template.

Result
- Increased maintainability 
- Increased development speed
- Reduced custom code
- Reduced code cleanup

## Examples
Examples found [here](examples/) are hosted at https://roobie.net.  You can see them locally if you pull this repository and open any example .html file.

## Install
Install using npm or pull this repository and import our dist files from `dist/` in your local repository instead of the `node_modules/roobie/dist/` directory shown in the example.

### Install with npm

```shell
npm i roobie --save
```

### Option 1: Minified with external themes (Recommended)
It is recommended to copy the `dist/themes/` directory to your local project to persist themes through npm installs, instead of including the .css files in the `node_modules/roobie/dist/themes` directory.  The node module .css theme files are included here for transparency.
#### HTML
```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.min.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/root.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/light.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/dark.css">
    <script src="./node_modules/roobie/dist/roobie.min.js"></script>
</head>
```

#### Angular
Add Roobie minified dist files to **angular.json**.
```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.min.css",
        "./node_modules/roobie/dist/themes/root.css",
        "./node_modules/roobie/dist/themes/light.css",
        "./node_modules/roobie/dist/themes/dark.css"
    ],
    "scripts": ["./node_modules/roobie/dist/roobie.min.js"]
```

### Option 2: Bundle with internal themes
Internal themes aren't bad, but you're stuck with the Roobie default light and dark themes unless you override variables in your CSS.  For some people this better than maintaining their own theme files.  Our theme variables may change in the future versions.  You can still create your own themes while keeping the Roobie light and dark defaults.  See [Custom Themes](#custom-themes).
#### HTML
```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.bundle.css">
    <script src="./node_modules/roobie/dist/roobie.bundle.js"></script>
</head>
```

#### Angular
Add Roobie bundle dist files to **angular.json**.
```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.bundle.css"
    ],
    "scripts": ["./node_modules/roobie/dist/roobie.bundle.js"]
```

### Base
Human readable Roobie dist files are included but not recommmended for production.  Look through these to get a better understanding of how Roobie works, but use the minified or bundle distribution in your application.
- [roobie.css](dist/roobie.css)
- [roobie.js](dist/roobie.js)

## Themes
Themes are required for Roobie to function properly.  Create copies of the theme files and include them in your project instead of using the defaults in the `node_modules/` directory to persist your themes through npm installs.  If you want to use the defaults, use the bundle distribution.

### Root
[root.css](dist/themes/root.css) classes and variables in are theme independent.  Modify them to change all themes.  Themes will not function properly without these variables.

### Pre-built Themes
[light.css](dist/themes/light.css) & [dark.css](dist/themes/dark.css) are pre-built themes.  Copy them to create new themes and expand them with new variables.

### Custom Themes
You can add more themes alongside the base light and dark, just copy light.css or dark.css and change selector `[theme="themeName"]` in the top of the file to reflect the name of your theme.  Make sure to import this new theme file to use it.

### Activate Theme
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