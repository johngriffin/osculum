var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'web'
  });
});
 
gulp.task('default', ['webserver']);
