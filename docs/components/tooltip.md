# Tooltip
Show hidden text on hover.  Requires JS.

## Check
To check for Tooltips and create dynamic content.  Useful in SPA frameworks.  Roobie checks for Tooltips on initial load but if the Tooltip is loaded after, you must explicitly check.
```js
Tooltip.check();
```

### TypeScript
To use the Tooltip class you must first declare it.
```ts
declare var Tooltip;
```

### HTML
To use HTML to check for the Tooltips, add an `iframe` to the bottom of your HTML where the Tooltip resides.
```html
<iframe onload="Tooltip.check()"></iframe>
```

## Basic
<div class="row">
    <div tooltip="Default tooltip">Default</div>
    <div tooltip="Tooltip bottom" side="bottom">Bottom</div>
    <div tooltip="Tooltip top" side="top">Top</div>
    <div tooltip="Tooltip left" side="left">Left</div>
    <div tooltip="Tooltip right" side="right">Right</div>
</div>

```html
<div tooltip="Default tooltip">Default</div>
<div tooltip="Tooltip bottom" side="bottom">Bottom</div>
<div tooltip="Tooltip top" side="top">Top</div>
<div tooltip="Tooltip left" side="left">Left</div>
<div tooltip="Tooltip right" side="right">Right</div>
```
<iframe onload="Tooltip.check()"></iframe>