var gulp = require('gulp'),
    gutil = require('gulp-util'),
    c = gutil.colors,
    log = gutil.log;

gulp.task('test', function() {
  log(c.magenta('Running tests'));
});

gulp.task('default', []);