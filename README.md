# Roobie

Powerful Web Framework to help you build web applications. Light-weight, fast & easy to use.

## Setup

This repo is a demo that requires a web server for dynamic content.   It can be found on the web at https://roobie.net.  We suggest a simple web server using Python.  Any web server pointing to this repo will do the trick.

1. Install Python

    https://www.python.org/downloads/

2. Start web server. Visit http://localhost:8000.

    ***Linux***

    Run `./run.sh`

    ***Windows***

    Run `python3 -m http.server` ***Not tested***

## Structure

Roobie Files
- `roobie.css` - Themes & CSS classes.
- `roobie.js` -  JavaScript helpers for dynamic content.

Demo Files
- `roobie-demo.css` Styles used alongside Roobie.  Expect your main stylesheet to look similar.
- `roobie-demo.js` JavaScript to load initial content.
- `components/` - Pre-built components using Roobie CSS.  Use these as building blocks. 
- `docs/` - Documentation for CSS classes.
- `icons/` - Open-source icons found on the internet.

## Components

- Button
- Container
- Dropdown
- Grid
- Input
- List
- Navbar
- Tag

## Cascading Style Sheets (CSS)

Roobie contains themes & CSS classes.  Change variables in `roobie.css` to your liking, the CSS Classes depend directly on the theme variables. This repo is a website built entirely with Roobie CSS.  CSS Classes can generate many different styles, using the same CSS.  Roobie centralizes styles to reduce CSS and make your code easier to maintain.  Use Roobie for your core styles, focus on content and colors instead. Checkout the `components/` folder for pre-built components using Roobie.

## JavaScript (JS)

Roobie contains generic JavaScript functions to assist you with dynamic content.  Manipulate DOM without writing any JS, add & remove CSS classes, and much more.

### Abbreviations

Common abbreviations found in class names. They don't exceed 3 characters to keep class names short and sweet. There's really not that many, and they're easy to figure out.  Once you can remember the abbreviations, it'll make it easier to develop efficiently with Roobie.

- abs - Absolute
- aln - Align
- bdr - Border
- bg - Background
- blk - Block
- br - Border Radius
- btn - Button
- cnt - Content
- csr - Cursor
- div - Container
- drp - Dropdown
- flt - Float
- flx - Flex
- fnt - Font
- ht - Height
- in - Inset
- inl - Inline
- inp - Input
- jst - Justify
- mrg - Margin
- ol - Ordered list
- op - Opacity
- ord - Order
- pad - Padding
- rel - Relative
- rsp - Responsive
- scr - Scroll
- txt - Text
- ul - Unordered list
- wrp - Wrap
- z - Z Index

### Sizes

Classes are suffixed with a size, if applicable. We use a basic and very relatable convention, much like the one you'd see at a local store.  Small, Medium, Large & Extra Large sizes are offered for most classes.  Extreme sizes are offered for some classes, such as txt, like Extra Extra Small(xxs) & Extra Extra Large(xxl).  Size values are configurable at the top of `roobie.css`. 

- s - Small
- m - Medium
- l - Large
- xl - Extra large

More extreme sizes follow the same convention.

### Hover States

Some classes offer hover states that are signified by a trailing underscore.  `box_` or `in_` are the box shadow and inset hover state classes.  They feature the same default styles as `box` and `in`, but have a hover state with different styles.

### Examples

A few examples to get you started. No content, just classes to demonstrate. Link `roobie.css` to your html and try them out.
Combine Roobie's classes together to make complex, responsive components.

**Container with 100% width**<br />
&lt;div class="`div`">&lt;/div>

**Container with padding**<br />
&lt;div class="`pad`">&lt;/div>

**Container with flex row**<br />
&lt;div class="`flx-row`">&lt;/div>

**Link styled as a Button**<br />
&lt;a class="`btn`">&lt;/a>

**Styled input box**<br />
&lt;input class="`inp`">&lt;/input>

**Small block of content**<br />
&lt;span class="`tag`">&lt;/span>

**Styled list**<br />
&lt;ul class="`ul`">&lt;/ul>

