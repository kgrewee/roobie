# Modular
Use only what you need. Choose the modules you want to import. Make sure to include the both the CSS & JS files if they're required by the module.
## HTML
```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Animations Module -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.animations.css">
    <script src="./node_modules/roobie/dist/roobie.animations.js"></script>

    <!-- Components Module -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.components.css">
    <script src="./node_modules/roobie/dist/roobie.components.js"></script>

    <!-- Layout Module -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.layout.css">

    <!-- Themes Module -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.themes.css">

    <!-- Utilities Module -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.utilities.css">
</head>
```

## Angular
Add Roobie modularized dist files to **angular.json**.
```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.animations.css",
        "./node_modules/roobie/dist/roobie.components.css",
        "./node_modules/roobie/dist/roobie.layout.css",
        "./node_modules/roobie/dist/roobie.themes.css",
        "./node_modules/roobie/dist/roobie.utilities.css"
    ],
    "scripts": [
        "./node_modules/roobie/dist/roobie.animations.js",
        "./node_modules/roobie/dist/roobie.components.js"
    ]
```