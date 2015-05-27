'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = gulp.paths;
var browserSync = gulp.browserSync;

gulp.task('styles:inject', function() {
  var injectFiles = gulp.src([
    paths.client + '/**/*.scss'
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(paths.client + '/', '../' + paths.client + '/');
      return '@import "' + filePath + '";';
    },

    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  return gulp.src([
       paths.client + '/index.scss'])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('styles', ['styles:inject'], function() {

  var sassOptions = {
    style: 'expanded',
    loadPath: ['client/bower_components']
  };

  return gulp.src([
    paths.tmp + '/index.scss'
  ])
    .pipe($.rubySass(sassOptions))
    .on('error', function(err) {
      $.util.log('SASS Error', err.toString());
      browserSync.notify('SASS Error : ' + err.toString());
      this.emit('end');
    })
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest(paths.tmp + '/serve'));
});
