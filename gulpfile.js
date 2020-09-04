/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const livereloadServer = require('gulp-server-livereload');
const tildeImporter = require('node-sass-tilde-importer');

const paths = {
  scss: ['scss/**/*.scss'],
};

const scss = () =>
  gulp
    .src(paths.scss)
    .pipe(
      sass({
        importer: tildeImporter,
      }).on('error', sass.logError),
    )
    .pipe(gulp.dest('./dist/'));

const server = () =>
  gulp.src('./').pipe(
    livereloadServer({
      livereload: true,
      open: true,
    }),
  );

const watch = () => gulp.watch(paths.scss).on('all', gulp.series(scss));

gulp.task('default', gulp.series(scss, gulp.parallel([watch, server])));
