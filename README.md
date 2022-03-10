# Roobie
![Build](https://github.com/kgrewee/roobie/actions/workflows/npm.yml/badge.svg)
[![npm version](https://badge.fury.io/js/roobie.svg)](https://badge.fury.io/js/roobie)

**No official release yet.**

A minimalistic approach to web development.  Roobie makes web development **easier**.  Centralized CSS, JavaScript, themes, animations & more. Reuse core CSS classes and JavaScript functions instead of writing custom code.  Always build from a template.

Result
- Increased maintainability 
- Increased development speed
- Reduced custom code
- Reduced code cleanup

## Install

Install with npm

```shell
npm i roobie --save
```

### HTML
Add Roobie dist files to the **head** tag of an HTML file.

```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.min.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/root.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/light.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/dark.css">
    <script src="./node_modules/roobie/dist/roobie.min.js"></script>
</head>
```

**or**

```html
<head>
    <title>Roobie</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./node_modules/roobie/dist/roobie.bundle.css">
    <script src="./node_modules/roobie/dist/roobie.bundle.js"></script>
</head>
```

### Angular 

Add Roobie dist files to **angular.json**.

```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.min.css",
        "./node_modules/roobie/dist/themes/root.css",
        "./node_modules/roobie/dist/themes/light.css",
        "./node_modules/roobie/dist/themes/dark.css"
    ],
    "scripts": ["./node_modules/roobie/dist/roobie.min.js"]
```

**or**

```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.bundle.css"
    ],
    "scripts": ["./node_modules/roobie/dist/roobie.bundle.js"]
```



## Examples
Examples are found [here](examples/).

## Themes

These are required for Roobie to function properly.  Create copies and include them in your project, instead of using the defaults in the `node_modules/` directory to persist your themes through npm installs.

- [dist/themes/root.css](dist/themes/root.css)
- [dist/themes/light.css](dist/themes/light.css)
- [dist/themes/dark.css](dist/themes/dark.css)

Include the defaults, copy them and create your own version, or use a bundle distribution.  Make sure to include the theme files in your project, or things won't work correctly.  Every CSS class in Roobie is based on a theme variable.

### Root
`root.css` classes and variables in are theme independent.  Modify them to change all themes.

### Pre-built Themes
`light.css` and `dark.css` are pre-built themes.  Copy them to create new themes and expand them with new variables.

## Layout
Roobie uses a Flexbox layout.  Our classes align closely with CSS properties.

### Container
Containers are the basic building block.  Styled using width and padding.
```html
<div class="diva">Auto width</div>
<div class="div25">25% width</div>
<div class="div33">33% width</div>
<div class="div50">50% width</div>
<div class="div75">75% width</div>
<div class="div">100% width</div>
```

### Height
```html
<div class="hta">Auto height</div>
<div class="ht25">25% height</div>
<div class="ht33">33% height</div>
<div class="ht50">50% height</div>
<div class="ht75">75% height</div>
<div class="ht">100% height</div>
```

### Display

#### Direction
Use these if you want flexbox layout classes to work correctly.
```html
<div class="col">Column</div>
<div class="row">Row</div>
<div class="colr">Column reverse</div>
<div class="rowr">Row reverse</div>
```

#### Other
```html
<div class="show">Show</div>
<div class="hide">Hide</div>
<div class="flx">Flex</div>
<div class="blk">Block</div>
<div class="inl">Inline</div>
<div class="inl-blk">Inline block</div>
<div class="inl-flx">Inline Flex</div>
```

### Justify Content
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

### Align Items
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

### Align Content
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

### Wrap
Determine what to do with items when there isn't enough space in the container.  The default for all containers is no wrap.
```html
<div class="row wrp">Wrap</div>
<div class="row wrpr">Wrap reverse</div>
<div class="row wrp0">No wrap</div>
```

### Float
```html
<div class="fltl">Left</div>
<div class="fltr">Right</div>
<div class="flt0">None</div>
<div class="flti">Interit</div>
```

### Position
```html
<div class="absolute">Absolute</div>
<div class="sticky">Sticky</div>
<div class="fixed">Fixed</div>
<div class="relative">Relative</div>
<div class="static">Static</div>
```

## Utilities
Most utility classes range between 0-6 in terms of intensity.

### Background Color
```html
<div class="bg0">Transparent</div>
<div class="bg1">Theme setting</div>
<div class="bg2">Theme setting</div>
<div class="bg3">Theme setting</div>
<div class="bg4">Theme setting</div>
<div class="bg5">Theme setting</div>
<div class="bg6">Theme setting</div>
```

### Border Radius
```html
<div class="br0">None</div>
<div class="br1">Theme setting</div>
<div class="br2">Theme setting</div>
<div class="br3">Theme setting</div>
<div class="br4">Theme setting</div>
<div class="br5">Theme setting</div>
<div class="br6">Theme setting</div>
```

### Border
```html
<div class="bdr0">None</div>
<div class="bdr1">Theme setting</div>
<div class="bdr2">Theme setting</div>
<div class="bdr3">Theme setting</div>
<div class="bdr4">Theme setting</div>
<div class="bdr5">Theme setting</div>
<div class="bdr6">Theme setting</div>
```

### Box Shadow
```html
<div class="box0">None</div>
<div class="box1">Theme setting</div>
<div class="box2">Theme setting</div>
<div class="box3">Theme setting</div>
<div class="box4">Theme setting</div>
<div class="box5">Theme setting</div>
<div class="box6">Theme setting</div>
```

### Color
```html
<div class="t0">Transparent</div>
<div class="t1">Theme setting</div>
<div class="t2">Theme setting</div>
<div class="t3">Theme setting</div>
<div class="t4">Theme setting</div>
<div class="t5">Theme setting</div>
<div class="t6">Theme setting</div>
```

### Font Size
```html
<div class="fnts1">Theme setting</div>
<div class="fnts2">Theme setting</div>
<div class="fnts3">Theme setting</div>
<div class="fnts4">Theme setting</div>
<div class="fnts5">Theme setting</div>
<div class="fnts6">Theme setting</div>
```

### Font Weight
```html
<div class="fntw1">Theme setting</div>
<div class="fntw2">Theme setting</div>
<div class="fntw3">Theme setting</div>
<div class="fntw4">Theme setting</div>
<div class="fntw5">Theme setting</div>
<div class="fntw6">Theme setting</div>
```

### Line Height
```html
<div class="lht1">Theme setting</div>
<div class="lht2">Theme setting</div>
<div class="lht3">Theme setting</div>
<div class="lht4">Theme setting</div>
<div class="lht5">Theme setting</div>
<div class="lht6">Theme setting</div>
```

### Margin
```html
<div class="mrga">Auto</div>
<div class="mrg0">None</div>
<div class="mrg1">Theme setting</div>
<div class="mrg2">Theme setting</div>
<div class="mrg3">Theme setting</div>
<div class="mrg4">Theme setting</div>
<div class="mrg5">Theme setting</div>
<div class="mrg6">Theme setting</div>
```

### Opacity
```html
<div class="opa">Auto opacity</div>
<div class="op25">25% opacity</div>
<div class="op33">33% opacity</div>
<div class="op50">50% opacity</div>
<div class="op75">75% opacity</div>
<div class="op">100% opacity</div>
```

### Overflow
```html
<div class="ov">X and Y</div>
<div class="ovx">Only X</div>
<div class="ovy">Only Y</div>
<div class="ovh">Hidden</div>
```

### Padding
```html
<div class="pada">Auto</div>
<div class="pad0">None</div>
<div class="pad1">Theme setting</div>
<div class="pad2">Theme setting</div>
<div class="pad3">Theme setting</div>
<div class="pad4">Theme setting</div>
<div class="pad5">Theme setting</div>
<div class="pad6">Theme setting</div>
```

### Rotate
```html
<div class="rotate0">0 degrees</div>
<div class="rotate45">45 degrees</div>
<div class="rotate90">90 degrees</div>
<div class="rotate135">135 degrees</div>
<div class="rotate180">180 degrees</div>
<div class="rotate225">225 degrees</div>
<div class="rotate270">270 degrees</div>
<div class="rotate315">315 degrees</div>
<div class="rotate360">360 degrees</div>
```

### Text Align
```html
<div class="txtl">Left</div>
<div class="txtc">Center</div>
<div class="txtr">Right</div>
```

### Text Decoration
```html
<div class="txtd0">None</div>
```

### Visibility
```html
<div class="visible">Visible</div>
<div class="hidden">Hidden</div>
<div class="collapse">collapse</div>
```

### Z Index
```html
<div class="z0">-1</div>
<div class="z1">1</div>
<div class="z2">5</div>
<div class="z3">10</div>
<div class="z4">25</div>
<div class="z5">50</div>
<div class="z6">100</div>
```

## Animations
Animation classes start with an _underscore.
```html
<span class="_backt">Back T</span>
<span class="_backb">Back B</span>
<span class="_backl">Back L</span>
<span class="_backr">Back R</span>
<span class="_backoutt">Back Out T</span>
<span class="_backoutb">Back Out B</span>
<span class="_backoutl">Back Out L</span>
<span class="_backoutr">Back Out R</span>
<span class="_bounce">Bounce</span>
<span class="_bouncet">Bounce T</span>
<span class="_bounceb">Bounce B</span>
<span class="_bouncel">Bounce L</span>
<span class="_bouncer">Bounce R</span>
<span class="_bounceout">Bounce Out</span>
<span class="_bounceoutt">Bounce Out T</span>
<span class="_bounceoutb">Bounce Out B</span>
<span class="_bounceoutl">Bounce Out L</span>
<span class="_bounceoutr">Bounce Out R</span>
<span class="_flip">Flip</span>
<span class="_flipx">Flip X</span>
<span class="_flipy">Flip Y</span>
<span class="_flipoutx">Flip Out X</span>
<span class="_flipouty">Flip Out Y</span>
<span class="_fade">Fade</span>
<span class="_fadet">Fade T</span>
<span class="_fadeb">Fade B</span>
<span class="_fadel">Fade L</span>
<span class="_fader">Fade R</span>
<span class="_fadetplus">Fade T Plus</span>
<span class="_fadebplus">Fade B Plus</span>
<span class="_fadelplus">Fade L Plus</span>
<span class="_faderplus">Fade R Plus</span>
<span class="_fadetl">Fade T L</span>
<span class="_fadebl">Fade B L</span>
<span class="_fadetr">Fade T R</span>
<span class="_fadebr">Fade B R</span>
<span class="_flash">Flash</span>
<span class="_glow">Glow</span>
<span class="_heartbeat">Heartbeat</span>
<span class="_hinge">Hinge</span>
<span class="_jello">Jello</span>
<span class="_pop">Pop</span>
<span class="_pulse">Pulse</span>
<span class="_rabid">Rabid</span>
<span class="_roll">Roll</span>
<span class="_rollout">Roll Out</span>
<span class="_rotate">Rotate</span>
<span class="_rotateout">Rotate Out</span>
<span class="_shake">Shake</span>
<span class="_stretch">Stretch</span>
<span class="_swing">Swing</span>
<span class="_wobble">Wobble</span>
<span class="_slidet">Slide T</span>
<span class="_slideb">Slide B</span>
<span class="_slidel">Slide L</span>
<span class="_slider">Slide R</span>
<span class="_slideoutt">Slide Out T</span>
<span class="_slideoutb">Slide Out B</span>
<span class="_slideoutl">Slide Out L</span>
<span class="_slideoutr">Slide Out R</span>
<span class="_zoom">Zoom</span>
<span class="_zoomt">Zoom T</span>
<span class="_zoomb">Zoom B</span>
<span class="_zooml">Zoom L</span>
<span class="_zoomr">Zoom R</span>
<span class="_zoomout">Zoom Out</span>
<span class="_zoomoutt">Zoom Out T</span>
<span class="_zoomoutb">Zoom Out B</span>
<span class="_zoomoutl">Zoom Out L</span>
<span class="_zoomoutr">Zoom Out R</span>
```

## Components

### Accordion
Panels of expandable content.

#### Basic
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

#### Nested
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

### Alert
Alert the user of an event that has occurred.
```html
<span class="alert alert-primary">An event has occurred</span>
<span class="alert alert-secondary">An event has occurred</span>
<span class="alert alert-outline">An event has occurred</span>
<span class="alert alert-success">An event has occurred</span>
<span class="alert alert-warning">An event has occurred</span>
<span class="alert alert-danger">An event has occurred</span>
<span class="alert alert-info">An event has occurred</span>
```

### Button
Simple button styles that can be applied to most elements.

#### Basic
```html
<button type="button" class="btn">Basic</button>
<button type="button" class="btn btn-outline">Outline</button>
```
#### Theme
```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Seconday</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-info">Info</button>
```

#### Colored
```html
<button type="button" class="btn bg-red2">Red</button>
<button type="button" class="btn bg-orange2">Orange</button>
<button type="button" class="btn bg-yellow2">Yellow</button>
<button type="button" class="btn bg-green2">Green</button>
<button type="button" class="btn bg-blue2">Blue</button>
<button type="button" class="btn bg-indigo2">Indigo</button>
<button type="button" class="btn bg-violet2">Violet</button>
```

#### Raised
```html
<button type="button" class="btn box">Raised</button>
<button type="button" class="btn boxh">Raised with hover</button>
```

#### Inset
```html
<button type="button" class="btn in">Inset</button>
<button type="button" class="btn inh">Inset with hover</button>
```

#### Icon
```html
<button type="button" class="btn btn-primary"><i class="icon icon-heart"></i></button>
<button type="button" class="btn btn-primary"><i class="icon icon-facebook"></i></button>
<button type="button" class="btn btn-primary"><i class="icon icon-comment"></i></button>
```

#### Variations
```html
<button type="button" class="btn bdr-success">Success</button>
<button type="button" class="btn bdr-warning">Warning</button>
<button type="button" class="btn bdr-danger">Danger</button>
<button type="button" class="btn bdr-info">Info</button>
<button type="button" class="btn bdr-red2">Red</button>
<button type="button" class="btn bdr-orange2">Orange</button>
<button type="button" class="btn bdr-yellow2">Yellow</button>
<button type="button" class="btn bdr-green2">Green</button>
<button type="button" class="btn bdr-blue2">Blue</button>
<button type="button" class="btn bdr-indigo2">Indigo</button>
<button type="button" class="btn bdr-violet2">Violet</button>
<button type="button" class="btn bdr-success success">Success</button>
<button type="button" class="btn bdr-warning warning">Warning</button>
<button type="button" class="btn bdr-danger danger">Danger</button>
<button type="button" class="btn bdr-info info">Info</button>
<button type="button" class="btn bdr-red red">Red</button>
<button type="button" class="btn bdr-orange orange">Orange</button>
<button type="button" class="btn bdr-yellow yellow">Yellow</button>
<button type="button" class="btn bdr-green green">Green</button>
<button type="button" class="btn bdr-blue blue">Blue</button>
<button type="button" class="btn bdr-indigo indigo">Indigo</button>
<button type="button" class="btn bdr-violet violet">Violet</button>
```

### Card
A container of styled content.

#### Basic
```html
<div class="card">
    <h2 class="card-title">Title</h2>
    <span class="card-subtitle">Subtitle</span>
    <div class="card-content">
        This is the content.
    </div>
</div>
```
#### Image
```html
<div class="card">
    <h2 class="card-title">Image</h2>
    <span class="card-subtitle">By Artist Name</span>
    <div class="card-content">
        <img class="br bg2" width="400" height="200">
    </div>
</div>
```
#### Actions
```html
<div class="card">
    <h2 class="card-title">Title</h2>
    <span class="card-subtitle">Subtitle</span>
    <div class="card-content">
        This is the content.
    </div>
    <div class="card-actions">
        <button type="button" class="btn btn-secondary">Purchase</button>
        <button type="button" class="btn btn-primary">Share</button>
    </div>
</div>
```

### Carousel
Interactive slider full of content.

#### Basic
```html
<div id="carouselBasic" class="carousel">
    <div class="carousel-slide">
        <h1>Slide 1</h1>
    </div>
    <div class="carousel-slide">
        <h1>Slide 2</h1>
    </div>
    <div class="carousel-slide">
        <h1>Slide 3</h1>
    </div>
    <a class="carousel-previous">&#10094;</a>
    <a class="carousel-next">&#10095;</a>
</div>
```
#### Captions
```html
<div id="carouselBasic2" class="carousel" index="1">
    <div class="carousel-slide">
        <h1>Slide 1</h1>
        <p>This is a caption.</p>
        <div class="carousel-info">1/3</div>
    </div>
    <div class="carousel-slide">
        <h1>Slide 2</h1>
        <p>This is a caption.</p>
        <div class="carousel-info">2/3</div>
    </div>
    <div class="carousel-slide">
        <h1>Slide 3</h1>
        <p>This is a caption.</p>
        <div class="carousel-info">3/3</div>
    </div>
    <a class="carousel-previous">&#10094;</a>
    <a class="carousel-next">&#10095;</a>
</div>
```

#### Indicators
```html
<div id="carouselIndicator" class="carousel br bdr" index="2">
    <div class="carousel-slide">
        <h1>Slide 1</h1>
    </div>
    <div class="carousel-slide">
        <h1>Slide 2</h1>
    </div>
    <div class="carousel-slide">
        <h1>Slide 3</h1>
    </div>
    <a class="carousel-previous">&#10094;</a>
    <a class="carousel-next">&#10095;</a>
    <div class="carousel-indicators">
        <span index="0"></span>
        <span index="1"></span>
        <span index="2"></span>
    </div>
</div>
```

### Dropdown
Display hidden content on hover.

#### Basic
```html
<div class="drp">
    <a class="drp-btn">Links</a>
    <div class="drp-cnt">
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
    </div>
</div>
```

#### Descriptions
```html
<div class="drp">
    <a class="drp-btn">Descriptions</a>
    <div class="drp-cnt">
        <a>Products<p>Handmade, carefully crafted products</p></a>
        <a>Resources<p>An archive of learning resources</p></a>
        <a>Tutorials<p>Description tutorials to learn CSS</p></a>
    </div>
</div>
```

#### Categories
```html
<div class="drp">
    <span class="drp-btn">Categories</span>
    <div class="drp-cnt txtl">
        <div class="row pad2 br">
            <div class="col mrg">
                <h4 class="drp-title">Sports</h4>
                <a>Frisbee</a>
                <a>Football</a>
                <a>Soccer</a>
                <a>Baseball</a>
            </div>
            <div class="col mrg">
                <h4 class="drp-title">Calendar</h4>
                <a>2020</a>
                <a>2021</a>
                <a>2022</a>
            </div>
            <div class="col mrg">
                <h4 class="drp-title">Schedule</h4>
                <a>Fall</a>
                <a>Winter</a>
                <a>Spring</a>
                <a>Summer</a>
            </div>
        </div>
    </div>
</div>
```

#### Navbar Integration
```html
<nav class="nav-row row jst-between aln-center box">
    <div class="row aln-center">
        <div class="nav-title"><span>Roo</span>bie</div>
        <div class="drp">
            <a class="drp-btn nav-item">Links</a>
            <div class="drp-cnt txtc">
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Content</span>
            <div class="drp-cnt pad3 br">
                <p>Container that can hold any element</p>
            </div>
        </div>
        <div class="drp">
            <a class="drp-btn nav-item">Descriptions</a>
            <div class="drp-cnt">
                <a>Products<p>Handmade, carefully crafted products</p></a>
                <a>Resources<p>An archive of learning resources</p></a>
                <a>Tutorials<p>Description tutorials to learn CSS</p></a>
            </div>
        </div>
        <div class="drp">
            <span class="drp-btn nav-item">Categories</span>
            <div class="drp-cnt txtl">
                <div class="row pad2 br">
                    <div class="col mrg">
                        <h4 class="drp-title">Sports</h4>
                        <a>Frisbee</a>
                        <a>Football</a>
                        <a>Soccer</a>
                        <a>Baseball</a>
                    </div>
                    <div class="col mrg">
                        <h4 class="drp-title">Calendar</h4>
                        <a>2020</a>
                        <a>2021</a>
                        <a>2022</a>
                    </div>
                    <div class="col mrg">
                        <h4 class="drp-title">Schedule</h4>
                        <a>Fall</a>
                        <a>Winter</a>
                        <a>Spring</a>
                        <a>Summer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
```

### Input
Improved input styles from browser defaults.

#### Basic
```html
<input type="text" class="input" placeholder="Name"></input>
<input type="text" class="input input-outline" placeholder="Input"></input>
```

#### Raised
```html
<input type="text" class="input box" type='email' placeholder="Enter your email"></input>
<input type="text" class="input boxh" type='password' placeholder="Enter password"></input>
```

#### Inset
```html
<input type="text" class="input in" placeholder="What's your question?"></input>
<input type="text" class="input inh" placeholder="Enter something"></input>
```

#### Expand
```html
<input type="text" class="input input-expand" placeholder="Expand me"></input>
```

### List
List of items with attributes.

#### Basic
```html
 <ul class="ul mrgh">
    <li>Apples</li>
    <li>Oranges</li>
    <li>Tomatos</li>
</ul>
<ul class="ul bdr col mrgh">
    <li>Apples</li>
    <li>Oranges</li>
    <li>Tomatos</li>
</ul>
```

#### Descriptions
```html
<ul class="ul">
    <li>$1,202,203.44 <span>Sales</span></li>
    <li>6,345 <span>Customers</span></li>
    <li>345 <span>Assets</span></li>
</ul>
<ul class="ul bdr txtc br mrgh">
    <li>Test 1<span>40 questions</span></li>
    <li>Midterm <span>44 questions</span></li>
    <li>Final <span>77 questions</span></li>
</ul>
<ul class="ul txtr mrgh">
    <li>Elements <span>Elements on the page</span></li>
    <li>Outages <span>Website outages</span></li>
    <li>People <span>Total people working</span></li>
</ul>
```

#### Content
```html
  <ul class="ul-cnt box br mrgh">
    <li>Update <a class="red">Failure</a></li>
    <li>Install <a class="orange">Caution</a></li>
    <li>Build<a class="green">Success</a></li>
</ul>
<ul class="ul-cnt bdr mrgh">
    <li>Subscription <a class="btn btn-primary">Cancel</a></li>
    <li>Package<a class="btn btn-primary">Purchase</a></li>
    <li>roobie.css <a class="btn btn-primary">Download</a></li>
</ul>
<ul class="ul-cnt box br blue2 mrgh">
    <li><a class="red">Updated required</a>23.4.2</li>
    <li><a>Up to date</a>9.392 </li>
    <li><a>Up to date</a>02.34.4.2021</li>
</ul>
```

### Navbar

#### Horizontal
```html
<nav class="nav-row jst-between aln-center bdr1">
    <div class="row aln-center">
        <a class="nav-title" href="">Roobie</a>
        <div class="row rsp-menu">
            <a class="nav-item">Home</a>
            <a class="nav-item">Products</a>
            <a class="nav-item">About Us</a>
            <a class="nav-item">Contact Us</a>
            <a class="nav-item">Help</a>
        </div>
    </div>
    <div class="row">
        <a class="nav-item">user@roobie.net</a>
    </div>
</nav>
<nav class="nav-row jst-around aln-center bdr1">
    <div class="row aln-center">
        <a class="nav-title" href="">Roobie</a>
    </div>
    <div class="row aln-center rsp-menu-xl">
        <a class="nav-item">Home</a>
        <a class="nav-item">Products</a>
        <a class="nav-item">About Us</a>
        <a class="nav-item">Contact Us</a>
        <a class="nav-item">Help</a>
    </div>
    <div class="row">
        <a class="nav-item">user@roobie.net</a>
    </div>
</nav>
<nav class="nav-row jst-around aln-center bdr1">
    <div class="row aln-center">
        <a class="nav-title" href="">Roobie</a>
        <div class="row aln-center rsp-menu-l">
            <a class="nav-item">Home</a>
            <a class="nav-item">Products</a>
            <a class="nav-item">About Us</a>
            <a class="nav-item">Contact Us</a>
            <a class="nav-item">Help</a>
        </div>
    </div>
</nav>
<nav class="nav-row jst-between aln-center bdr1">
    <div class="row aln-center">
        <a class="nav-title" href="">Roobie</a>
        <div class="row aln-center rsp-menu">
            <a class="nav-item">Home</a>
            <a class="nav-item">Products</a>
            <a class="nav-item">About Us</a>
            <a class="nav-item">Contact Us</a>
        </div>
    </div>
    <input type="text" class="input input-outline" placeholder="Search">
</nav>
<nav class="nav-row jst-between aln-center bdr1">
    <div class="row aln-center">
        <a class="nav-title" href="">Roobie</a>
        <div class="row aln-center rsp-menu">
            <a class="nav-item">Home</a>
            <a class="nav-item">Products</a>
            <a class="nav-item">About Us</a>
            <a class="nav-item">Contact Us</a>
        </div>
    </div>
    <input type="text" class="input input-outline input-expand" placeholder="Search with expand">
</nav>
<nav class="nav-row jst-between aln-center bdr1">
    <a class="nav-title" href="">Roobie</a>
    <div class="row aln-center rsp-menu-s">
        <a class="nav-item">Home</a>
        <a class="nav-item">Products</a>
        <a class="nav-item">Help</a>
    </div>
</nav>
```

#### Vertical
```html
<nav class="nav-col jst-between aln-center bdr1 txtc">
    <div class="col">
        <a class="nav-title" href="">Roobie</a>
        <a class="nav-item">Home</a>
        <a class="nav-item">Products</a>
        <a class="nav-item">About Us</a>
        <a class="nav-item">Contact Us</a>
        <a class="nav-item">Help</a>
    </div>
    <div class="col aln-center">
        <a class="nav-item">user@roobie.net</a>
    </div>
</nav>
<nav class="nav-col jst-between aln-center bdr1 txtc">
    <a class="nav-title" href="">Roobie</a>
    <div class="col">
        <a class="nav-item">Home</a>
        <a class="nav-item">Products</a>
        <a class="nav-item">About Us</a>
        <a class="nav-item">Contact Us</a>
        <a class="nav-item">Help</a>
    </div>
</nav>
<nav class="nav-col jst-between aln-center bdr1 txtc">
    <a class="nav-title" href="">Roobie</a>
    <div class="col">
        <a class="nav-item">Home</a>
        <a class="nav-item">Products</a>
        <a class="nav-item">About Us</a>
        <a class="nav-item">Contact Us</a>
        <a class="nav-item">Help</a>
    </div>
    <div class="col aln-center">
        <a class="nav-item">user@roobie.net</a>
    </div>
</nav>
<nav class="nav-col aln-center bdr1">
    <a class="nav-item"><i class="icon icon-apps"></i></a>
    <a class="nav-item"><i class="icon icon-linkedin"></i></a>
    <a class="nav-item"><i class="icon icon-facebook"></i></a>
    <a class="nav-item"><i class="icon icon-bell"></i></a>
</nav>
<nav class="nav-col aln-center bdr1 txtc">
    <div class="div">
        <h4 class="nav-heading">Section 1</h4>
        <div class="col aln-center">
            <a class="nav-item">Home</a>
            <a class="nav-item">Products</a>
        </div>
    </div>
    <div class="div">
        <h4 class="nav-heading">Section 2</h4>
        <div class="col aln-center">
            <a class="nav-item">About Us</a>
            <a class="nav-item">Contact Us</a>
            <a class="nav-item">Help</a>
        </div>
    </div>
</nav>
```

### Path
Display the current website path, or a group of items.

#### Basic
```html
<ul class="path">
    <li class="path-item">Home</li>
    <li class="path-item">Shopping</li>
    <li class="path-item">Cart</li>
</ul>
```

#### Custom Divider
```html
<ul class="path" style="--path-divider: '>'">
    <li class="path-item">Home</li>
    <li class="path-item">Order</li>
</ul>
<ul class="path" style="--path-divider: '|'">
    <li class="path-item">All</li>
    <li class="path-item">Clothes</li>
    <li class="path-item">Shoes</li>
    <li class="path-item">Hats</li>
    <li class="path-item">Accessories</li>
    <li class="path-item">Office</li>
</ul>
```

### Tag
Short blocks of content.

#### Basic
```html
<div class="tag">Tag</div>
<div class="tagh">Tag with hover</div>
```

#### Descriptions
```html
<div class="mrg2 card br box pad2">
    <h4>Mama's Pumpkin Pie</h4>
    <div class="row">
        <div class="tag">30 min</div>
        <div class="tag">Pumpkin</div>
        <div class="tag">Gluten Free</div>
    </div>
    <div class="desc pad2">
        The best recipe in the world! Delicious & easy to make.
    </div>
</div>
<div class="mrg2 card br box pad2">
    <h4>Chocolate Chip Cookies</h4>
    <div class="row">
        <div class="tag">25 min</div>
        <div class="tag">Favorite</div>
        <div class="tag cat-active">New!</div>
    </div>
    <div class="desc pad2">
        Cookies that will knock your socks off.
    </div>
</div>
```

#### Categories
```html
<div class="mrg2 div33 card br box pad2">
    <div class="col wrp category">
        <div class="row bg3 br pad2 mrg2">
            <div class="tag">Small</div>
            <div class="tag">Medium</div>
            <div class="tag">Large</div>
            <div class="tag">Extra Large</div>
        </div>
        <div class="row jst-center bg3 br pad2 mrg2">
            <div class="tag">Red</div>
            <div class="tag">Yellow</div>
            <div class="tag">Orange</div>
            <div class="tag">Purple</div>
            <div class="tag">Blue</div>
        </div>
        <div class="row jst-end bg3 br pad2 mrg2">
            <div class="tag">Update</div>
            <div class="tag">Shutdown</div>
            <div class="tag">Delete</div>
            <div class="tag">Install</div>
        </div>

        <div class="row jst-around bg3 br pad2 mrg2">
            <div class="tag">-1</div>
            <div class="tag">0</div>
            <div class="tag">+1</div>
        </div>

        <div class="row jst-between bg3 br pad2 mrg2">
            <div class="tag">Start</div>
            <div class="tag">End</div>
        </div>
    </div>
</div>
```

### Toggle
Toggle on or off.

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

### Tooltip
Show hidden text on hover.

```html
<div tooltip="Default tooltip bottom">Bottom</div>
<div tooltip="Tooltip bottom" side="bottom">Bottom</div>
<div tooltip="Tooltip top" side="top">Top</div>
<div tooltip="Tooltip left" side="left">Left</div>
<div tooltip="Tooltip right" side="right">Right</div>
```