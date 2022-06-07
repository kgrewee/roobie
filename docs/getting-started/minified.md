# Minified (Recommended)
It is recommended to copy the `roobie/dist/themes/` directory to your project to persist themes. Using default dist themes will revert variables to Roobie defaults during npm install or git pull.  The default dist theme files are included here for transparency.

## HTML
```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Minified -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.min.css">
    <script src="./node_modules/roobie/dist/roobie.min.js"></script>

    <!-- External themes. Copy the themes to your local project. -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/root.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/light.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/dark.css">
</head>
```

## Angular
Add Roobie minified dist files to **angular.json**.
```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.min.css",
        "./node_modules/roobie/dist/themes/root.css",
        "./node_modules/roobie/dist/themes/light.css",
        "./node_modules/roobie/dist/themes/dark.css"
    ],
    "scripts": [
        "./node_modules/roobie/dist/roobie.min.js"
    ]
```
