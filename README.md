# Roobie
![Build](https://github.com/kgrewee/roobie/actions/workflows/npm.yml/badge.svg)

Centralized CSS & JavaScript for Advanced Web Development.  No external dependencies.  Templates coming soon.

## Install

Install with npm

```shell
npm i roobie
```

## Docs

All documentation is browser based.

- [JavaScript Docs](docs/js)
- CSS Docs - Coming Soon

## Problem

Website code is often sloppy and inefficient.  Developers follow different code patterns and naming conventions when making CSS classes and JavaScript functions.  CSS properties are repeated on multiple classes and applied to a single element, creating duplicate code and slower load times.  Most projects are built from scratch, instead of using a template, making the process un-replicable and time consuming.

## Solution

Centralize common web properties, functions, themes, and animations to help teams collaborate effectively. Reuse core CSS classes and JavaScript functions instead of writing custom code.  Always build from a template.

The result is:

- Increased maintainability 
- Increased development speed
- Reduced custom code
- Reduced code cleanup

## Contributions

Contributions are welcome.  Feel free to contribute CSS Classes, JS functions, themes, examples, etc.  Branch from `develop` and make a pull request to `develop` when your branch is ready.  We will review it.  Solid contributors will be granted merge privledges.  

## Examples

A few examples... these don't even scratch the surface.  Fully customized HTML without any custom code.

**Animation**
```shell
<a class="_fade">Fade</a>
<a class="_zoom">Zoom</a>
<a class="_flip">Flip</a>
<a class="_stretch">Stretch</a>
<a class="_heartbeat">Heartbeat</a>
```

**Button**
```shell
<a class="btn">Button</a>
<a class="btn btn-primary">Primary</a>
<a class="btn btn-secondary">Secondary</a>
<a class="btn btn-success">Success</a>
<a class="btn btn-warning">Warning</a>
<a class="btn btn-danger">Danger</a>
<a class="btn btn-info">Info</a>
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