# Switch Themes
Switch themes by setting local storage and body HTML attribute. Roobie provides JavaScript helper functions to switch themes. Roobie sets the default theme to `light` on load if the local storage variable is `null` or `not set`.  If the local storage variable is `not null`, the body HTML attribute `theme` is set to the local storage value on load.

```js
Theme.switchTheme('themeName');
```

## Theme switch buttons
<div class="row">
    <span class="btn" onclick="Theme.switchTheme('dark')">Dark</span>
    <span class="btn btn-secondary" onclick="Theme.switchTheme('light')">Light</span>
</div>

```html
<div class="row">
    <span class="btn" onclick="Theme.switchTheme('dark')">Dark</span>
    <span class="btn btn-secondary" onclick="Theme.switchTheme('light')">Light</span>
</div>
```

## Declare Theme class in TypeScript
If you're using typescript, you must declare the Theme class before you can use it.
```ts
declare var Theme;
```

## How theme switch works
Roobie switch theme is simply:
```js
localStorage.setItem('theme', themeName);
document.body.setAttribute('theme', themeName);
```

## How to view active theme
Inspect your HTML and view the body tag.
```html
<body theme="themeName">
```

Get active theme from body attribute or local storage.
```js
document.body.getAttribute('theme')
localStorage.getItem('theme');
```