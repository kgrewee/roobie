# Select
Select from a list of items.  Requires JS.

## Basic
<div class="select z3">
    <select>
        <option value="0">Choose Sport</option>
        <option value="1">Soccer</option>
        <option value="2">Baseball</option>
        <option value="3">Hockey</option>
    </select>
</div>

```html
<div class="select">
    <select>
        <option value="0">Choose Sport</option>
        <option value="1">Soccer</option>
        <option value="2">Baseball</option>
        <option value="3">Hockey</option>
    </select>
</div>
```

## Check for Selects
To check for Selects and create dynamic content.  Useful in SPA frameworks, not required for MPA most of the time.  Roobie checks for Selects on initial page load, but if the Select is loaded after you must explicitly check for it be found and work properly.

### TypeScript
To use the Select class in TypeScript you must declare it.
```ts
declare var Select;
```

### Check Function
```js
Select.check();
```

### HTML
To use HTML to check for Selects, add an `iframe` to the bottom of your HTML where the Select resides.
```html
<iframe class="hide" onload="Select.check()"></iframe>
```
<iframe class="hide" onload="Select.check()"></iframe>

