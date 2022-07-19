# Toggle
Toggle on or off.

## Basic
<label class="toggle">
    <input type="checkbox">
        <span class="slider round"></span>
</label>
<label class="toggle">
    <input type="checkbox">
        <span class="slider"></span>
</label>

```html
<label class="toggle">
    <input type="checkbox">
        <span class="slider round"></span>
</label>
<label class="toggle">
    <input type="checkbox">
        <span class="slider"></span>
</label>
```

## Custom styles
Customize the styles of the toggle.
```css
/* Style slider that moves back and forth */

.toggle .slider {
    background-color: var(--bg5);
    box-shadow: var(--in1);
}

.toggle .slider:before {
    background-color: var(--t1);
}


/* Change color when checked */

.toggle input:checked+.slider {
    background-color: var(--primary);
    box-shadow: var(--in1);
}
```