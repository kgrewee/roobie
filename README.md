# Roobie
![Build](https://github.com/kgrewee/roobie/actions/workflows/npm.yml/badge.svg)

**No official release yet.**

A minimalistic approach to web development.  Roobie makes web development ***easier***.  Centralized CSS, JavaScript, themes, animations & more. Reuse core CSS classes and JavaScript functions instead of writing custom code.  Always build from a template.

Result:

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
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/light.css">
    <link rel="stylesheet" href="./node_modules/roobie/dist/themes/dark.css">
    <script src="./node_modules/roobie/dist/roobie.min.js"></script>
</head>
```

### Angular 
***Warning:  We have not tested our components in Angular.  Base CSS classes and themes will work correctly.***

Add Roobie dist files to **angular.json**.

```ts
 "styles": [
        "src/styles.scss",
        "./node_modules/roobie/dist/roobie.min.css",
        "./node_modules/roobie/dist/themes/light.css"
        "./node_modules/roobie/dist/themes/dark.css"
    ],
    "scripts": ["./node_modules/roobie/dist/roobie.min.js"]
```

## Themes
Roobie has two base CSS themes, dark & light.  Include the defaults or copy **dist/themes/light.css** & **dist/themes/dark.css** to a folder of your choice and customize them.  Expand on these and create more themes.  Make sure to include the theme files in your project, or things won't work correctly.  Every CSS class in Roobie is based on a theme variable.

## Contributions
Contributions are always welcome.  Feel free to contribute anything that will make web development easier and more efficient.  Branch from `develop` and make a pull request to `develop` when your branch is ready.  We will review it.  We are always looking for more help and feedback.

## Layout

### Container
Containers in Roobie are styled using width and padding.  They are the basic building block.
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
Roobie uses a Flexbox layout.  Use these if you want alignment classes to work correctly.
```html
<div class="col">Column</div>
<div class="row">Row</div>
<div class="colr">Column reverse</div>
<div class="rowr">Row reverse</div>
```

Other display classes included for convienence.
```html
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

### Wrap
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
<div class="show">Show</div>
<div class="hide">Hide</div>
```

### Z-Index
```html
<div class="z0">Theme setting</div>
<div class="z1">Theme setting</div>
<div class="z2">Theme setting</div>
<div class="z3">Theme setting</div>
<div class="z4">Theme setting</div>
<div class="z5">Theme setting</div>
<div class="z6">Theme setting</div>
```

## Components
Components for quick reference.  Not tested in SPA Frameworks such as Angular and React.

### Accordion
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

### Alert
```html
<span class="alert alert-primary">An event has occurred</span>
<span class="alert alert-secondary">An event has occurred</span>
<span class="alert alert-outline">An event has occurred</span>
<span class="alert alert-success">An event has occurred</span>
<span class="alert alert-warning">An event has occurred</span>
<span class="alert alert-danger">An event has occurred</span>
<span class="alert alert-info">An event has occurred</span>
```

### Animation
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

### Button
```html
<button type="button" class="btn">Basic</button>
<button type="button" class="btn btn-outline">Outline</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Seconday</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn bg-red2">Red</button>
<button type="button" class="btn bg-orange2">Orange</button>
<button type="button" class="btn bg-yellow2">Yellow</button>
<button type="button" class="btn bg-green2">Green</button>
<button type="button" class="btn bg-blue2">Blue</button>
<button type="button" class="btn bg-indigo2">Indigo</button>
<button type="button" class="btn bg-violet2">Violet</button>
<button type="button" class="btn box">Raised</button>
<button type="button" class="btn boxh">Raised with hover</button>
<button type="button" class="btn in">Inset</button>
<button type="button" class="btn inh">Inset with hover</button>
<button type="button" class="btn btn-primary"><i class="icon icon-heart"></i></button>
<button type="button" class="btn btn-primary"><i class="icon icon-facebook"></i></button>
<button type="button" class="btn btn-primary"><i class="icon icon-comment"></i></button>
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
```html
<div class="card">
    <h2 class="card-title">Title</h2>
    <span class="card-subtitle">Subtitle</span>
    <div class="card-content">
        This is the content.
    </div>
</div>
<div class="card">
    <h2 class="card-title">Image</h2>
    <span class="card-subtitle">By Artist Name</span>
    <div class="card-content">
        <img class="br bg2" width="400" height="200">
    </div>
</div>
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

### Dropdown
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

### Input
```html
<input type="text" class="input" placeholder="Name"></input>
<input type="text" class="input input-outline" placeholder="Input"></input>
<input type="text" class="input box" type='email' placeholder="Enter your email"></input>
<input type="text" class="input boxh" type='password' placeholder="Enter password"></input>
<input type="text" class="input in" placeholder="What's your question?"></input>
<input type="text" class="input inh" placeholder="Enter something"></input>
<input type="text" class="input input-expand" placeholder="Expand me"></input>
```

### List
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

### Navbar Horizontal
```html
<nav class="nav-row jst-between aln-center box">
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
```

### Navbar Vertical
```html
<nav class="nav-col jst-between aln-center box txtc">
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
```

### Tag
```html
<div class="tag">Tag</div>
<div class="tagh">Tag with Hover</div>
```

### Tooltip
```html
<div tooltip="Tooltip bottom" side="bottom" class="mrg">Bottom</div>
<div tooltip="Tooltip top" side="top" class="mrg">Top</div>
<div tooltip="Tooltip left" side="left" class="mrg">Left</div>
<div tooltip="Tooltip right" side="right" class="mrg">Right</div>
```