# Accordion
Panels of expandable content.  Requires JS.

## Basic
<div class="accordion">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-panel">
        <p>This is the first section.</p>
    </div>
    <button class="accordion-header">Section 2</button>
    <div class="accordion-panel">
        <p>This is the second section.</p>
    </div>
    <button class="accordion-header">Section 3</button>
    <div class="accordion-panel">
        <p>This is the third section.</p>
    </div>
</div>

```html
 <div class="accordion">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-panel">
        <p>This is the first section.</p>
    </div>
    <button class="accordion-header">Section 2</button>
    <div class="accordion-panel">
        <p>This is the second section.</p>
    </div>
    <button class="accordion-header">Section 3</button>
    <div class="accordion-panel">
        <p>This is the third section.</p>
    </div>
</div>
```

## Nested
 <div class="accordion">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-panel">
        <div class="accordion">
            <button class="accordion-header">Sub-Section 1</button>
            <div class="accordion-panel">
                <p>This is the first sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 2</button>
            <div class="accordion-panel">
                <p>This is the second sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 3</button>
            <div class="accordion-panel">
                <p>This is the third sub-section.</p>
            </div>
        </div>
    </div>
    <button class="accordion-header">Section 2</button>
    <div class="accordion-panel">
        <div class="accordion">
            <button class="accordion-header">Sub-Section 1</button>
            <div class="accordion-panel">
                <p>This is the first sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 2</button>
            <div class="accordion-panel">
                <p>This is the second sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 3</button>
            <div class="accordion-panel">
                <p>This is the third sub-section.</p>
            </div>
        </div>
    </div>
</div>

```html
 <div class="accordion">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-panel">
        <div class="accordion">
            <button class="accordion-header">Sub-Section 1</button>
            <div class="accordion-panel">
                <p>This is the first sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 2</button>
            <div class="accordion-panel">
                <p>This is the second sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 3</button>
            <div class="accordion-panel">
                <p>This is the third sub-section.</p>
            </div>
        </div>
    </div>
    <button class="accordion-header">Section 2</button>
    <div class="accordion-panel">
        <div class="accordion">
            <button class="accordion-header">Sub-Section 1</button>
            <div class="accordion-panel">
                <p>This is the first sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 2</button>
            <div class="accordion-panel">
                <p>This is the second sub-section.</p>
            </div>
            <button class="accordion-header">Sub-Section 3</button>
            <div class="accordion-panel">
                <p>This is the third sub-section.</p>
            </div>
        </div>
    </div>
</div>
```

## Check for Accordions
To check for Accordions and create dynamic content.  Useful in SPA frameworks, not required for MPA most of the time.  Roobie checks for Accordions on initial page load, but if the Accordion is loaded after you must explicitly check for it be found and work properly.

### TypeScript
To use the Accordion class in TypeScript you must declare it.
```ts
declare var Accordion;
```

### Check Function
```js
Accordion.check();
```

### HTML
To use HTML to check for Accordions, add an `iframe` to the bottom of your HTML where the Accordion resides.
```html
<iframe onload="Accordion.check()"></iframe>
```
<iframe onload="Accordion.check()"></iframe>

