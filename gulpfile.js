const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const prefix = require('gulp-autoprefixer')

// compile scss into css
function style() {
  // 1. where is my scss file
  return gulp.src('./scss/main.scss')
  // 2. pass that file through sass compiler
    .pipe(sass().on('error', sass.logError)) 
  // prefix
    .pipe(prefix())
  // 3. where do I save the compiled CSS?
    .pipe(gulp.dest('./css'))
  // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

// compile pug file into html
function htmlpug() {
  return gulp.src('./views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .on('end', browserSync.reload)
}

function watch() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./views/**/*.pug', htmlpug)
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.htmlpug = htmlpug;
exports.watch = watch;
exports.default = watch;