# Layout
Roobie provides a number of CSS classes to help you create responsive layouts. CSS flexbox is used under the hood. If you are not familiar with flexbox, you will not be able to effectively style with Roobie. Visit [Flexbox Froggy](https://flexboxfroggy.com/) for practice. CSS classes are named closely to CSS properties to make them easier to remember.
## Containers and height
Use containers everywhere. They provide conistent widths using percentages. Combine them with height and flex layout for simple, responsive layouts with minimal code.
<div class="div col aln-center br pad" style="height: 500px !important">
    <div class="div ht row jst-center">
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div33 row jst-center aln-center bdr1 br txtc">33%</div>
        <div class="div33 row jst-center aln-center bdr1 br txtc">33%</div>
        <div class="div33 row jst-center aln-center bdr1 br txtc">33%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div50 row jst-center aln-center bdr1 br txtc">50%</div>
        <div class="div50 row jst-center aln-center bdr1 br txtc">50%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div75 row jst-center aln-center bdr1 br txtc">75%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div50 row jst-center aln-center bdr1 br txtc">50%</div>
    </div>
</div>

```html
<div class="div col aln-center br pad" style="height: 500px !important">
    <div class="div ht row jst-center">
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
        <div class="div20 row jst-center aln-center bdr1 br txtc">20%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div33 row jst-center aln-center bdr1 br txtc">33%</div>
        <div class="div33 row jst-center aln-center bdr1 br txtc">33%</div>
        <div class="div33 row jst-center aln-center bdr1 br txtc">33%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div50 row jst-center aln-center bdr1 br txtc">50%</div>
        <div class="div50 row jst-center aln-center bdr1 br txtc">50%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div75 row jst-center aln-center bdr1 br txtc">75%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    </div>
    <div class="div ht row jst-center">
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
        <div class="div50 row jst-center aln-center bdr1 br txtc">50%</div>
    </div>
</div>
```

## Nowrap is the default
By default, Roobie flexbox helpers use nowrap. You must use the `wrp` class to wrap items to the next line.

**Nowrap**
<div class="div ht row jst-center" style="height: 100px">
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
</div>  

```html
<div class="div ht row jst-center" style="height: 100px">
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
</div>
```

**Wrap**
<div class="div ht row jst-center wrp" style="height: 100px">
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
</div>

```html
<div class="div ht row jst-center wrp" style="height: 100px">
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
    <div class="div25 row jst-center aln-center bdr1 br txtc">25%</div>
</div>
```