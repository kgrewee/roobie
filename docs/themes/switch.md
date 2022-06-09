# Switch Themes
Switch themes by setting local storage and body HTML attribute.  Roobie sets the default theme to `light` on load if the local storage variable is `null` or `not set`.  If the local storage `theme` variable is `not null`, the body HTML attribute `theme` is set to the local storage value on load.

<div class="row">
    <span class="btn" onclick="Theme.switchTheme('dark')">Dark</span>
    <span class="btn btn-secondary" onclick="Theme.switchTheme('light')">Light</span>
</div>

## Switch your theme
Roobie switch theme is simply:
```js
localStorage.setItem('theme', themeName);
document.body.setAttribute('theme', themeName);
```

## View the active theme
View active theme on body tag
```html
<body theme="themeName">
```

Get active theme from body attribute or local storage
```js
document.body.getAttribute('theme')
localStorage.getItem('theme');
```