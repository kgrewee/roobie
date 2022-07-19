# Utilities Introduction
Roobie utilities are reusable CSS classes such as padding, margin, color, background color, etc. that keep you in your HTML instead of writing custom CSS. The only time you will need to write custom CSS is when Roobie doesn't provide a helper for you (which is rare). If we don't have it, create an issue or PR for it to be added.
## Intensity
Most Roobie utilities provide different intensities, usually ranging from 1-6. Let's look at border bottom and font size as an example:
<div class="col col-spacer4">
    <div class="div row row-spacer aln-center">
        <div class="bdrb1">One</div>
        <div class="bdrb2">Two</div>
        <div class="bdrb3">Three</div>
        <div class="bdrb4">Four</div>
        <div class="bdrb5">Five</div>
        <div class="bdrb6">Six</div>
    </div>
    <div class="div row row-spacer aln-center">
        <div class="fnts1">One</div>
        <div class="fnts2">Two</div>
        <div class="fnts3">Three</div>
        <div class="fnts4">Four</div>
        <div class="fnts5">Five</div>
        <div class="fnts6">Six</div>
    </div>
</div>

```html
<div class="col col-spacer4">
    <div class="div row row-spacer aln-center">
        <div class="bdrb1">One</div>
        <div class="bdrb2">Two</div>
        <div class="bdrb3">Three</div>
        <div class="bdrb4">Four</div>
        <div class="bdrb5">Five</div>
        <div class="bdrb6">Six</div>
    </div>
    <div class="div row row-spacer aln-center">
        <div class="fnts1">One</div>
        <div class="fnts2">Two</div>
        <div class="fnts3">Three</div>
        <div class="fnts4">Four</div>
        <div class="fnts5">Five</div>
        <div class="fnts6">Six</div>
    </div>
</div>
```
The higher the intensity, the more of that utility you get.
## Customize your utilities
Customize your utilities by changing theme or root variables. Utilities that depend on theme colors will be found in each theme. Margin, padding, and similar utilities will be found in root.

Root variables snippet:
```css
/*More variables omitted...*/
/*Border Radius*/
--br1: 2px;
--br2: 4px;
--br3: 6px;
--br4: 8px;
--br5: 10px;
--br6: 15px;
/*Padding*/
--pad1: 3px;
--pad2: 5px;
--pad3: 10px;
--pad4: 15px;
--pad5: 20px;
--pad6: 30px;
/*Margin*/
--mrg1: 5px;
--mrg2: 10px;
--mrg3: 15px;
--mrg4: 20px;
--mrg5: 30px;
--mrg6: 40px;
/*More variables omitted...*/
```

Theme variables snippet:
```css
/*More variables omitted...*/
/*Border*/
--bdr1: .5px solid var(--bg5);
--bdr2: 1px solid var(--bg5);
--bdr3: 2px solid var(--bg5);
--bdr4: 3px solid var(--bg5);
--bdr5: 5px solid var(--bg5);
--bdr6: 7px solid var(--bg5);
/*Inset*/
--in1: inset 0px 0px 1px 1px rgb(17, 17, 17, .1);
--in2: inset 0px 0px 2px 2px rgb(17, 17, 17, .2);
--in3: inset 0px 0px 3px 3px rgb(17, 17, 17, .2);
--in4: inset 0px 0px 3px 3px rgb(17, 17, 17, .3);
--in5: inset 0px 0px 3px 3px rgb(17, 17, 17, .3);
--in6: inset 0px 0px 3px 3px rgb(17, 17, 17, .3);
/*Box Shadow*/
--box1: 0 0 1px 1px rgb(17, 17, 17, .1);
--box2: 0 0 2px 2px rgb(17, 17, 17, .2);
--box3: 0 0 3px 3px rgb(17, 17, 17, .2);
--box4: 0 0 3px 3px rgb(17, 17, 17, .3);
--box5: 0 0 4px 4px rgb(17, 17, 17, .3);
--box6: 0 0 5px 5px rgb(17, 17, 17, .3);
/*Text Shadow*/
--txts1: 1px 1px rgb(17, 17, 17, .1);
--txts2: 2px 2px rgb(17, 17, 17, .2);
--txts3: 3px 3px rgb(17, 17, 17, .2);
--txts4: 3px 3px rgb(17, 17, 17, .3);
--txts5: 4px 4px rgb(17, 17, 17, .3);
--txts6: 5px 5px rgb(17, 17, 17, .3);
/*More variables omitted...*/
```