# Roobie

A collection of styles to help you build web applications.  Link `roobie.css` to your html to get started.

***This whole repo is a demo.  Pull using git and open ```index.html``` in a browser.***

- ```roobie.css``` - All of the roobie styles.  Our bread and butter.
- ```components/``` - Pre-built components using roobie css & demo-specific styles.  Use these as building blocks.

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

Roobie is made up of css classes and themes.  You can take the themes found in ```roobie.css``` and change the variables to your liking.  The css classes depend directly on the theme variables.  Change those, you change the whole theme.  You can build your whole web-app with Roobie and not write any CSS except for custom colors.

The power of Roobie is in the css classes.  You can use these to generate many different styles, using the same css.  Roobie centralizes styles to reduce spammed CSS and to make your UI easier to maintain.  Focus on content and colors, not basic styles.  We will handle that for you.  Checkout the ```components/``` folder for pre-built components using our CSS classes.

## Naming

Class names are named according to their function.  Here's some common abbreviations found in class names.

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
- spc - Space
- bg - Background
- inp - Input
- br - Border Radius
- bdr - Border
- in - Inset
- ord - Order
- ul - Unordered list
- ol - Ordered list
- rel - Relative
- blk - Block
- inl - Inline
- cnt - Content
- drp - Dropdown
- fnt - Font

## Sizing

When a class needs to have different sizes, we use this convention.  Values for sizes are configurable at the top of `roobie.css`. 

- xs - Extra small
- s - Small
- m - Medium
- l - Large
- xl - Extra large

Some classes, such as txt, offer more extreme sizes.