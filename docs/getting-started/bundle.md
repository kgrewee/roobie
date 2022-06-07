# Bundle
If you use internal themes, you will have to override Roobie default light and dark theme variables to change the default themes.  Sometimes this better than maintaining your own theme files.  Our theme variables may change in the future versions.  You can create your own themes alongside Roobie light and dark defaults.  See [Custom Themes](/getting-started/themes?id=custom-themes).
## HTML
```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Roobie bundle with everything we have to offer. -->
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.bundle.css">
    <script src="./node_modules/roobie/dist/roobie.bundle.js"></script>
</head>
```

## Angular
Add Roobie bundle dist files to **angular.json**.
```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.bundle.css"
    ],
    "scripts": [
        "./node_modules/roobie/dist/roobie.bundle.js"
    ]
```