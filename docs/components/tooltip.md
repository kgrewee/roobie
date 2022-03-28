# Tooltip
Show hidden text on hover.  Requires JS.

## TypeScript
To use the Tooltip class in TypeScript you must declare it.
```ts
declare var Tooltip;
```

## Check
To check for Tooltips and create dynamic content.  Useful in SPA frameworks, not required for MPA most of the time.  Roobie checks for Tooltips on initial load but if the Tooltip is loaded after, you must explicitly check.
```js
Tooltip.check();
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