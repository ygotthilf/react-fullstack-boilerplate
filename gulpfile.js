'use strict';

var gulp = require('gulp');

gulp.paths = {
  client: 'client',
  server: 'server',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

gulp.browserSync = require('browser-sync').create();

require('require-dir')('./gulp');
