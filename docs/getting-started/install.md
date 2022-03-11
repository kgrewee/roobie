# Install
Install using npm or pull this repository and import our dist files from `dist/` in your local repository instead of the `node_modules/roobie/dist/` directory shown in the example.

## Install with npm

```shell
npm i roobie --save
```

## Option 1: Minified with external themes (Recommended)
It is recommended to copy the `dist/themes/` directory to your local project to persist themes through npm installs, instead of including the .css files in the `node_modules/roobie/dist/themes` directory.  The node module .css theme files are included here for transparency.
### HTML
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

### Angular
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

## Option 2: Bundle with internal themes
Internal themes aren't bad, but you're stuck with the Roobie default light and dark themes unless you override variables in your CSS.  For some people this better than maintaining their own theme files.  Our theme variables may change in the future versions.  You can still create your own themes while keeping the Roobie light and dark defaults.  See [Custom Themes](#custom-themes).
### HTML
```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.bundle.css">
    <script src="./node_modules/roobie/dist/roobie.bundle.js"></script>
</head>
```

### Angular
Add Roobie bundle dist files to **angular.json**.
```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.bundle.css"
    ],
    "scripts": ["./node_modules/roobie/dist/roobie.bundle.js"]
```
