# Angular
If you are using Angular, add Roobie dependencies to `angular.json`. Example [here](https://github.com/kgrewee/roobie-angular-starter/blob/main/angular.json).

## Add dist to angular.json
Example of Roobie minified dependencies added to angular.json.
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
