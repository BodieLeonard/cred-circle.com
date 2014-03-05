// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    changed = require('gulp-changed'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'); 


