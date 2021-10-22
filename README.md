# Roobie

A collection of CSS classes & themes to help you build web applications.  Make CSS easy with helper methods and pre-built components to kickstart your web project.  Light-weight, fast & easy to use.

## Setup

This repo is a demo.  It is found at http://roobie.net and can also be run locally with a web server.

1. Install Python3

    https://www.python.org/downloads/

2. Start web server

    We suggest a simple web server using Python.  Any web server pointing to the roobie/ folder will do the trick.

    ***Linux***

    Run `./run.sh` to start a python web server on port 8000.  Visit http://localhost:8000.

    ***Windows***

    Run `python3 -m http.server` in a terminal.  ***Not tested***


## Files

- `roobie.css` - All of the roobie styles.  Take a look, its well commented.
- `roobie.js` -  JavaScript helpers for dynamic content.
- `roobie-demo.css` Styles used alongside Roobie.  Expect your main stylesheet to look similar.
- `components/` - Pre-built components using Roobie CSS.  Use these as building blocks. 
- `classes/` - Documentation for our CSS classes.

## Components

- Button
- Container
- Dropdown
- Grid
- Input
- List
- Navbar
- Tag

## Basics

Roobie is made up of CSS classes & themes.  Change variables in `roobie.css` to your liking.  The CSS Classes depend directly on the theme variables.  Change those, you change the whole theme.  You can build your whole web-app with Roobie and not write any CSS except for custom colors.  This repo is a website built entirely with Roobie CSS.

The power of Roobie is in the CSS classes.  These can generate many different styles, using the same CSS.  Roobie centralizes styles to reduce spammed CSS and to make your UI easier to maintain.  Use Roobie for your core styles, and focus on content and colors instead. Checkout the `components/` folder for pre-built components using our CSS classes.

## Classes

Roobie is all about CSS Classes.  Class names will resemble their function.

### Abbreviations

Common abbreviations found in class names. They don't exceed 3 characters to keep class names short and sweet. There's really not that many, and they are easy to figure out.  Once you can remember the abbreviations, it'll make it easier to develop efficiently with Roobie.

- div - Container
- ht - Height
- scr - Scroll
- flx - Flex
- flt - Float
- mrg - Margin
- pad - Padding
- op - Opacity
- btn - Button
- txt - Text
- wrp - Wrap
- aln - Align
- jst - Justify
- bg - Background
- inp - Input
- br - Border Radius
- bdr - Border
- in - Inset
- ord - Order
- ul - Unordered list
- ol - Ordered list
- abs - Absolute
- rel - Relative
- blk - Block
- inl - Inline
- cnt - Content
- drp - Dropdown
- fnt - Font
- csr - Cursor

### Sizes

Classes are suffixed with a size, if applicable. We use a basic and very relatable convention, much like the one you'd see at a local store.  Small, Medium, Large & Extra Large are offered for most classes.  Extreme value are offered for some classes, such as txt, like Extra Extra Small(xxs) & Extra Extra Large(xxl).  Values for sizes are configurable at the top of `roobie.css`. 

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

