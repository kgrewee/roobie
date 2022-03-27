# Select
Select from a list of items.  Requires JS.

## TypeScript
To use the Select class in TypeScript you must first declare it.
```ts
declare var Select;
```

## Check
To check for Selects and create dynamic content.  Useful in SPA frameworks, not required for MPA most of the time.  Roobie checks for Selects on initial load but if the Select is loaded after, you must explicitly check.
```js
Select.check();
```

### HTML
To use HTML to check for the Selects, add an `iframe` to the bottom of your HTML where the Select resides.
```html
<iframe onload="Select.check()"></iframe>
```

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
<iframe onload="Select.check()"></iframe>
<iframe onload='document.addEventListener("click", Select.closeAll())'></iframe>
