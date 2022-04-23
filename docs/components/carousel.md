# Carousel
Interactive slider full of content.  Requires JS.

## Basic
<div id="carouselBasic" class="carousel" style="height: 350px;">
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

```html
<div id="carouselBasic" class="carousel" style="height: 350px;">
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

## Captions
<div id="carouselBasic2" class="carousel" index="1" style="height: 350px;">
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

```html
<div id="carouselBasic2" class="carousel" index="1" style="height: 350px;">
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

## Indicators
<div id="carouselIndicator" class="carousel" index="2" style="height: 350px;">
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

```html
<div id="carouselIndicator" class="carousel bdr" index="2" style="height: 350px;">
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
## Check for Carousels
To check for Carousels and create dynamic content.  Useful in SPA frameworks, not required for MPA most of the time.  Roobie checks for Carousels on initial page load, but if the Carousel is loaded after you must explicitly check for it be found and work properly.

### TypeScript
To use the Carousel class in TypeScript you must declare it.
```ts
declare var Carousel;
```

### Check Function
```js
Carousel.check();
```

### HTML
To use HTML to check for Carousels, add an `iframe` to the bottom of your HTML where the Carousel resides.
```html
<iframe onload="Carousel.check()"></iframe>
```
<iframe onload="Carousel.check()"></iframe>