'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var paths = gulp.paths;
var browserSync = gulp.browserSync;

var BROWSER_SYNC_RELOAD_DELAY = 2000;

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
    // nodemon our expressjs server
    script: paths.server + '/index.js',

    // watch core server file(s) that require server restart on change
    watch: [paths.server + '/**/*.js'],
    execMap: {
      js: './node_modules/babel/bin/babel-node --harmony'
    }
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) cb();

      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false   //
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function() {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync.init({

    // watch the following files; changes will be injected (css & images) or cause browser to refresh
    files: [paths.tmp + '/serve/**/*.*'],

    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',

    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000,

    // open the proxied app in chrome
    browser: ['google chrome']
  });
});

gulp.task('serve', ['scripts', 'styles', 'watch'], function() {
  return gulp.run('browser-sync');
});
