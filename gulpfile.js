var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');
var tildeImporter = require('node-sass-tilde-importer');

var paths = {
  scss: ['scss/**/*.scss']
};

gulp.task('scss', function() {
  return gulp.src(paths.scss)
    .pipe(sass({
      importer: tildeImporter
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('server', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['scss']);
});

gulp.task('default', ['scss', 'watch', 'server']);
