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

**Animations**<br />
<pre>
&lt;a class="fade"&gt;Fade&lt;/a&gt;
&lt;a class="zoom"&gt;Zoom&lt;/a&gt;
&lt;a class="flip"&gt;Flip&lt;/a&gt;
&lt;a class="stretch"&gt;Stretch&lt;/a&gt;
&lt;a class="heartbeat"&gt;Heartbeat&lt;/a&gt;
</pre>

**Button**<br />
<pre>
&lt;a class="btn"&gt;Button&lt;/a&gt;
&lt;a class="btnh"&gt;Button with hover&lt;/a&gt;
</pre>

**Container**<br />
<pre>
&lt;div class="div mrg pad"&gt;Container with 100% width, margin, padding&lt;/div&gt;
</pre>

**Dropdown**<br />
<pre>
&lt;div class="drp"&gt;
    &lt;a class="drp-btn"&gt;Links&lt;/a&gt;
    &lt;div class="drp-cnt"&gt;
        &lt;a&gt;Link 1&lt;/a&gt;
        &lt;a&gt;Link 2&lt;/a&gt;
        &lt;a&gt;Link 3&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

**Responsive Menu**<br />
<pre>
&lt;nav class="nav-row"&gt;
    &lt;div class="nav-title"&gt;Navbar&lt;/div&gt;
    &lt;div class="flx-row rsp-menu"&gt;
        &lt;a class="nav-item"&gt;Home&lt;/a&gt;
        &lt;a class="nav-item"&gt;Products&lt;/a&gt;
        &lt;a class="nav-item"&gt;About Us&lt;/a&gt;
        &lt;a class="nav-item"&gt;Contact Us&lt;/a&gt;
        &lt;a class="nav-item"&gt;Help&lt;/a&gt;
    &lt;/div&gt;
&lt;/nav&gt;
</pre>

**Styled List**<br />
<pre>
&lt;ul class="ul"&gt;
    &lt;li&gt;Apples&lt;/li&gt;
    &lt;li&gt;Oranges&lt;/li&gt;
    &lt;li&gt;Tomatos&lt;/li&gt;
&lt;/ul&gt;
</pre>
