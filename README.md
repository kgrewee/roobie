# Roobie

A collection of styles to help you build web applications.

***This whole repo is a demo.  Pull using git and open ```index.html``` in a browser.***

- ```roobie.css``` - All of the roobie styles.  Our bread and butter.
- ```components/``` - Pre-built components using roobie css & demo-specific styles.  Use these as a starting point.

## Components

- Navbar
- Button
- Grid
- Input
- Container

## Syntax

We basically have our own mini-language to simplify naming and reduce code.

### Basics

Roobie is made up of css classes and themes.  You can take the themes found in ```roobie.css``` and change the variables to your liking.  The css classes depend directly on the theme variables.

The power of Roobie is in the css classes.  You can use these to generate many different styles, all using the same css.  What!  Thats insane.  No, thats smart.  This reduces spammed css styles that make your UI impossible to maintain.  Focus on content and colors, not basic styles.  We will handle that for you.  Checkbrd the ```components/``` folder for pre-built components using our styles.

### Naming

Class names are prefixed pertaining to their function

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
- brd - Border
- in - Inset
- ord - Order
- ul - Unordered list
- ol - Ordered list
- rel - Relative
- blk - Block
- inl - Inline
- cnt - Content

### Sizing

When a class needs to have different sizes, we use this convention. 

- xs - Extra small
- s - Small
- m - Medium
- l - Large
- xl - Extra large

Some classes, such as txt, offer more extreme sizes.