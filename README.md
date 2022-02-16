# Roobie
![Build](https://github.com/kgrewee/roobie/actions/workflows/npm.yml/badge.svg)

**No official release yet.**

A minimalistic approach to web development.  Roobie makes web development ***easier***.  Centralized CSS, JavaScript, themes, animations & more. Reuse core CSS classes and JavaScript functions instead of writing custom code.  Always build from a template.

The result is:

- Increased maintainability 
- Increased development speed
- Reduced custom code
- Reduced code cleanup

## Install

Install with npm

```shell
npm i roobie
```

## Docs

All documentation is browser based.

- [JavaScript Docs](docs/js)
- CSS Docs - Coming Soon

## Contributions

Contributions are always welcome.  Feel free to contribute anything that will make web development easier and more efficient.  Branch from `develop` and make a pull request to `develop` when your branch is ready.  We will review it.  We are always looking for more help and feedback.

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

**Layout**
```shell
<div class="col">Column</div>
<div class="row">Row</div>
```

**Responsive Menu**
```shell
<nav class="nav-row">
    <div class="nav-title">Navbar</div>
    <div class="row rsp-menu">
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