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
