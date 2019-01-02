const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
// const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const reload = browserSync.reload

gulp.task('browser-sync', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./views/**/*.pug', ['html'])
  // gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch('./scss/**/*.scss', ['css'])
  gulp.watch('./js/**/*.js', reload)
})

gulp.task('css', () => {
  return gulp.src('./scss/main.scss')
  // .pipe(plumber([{ errorHandler: false }]))
  .pipe(sass().on('error', sass.logError))
  .pipe(prefix())
  .pipe(gulp.dest('styles'))
  .pipe(browserSync.stream())

})

gulp.task('html', () => {
  return gulp.src('./views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
  // .on('end', reload)
  .on('end', browserSync.reload)
})

gulp.task('default', ['browser-sync', 'html', 'css'])





// gulp.task('imajlari_kucult', function() {
// return gulp.src('src/*.jpg')
// .pipe(imagemin())
// .pipe(gulp.dest('build'));
// });



