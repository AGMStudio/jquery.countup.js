var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var pump = require('pump');

gulp.task('compress', function(cb) {
    pump([
            gulp.src('jquery.countup.js'),
            uglify(),
            rename('jquery.countup.min.js'),
            gulp.dest('.')
        ],
        cb
    );
});

gulp.task('default', ['compress']);
