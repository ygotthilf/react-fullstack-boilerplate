'use strict';

var gulp = require('gulp');

var paths = gulp.paths;
var reload = gulp.browserSync.reload;

gulp.task('watch', ['styles'], function() {
  gulp.watch([
    paths.client + '/*.html',
    paths.client + '/**/*.scss',
    'bower.json'
  ], ['styles']);

  gulp.watch([
    paths.tmp + '/serve/**/*.js',
    paths.tmp + '/serve/**/*.css',
    paths.client + '/*.html'
  ]).on('change', reload);
});
