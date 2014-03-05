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

gulp.task('default', ['html', 'main', 'loader', 'libs', 'app']);

gulp.task('html', function() {
  gulp.src([
    "./scripts/index.html"
    ])
    .pipe(concat('./www/index.html'))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./'))
});

gulp.task('main', function() {
  gulp.src([
    "./scripts/main.js"
    ])
    .pipe(concat('./www/js/main.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('loader', function() {
  gulp.src([
    "./scripts/loader.js"
    ])
    .pipe(concat('./www/js/loader.min.js'))
    .pipe(gulp.dest('./'))
});


gulp.task('libs', function() {
  gulp.src([
    "./scripts/libs/*.js"
    ])
    .pipe(concat('./www/js/libs.min.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('app', function() {
  gulp.src([
    "./scripts/libs/*.js"
    ])
    .pipe(concat('./www/js/app.js'))
    .pipe(gulp.dest('./'))
});
