var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
              browsers: ['last 5 versions'],
              cascade: false
          }))
      .pipe(gulp.dest('./css'));
});

gulp.task('lint', function() {
  return gulp.src('./js/src/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js', function() {
  return gulp.src([
      './bower_components/jquery/dist/jquery.js',
  		'./bower_components/ReptileForms/dist/reptileforms.js',
  		'./js/src/*.js'
  	])
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(['./js/src/*.js'], ['js']);
	gulp.watch(['./scss/*.scss'], ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'js', 'lint', 'sass']);


