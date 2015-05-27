'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({ pattern: ['del'] });

gulp.task('clean', function(done) {
  $.del([paths.dist + '/', paths.tmp + '/', '.sass-cache/'], done);
});
