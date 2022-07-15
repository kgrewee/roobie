# Roobie
[![npm](https://badge.fury.io/js/roobie.svg)](https://badge.fury.io/js/roobie)
![publish npm](https://github.com/kgrewee/roobie/actions/workflows/npm.yml/badge.svg)
![publish docs](https://github.com/kgrewee/roobie/actions/workflows/docs.yml/badge.svg)
![js scan](https://github.com/kgrewee/roobie/actions/workflows/js.yml/badge.svg)

A collection of CSS classes to keep you writing business logic in your HTML. Easily build maintainable web & mobile applications with 100s of pre-built CSS classes at your fingertips. Never write boilerplate CSS classes with padding, margin, etc. ever again. Instead, favor utility CSS classes that are reusable. This makes HTML files bigger, but reduces code cleanup and stray code when removing content. Control all of your CSS variables from centralized themes for consistency throughout your web-apps and easily switch themes. Increase maintainability and development speed.

## Modules
- Themes: Use our pre-built themes or fork our template and create your own.
- Layout: Create simple and responsive layouts with flexbox CSS helpers.
- Utilities: CSS utilities to keep you where you belong, writing business logic in your HTML.
- Animations: A variety of animations to deliver clean and dynamic content.
- Components: Easy to use web components built with CSS & JavaScript.
- Manipulation (Coming soon)
- Icons (Coming soon)

<br>

## Examples
100% width container with a centered row flexbox layout. The child elements each have a different font size.
```html
<div class="div row center">
    <span class="fnts1">Roobie</span>
    <span class="fnts2">Roobie</span>
    <span class="fnts3">Roobie</span>
</div>
```

<br>

100% width container with a row flexbox layout.  The child elements have a 2 intensity margin horizontally. The child elements each have 2 intensity padding.
```html
<div class="div row row-spacer2">
    <span class="pad2">Roobie</span>
    <span class="pad2">Roobie</span>
    <span class="pad2">Roobie</span>
</div>
```

<br>

33% width container.  The child elements each have a different vertical margin (top and bottom). The last child has a left border 2 intensity with blue 2 intensity.
```html
<div class="div33">
    <span class="mrgv1">Roobie</span>
    <span class="mrgv2">Roobie</span>
    <span class="mrgv3 bdrl2 bdr-blue2">Roobie</span>
</div>
```

<br>

50% width container with a vertically centered and horizontally end column flexbox layout. The child elements each have a different font weight.
```html
<div class="div50 col aln-center jst-end">
    <span class="fntw1">Roobie</span>
    <span class="fntw2">Roobie</span>
    <span class="fntw3">Roobie</span>
</div>
```

<br>

Theme variables snippet.
```css
[theme="light"] {
    /*Base*/
    --primary: rgb(21, 206, 166);
    --secondary: var(--bg4);
    /*Status*/
    --success: rgba(81, 190, 73, 0.7);
    --warning: rgba(235, 119, 42, .7);
    --danger: rgba(248, 62, 52, .7);
    --info: rgba(152, 217, 243, .7);
    /*Shade 1*/
    --white: rgb(240, 240, 240);
    --black: rgb(20, 20, 20);
    --grey: rgb(199, 199, 199);
    --red: rgb(167, 32, 32);
    --orange: rgb(243, 162, 11);
    --yellow: rgb(221, 221, 25);
    --green: rgb(19, 172, 82);
    --blue: rgb(23, 23, 192);
    --indigo: rgb(117, 13, 117);
    --violet: rgb(184, 88, 184);
    /*Shade 2*/
    --white2: rgba(240, 240, 240, .7);
    --black2: rgba(20, 20, 20, .7);
    --grey2: rgba(199, 199, 199, .7);
    /*More shades omitted...*/
    /*Text*/
    --t1: rgb(20, 20, 20);
    --t2: rgb(35, 35, 35);
    --t3: rgb(50, 50, 50);
    --t4: rgb(65, 65, 65);
    --t5: rgb(80, 80, 80);
    --t6: rgb(95, 95, 95);
    /*Background*/
    --bg1: rgb(240, 240, 240);
    --bg2: rgb(230, 230, 230);
    --bg3: rgb(220, 220, 220);
    --bg4: rgb(210, 210, 210);
    --bg5: rgb(200, 200, 200);
    --bg6: rgb(190, 190, 190);
    /*And many more...*/
}
```

## Feature Request
Submit new feature requests [here](https://github.com/kgrewee/roobie/issues).

## Install
Install all necessary npm dependencies to build locally.
```shell
npm install
```

## Package
Package builds all aspects of Roobie.  Artifacts will be found in `dist/`.
```shell
npm run package
```

## Serve Docs
Serve the docs with a simple Python HTTP server.
```shell
npm run docs
```