# 💎 Roobie

Centralized CSS & JavaScript for efficient Web Development.

## Install

Install with npm

```shell
npm i roobie --save
```

## Docs

[JavaScript](docs/JS.md)

CSS docs coming soon.

## Problem

Website code is often sloppy and inefficient.  Developers follow different code patterns and naming conventions when making CSS classes and JavaScript functions.  CSS properties are repeated on multiple classes and applied to a single element, creating duplicate code and slower load times.  Most projects are built from scratch, instead of using a template, making the process un-replicable and time consuming.

## Solution

Centralize common web properties, functions, themes, and animations to help teams collaborate effectively. Reuse core CSS classes and JavaScript functions instead of writing custom code.  Always build from a template (Templates coming soon).

The result is:

- Increased maintainability 
- Increased development speed
- Reduced custom code
- Reduced code cleanup

## Contributions

Contributions are welcome.  Feel free to contribute CSS Classes, JS functions, themes, examples, etc.  Branch from `develop` and make a pull request to `develop` when your branch is ready.  We will review it.  Solid contributors will be granted merge privledges.  

## Examples

A few examples... these don't even scratch the surface.  Fully customized HTML without any custom code.

**Animations**
```shell
<a class="fade">Fade</a>
<a class="zoom">Zoom</a>
<a class="flip">Flip</a>
<a class="stretch">Stretch</a>
<a class="heartbeat">Heartbeat</a>
```

**Button**
```shell
<a class="btn">Button</a>
<a class="btnh">Button with hover</a>
```

**Container**
```shell
<div class="div mrg pad">Container with 100% width, margin, padding</div>
```

**Dropdown**
```shell
<div class="drp">
    <a class="drp-btn">Links</a>
    <div class="drp-cnt">
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
    </div>
</div>
```

**Responsive Menu**
```shell
<nav class="nav-row">
    <div class="nav-title">Navbar</div>
    <div class="flx-row rsp-menu">
        <a class="nav-item">Home</a>
        <a class="nav-item">Products</a>
        <a class="nav-item">About Us</a>
        <a class="nav-item">Contact Us</a>
        <a class="nav-item">Help</a>
    </div>
</nav>
```

**Styled List**
```shell
<ul class="ul">
    <li>Apples</li>
    <li>Oranges</li>
    <li>Tomatos</li>
</ul>
```