var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// bookmarkletのminify
gulp.task("blmin", function(){
    gulp.src(["./bookmarklet/bookmarklet.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./bookmarklet/min"));
});
