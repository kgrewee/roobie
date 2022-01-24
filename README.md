# 💎 Roobie

## Problem

Website code is often sloppy and inefficient.  Developers follow different code patterns and naming conventions when making CSS classes and JavaScript functions.  Common CSS properties are often repeated on multiple classes and applied to a single element, creating duplicate code and slower load times.  Most projects are built from scratch, instead of using a template, causing overhead for project setup.  Custom setups for each application make the process un-replicable and hard to onboard developers to new projects.

## Solution

Roobie aims to centralize common web patterns and naming conventions to help teams collaborate effectively. Reuse CSS classes and JavaScript functions, making HTML files bigger, but reducing custom written CSS and JavaScript code.  We provide free and proprietary templates that can be used as a starting point.

The result is:

- Increased maintainability 
- Increased development speed
- Reduced custom code
- Reduced code cleanup

## Contributions

Contributions are welcome.  Feel free to contribute CSS Classes, JS functions, themes, examples, etc.  Branch from `develop` and make a pull request to `develop` when your branch is ready.  We will review it.  Solid contributors will be granted merge privledges.  

## Examples

A few examples... these don't even scratch the surface.  Fully customized HTML without any custom code.

**Button**<br />
<pre>
&lt;a class="btn"&gt;Button&lt;/a&gt;
&lt;a class="btnh"&gt;Button with hover&lt;/a&gt;
</pre>

**Dropdown**<br />
<pre>
&lt;div class="drp mrg2"&gt;
    &lt;a class="drp-btn"&gt;Links&lt;/a&gt;
    &lt;div class="drp-cnt br2 txtc"&gt;
        &lt;a&gt;Link 1&lt;/a&gt;
        &lt;a&gt;Link 2&lt;/a&gt;
        &lt;a&gt;Link 3&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

**Styled List**<br />
<pre>
&lt;ul class="ul mrgh2"&gt;
    &lt;li&gt;Apples&lt;/li&gt;
    &lt;li&gt;Oranges&lt;/li&gt;
    &lt;li&gt;Tomatos&lt;/li&gt;
&lt;/ul&gt;
</pre>

**Responsive Menu**<br />
<pre>
&lt;nav class="nav-row flx-row jst-cnt-between aln-center box2"&gt;
    &lt;div class="flx-row aln-center"&gt;
        &lt;div class="nav-title"&gt;Navbar&lt;/div&gt;
        &lt;div class="flx-row rsp-menu"&gt;
            &lt;a class="nav-item"&gt;Home&lt;/a&gt;
            &lt;a class="nav-item"&gt;Products&lt;/a&gt;
            &lt;a class="nav-item"&gt;About Us&lt;/a&gt;
            &lt;a class="nav-item"&gt;Contact Us&lt;/a&gt;
            &lt;a class="nav-item"&gt;Help&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="flx-row"&gt;
        &lt;a class="nav-item"&gt;user@roobie.net&lt;/a&gt;
    &lt;/div&gt;
&lt;/nav&gt;
</pre>