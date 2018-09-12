const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-server-livereload');
const tildeImporter = require('node-sass-tilde-importer');

const paths = {
  scss: ['scss/**/*.scss'],
};

gulp.task('scss', () =>
  gulp
    .src(paths.scss)
    .pipe(
      sass({
        importer: tildeImporter,
      }).on('error', sass.logError),
    )
    .pipe(gulp.dest('./dist/')),
);

gulp.task('server', () => {
  gulp.src('./').pipe(
    server({
      livereload: true,
      open: true,
    }),
  );
});

gulp.task('watch', () => {
  gulp.watch(paths.scss, ['scss']);
});

gulp.task('default', ['scss', 'watch', 'server']);
