var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('./app/**/*.*(less|scss)')
        .pipe(less({}))
        .pipe(gulp.dest('./app'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        "port": 8000,
        "server": { 
            "baseDir": "./",
            "index": "./app/index.html" 
        }
    });

    gulp.watch("./app/*.scss", ['less']);

    gulp.watch("./app/**/*.*(js|html)").on("change", browserSync.reload);
});