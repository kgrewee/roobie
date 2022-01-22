# 💎 Roobie

## Problem

Website code is often sloppy and inefficient.  Developers follow different code patterns and naming conventions when making CSS classes and JavaScript functions.  Common CSS properties are often repeated on multiple classes and applied to a single element, creating duplicate code and slower load times.  Most projects are built from scratch, instead of using a template, causing overhead for project setup.  Custom setups for each application make the process un-replicable and hard to onboard developers to new projects.

## Solution

Roobie aims to centralize common web patterns and naming conventions to help a teams efficiently code. Reuse CSS classes and JavaScript functions, making HTML files bigger, but reducing custom written CSS and JavaScript code.  We provide free and proprietary templates that can be used as a starting point.

The result is:

- Increased maintainability 
- Increased development speed
- Reduced custom code
- Reduced code cleanup

## Contributions

Contributions are welcome.  Feel free to contribute CSS Classes, JS functions, themes, examples, etc.  Branch from `develop` and make a pull request to `develop` when your branch is ready.  We will review it.  Solid contributors will be granted merge privledges.  

## Examples

A few examples... these don't even scratch the surface.  Fully customized HTML without any custom code.

**Button**
<pre>
<xmp>
<a class="btn">Button</a>
<a class="btnh">Button with hover</a>
</xmp>
</pre>

**Dropdown**
<pre>
<xmp>
<div class="drp mrg2">
    <a class="drp-btn">Links</a>
    <div class="drp-cnt br2 txtc">
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
    </div>
</div>
</xmp>
</pre>

**Styled List**
<pre>
<xmp>
<ul class="ul mrgh2">
    <li>Apples</li>
    <li>Oranges</li>
    <li>Tomatos</li>
</ul>
</xmp>
</pre>


**Responsive Menu**
<pre>
<xmp>
<nav class="nav-row flx-row jst-cnt-between aln-center box2">
    <div class="flx-row aln-center">
        <div class="nav-title">Navbar</div>
        <div class="flx-row rsp-menu">
            <a class="nav-item">Home</a>
            <a class="nav-item">Products</a>
            <a class="nav-item">About Us</a>
            <a class="nav-item">Contact Us</a>
            <a class="nav-item">Help</a>
        </div>
    </div>
    <div class="flx-row">
        <a class="nav-item">user@roobie.net</a>
    </div>
</nav>
</xmp>
</pre>
