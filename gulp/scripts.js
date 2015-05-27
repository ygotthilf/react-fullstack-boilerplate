'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var vbuffer = require('vinyl-buffer');
var vsource = require('vinyl-source-stream');

var paths = gulp.paths;
var browserSync = gulp.browserSync;

var config = {
  entries: [paths.client + '/index.js'],
  debug: true,
  insertGlobals: true,
  cache: {},
  packageCache: {},
  fullPaths: true
};

var bundler = watchify(browserify(config)
  .transform(babelify.configure({
    sourceMaps: 'inline',
    optional: ['strict'],
    sourceMapRelative: '.'
  }))
);

bundler.on('update', rebundle);
bundler.on('log', $.util.log);

function rebundle() {
  return bundler
    .bundle()
    .on('error', function(err) {
      $.util.log('Browserify Error', err);
      browserSync.notify('Browserify Error : ' + err.toString());
      this.emit('end');
    })
    .pipe(vsource('app.js'))
    .pipe(vbuffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(paths.tmp + '/serve'));
}

// Scripts
gulp.task('scripts', rebundle);
