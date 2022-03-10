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