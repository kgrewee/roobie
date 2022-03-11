
# Layout
Roobie uses a Flexbox layout.  Our classes align closely with CSS properties.

## Container
Containers are the basic building block.  Styled using width and padding.
```html
<div class="diva">Auto width</div>
<div class="div25">25% width</div>
<div class="div33">33% width</div>
<div class="div50">50% width</div>
<div class="div75">75% width</div>
<div class="div">100% width</div>
```

## Height
```html
<div class="hta">Auto height</div>
<div class="ht25">25% height</div>
<div class="ht33">33% height</div>
<div class="ht50">50% height</div>
<div class="ht75">75% height</div>
<div class="ht">100% height</div>
```

## Display

### Direction
Use these if you want flexbox layout classes to work correctly.
```html
<div class="col">Column</div>
<div class="row">Row</div>
<div class="colr">Column reverse</div>
<div class="rowr">Row reverse</div>
```

### Other
```html
<div class="show">Show</div>
<div class="hide">Hide</div>
<div class="flx">Flex</div>
<div class="blk">Block</div>
<div class="inl">Inline</div>
<div class="inl-blk">Inline block</div>
<div class="inl-flx">Inline Flex</div>
```

## Justify Content
Justify content on the main axis.  Row for a **row** display.  Column for a **col** display.
```html
<div class="row jst-start">Start</div>
<div class="row jst-end">End</div>
<div class="row jst-between">Between</div>
<div class="row jst-around">Around</div>
<div class="row jst-center">Center</div>
<div class="row jst-base">Base</div>
<div class="row jst-stretch">Stretch</div>
```

## Align Items
Align items opposite of the main axis.  Column for a **row** display.  Row for a **col** display.
```html
<div class="row aln-start">Start</div>
<div class="row aln-end">End</div>
<div class="row aln-between">Between</div>
<div class="row aln-around">Around</div>
<div class="row aln-center">Center</div>
<div class="row aln-base">Base</div>
<div class="row aln-stretch">Stretch</div>
```

## Align Content
How lines are spaced.  No effect if content is only 1 line.
```html
<div class="row aln-cnt-start">Start</div>
<div class="row aln-cnt-end">End</div>
<div class="row aln-cnt-between">Between</div>
<div class="row aln-cnt-around">Around</div>
<div class="row aln-cnt-center">Center</div>
<div class="row aln-cnt-base">Base</div>
<div class="row aln-cnt-stretch">Stretch</div>
```

## Wrap
Determine what to do with items when there isn't enough space in the container.  The default for all containers is no wrap.
```html
<div class="row wrp">Wrap</div>
<div class="row wrpr">Wrap reverse</div>
<div class="row wrp0">No wrap</div>
```

## Float
```html
<div class="fltl">Left</div>
<div class="fltr">Right</div>
<div class="flt0">None</div>
<div class="flti">Interit</div>
```

## Position
```html
<div class="absolute">Absolute</div>
<div class="sticky">Sticky</div>
<div class="fixed">Fixed</div>
<div class="relative">Relative</div>
<div class="static">Static</div>
```