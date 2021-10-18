# Roobie

CSS made easy. A collection of styles to help you build web applications.  Link `roobie.css` to your html to get started.

***This whole repo is a demo.  Pull using git and open `index.html` in a browser.***

- `roobie.css` - All of the roobie styles.  Take a look, its well commented.
- `components/` - Pre-built components using Roobie CSS & demo-specific styles.  Use these as building blocks.

## Components

- Navbar
- Button
- Grid
- Input
- Container
- Dropdown
- List
- Tag

## Basics

Roobie is made up of CSS Classes & Themes.  Change variables in `roobie.css` to your liking.  The CSS Classes depend directly on the theme variables.  Change those, you change the whole theme.  You can build your whole web-app with Roobie and not write any CSS except for custom colors.  This repo is a website built entirely with Roobie CSS.

The power of Roobie is in the CSS Classes.  These can generate many different styles, using the same CSS.  Roobie centralizes styles to reduce spammed CSS and to make your UI easier to maintain.  Use Roobie for your core styles, and focus on content and colors instead. Checkout the `components/` folder for pre-built components using our CSS classes.

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

Classes need to have different sizes, they are also abbreviated.  We use a basic and very relatable convention, much like the one you'd see at a store.  Small, Medium, Large & Extra Large are offered for most classes.  Extreme value are offered for some classes, such as txt, like Extra Extra Small & Extra Extra Large.  Values for sizes are configurable at the top of `roobie.css`. 

- s - Small
- m - Medium
- l - Large
- xl - Extra large

More extreme sizes follow the same convention.

### Examples

A few examples to get you started. No content, just classes to demonstrate. Link `roobie.css` to your html and try them out.


**Container with 100% width**&nbsp;
&lt;div class="div">&lt;/div>

**Container with padding**&nbsp;
&lt;div class="pad">&lt;/div>

**Container with flex row**&nbsp;
&lt;div class="flx-row">&lt;/div>

**Link styled as a Button**&nbsp;
&lt;a class="btn">&lt;/a>

**Styled input box**&nbsp;
&lt;input class="inp">&lt;/input>

**Small block of content**&nbsp;
&lt;span class="tag">&lt;/span>

**Styled list**&nbsp;
&lt;ul class="ul">&lt;/ul>

