# Distributions
We currently offer 3 distributions.
## Minified (Recommended)
It is recommended to copy the `roobie/dist/themes/` directory to your project to persist themes. Using default dist themes will revert variables to Roobie defaults during npm install or git pull.  The default dist theme files are included here for transparency.
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

## Bundle
If you use internal themes, you will have to override Roobie default light and dark theme variables to change the default themes.  Sometimes this better than maintaining your own theme files.  Our theme variables may change in the future versions.  You can create your own themes alongside Roobie light and dark defaults.  See [Custom Themes](/themes/custom).
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

## Modular
Use only what you need. Choose the modules you want to import. Make sure to include the both the CSS & JS files if they're required by the module.
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