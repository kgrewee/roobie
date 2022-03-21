# Accordion
Panels of expandable content.

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

<iframe onload="Accordion.check()"></iframe>