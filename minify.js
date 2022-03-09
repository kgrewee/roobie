#!/usr/bin/node

const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');
const uglifyES = require('@node-minify/uglify-es');

// JS
minify({
    compressor: uglifyES,
    input: 'dist/roobie.js',
    output: 'dist/roobie.min.js',
    callback: function(err, min) {}
})

// CSS
minify({
    compressor: cleanCSS,
    input: 'dist/roobie.css',
    output: 'dist/roobie.min.css',
    callback: function(err, min) {}
})