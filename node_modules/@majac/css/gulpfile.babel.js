'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del';

const DIR = {
  SRC: 'src',
  DEST: 'dist'
};

const SRC = {
  JS: DIR.SRC + '/js/*.js',
  HTML: DIR.SRC + '/index.html',
  IMG: DIR.SRC + '/img/*'
  // HTML: DIR.SRC + '/*.html',
  // LIB: DIR.SRC + '/pages/*.html'
};

const DEST = {
  JS: DIR.DEST + '/js',
  HTML: DIR.DEST + '/',
  IMG: DIR.DEST + '/img'
};