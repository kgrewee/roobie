#!/usr/bin/node

const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');
const uglifyES = require('@node-minify/uglify-es');

// Min
minify({
    compressor: uglifyES,
    input: 'dist/roobie.js',
    output: 'dist/roobie.min.js',
    callback: function(err, min) {}
})
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.css',
    output: 'dist/roobie.min.css',
    callback: function(err, min) {}
})

// Bundle
minify({
    compressor: uglifyES,
    input: 'dist/roobie.bundle.js',
    output: 'dist/roobie.bundle.js',
    callback: function(err, min) {}
})
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.bundle.css',
    output: 'dist/roobie.bundle.css',
    callback: function(err, min) {}
})

// Animations
minify({
    compressor: uglifyES,
    input: 'dist/roobie.animations.js',
    output: 'dist/roobie.animations.js',
    callback: function(err, min) {}
})
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.animations.css',
    output: 'dist/roobie.animations.css',
    callback: function(err, min) {}
})

// Animations
minify({
    compressor: uglifyES,
    input: 'dist/roobie.animations.js',
    output: 'dist/roobie.animations.js',
    callback: function(err, min) {}
})
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.animations.css',
    output: 'dist/roobie.animations.css',
    callback: function(err, min) {}
})

// Components
minify({
    compressor: uglifyES,
    input: 'dist/roobie.components.js',
    output: 'dist/roobie.components.js',
    callback: function(err, min) {}
})
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.components.css',
    output: 'dist/roobie.components.css',
    callback: function(err, min) {}
})

// Layout
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.layout.css',
    output: 'dist/roobie.layout.css',
    callback: function(err, min) {}
})

// Themes
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.themes.css',
    output: 'dist/roobie.themes.css',
    callback: function(err, min) {}
})

// Utilties
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.utilities.css',
    output: 'dist/roobie.utilities.css',
    callback: function(err, min) {}
})